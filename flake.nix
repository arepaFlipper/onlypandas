{
  description = "OnlyPandas — Next.js dev shell with the Vercel CLI";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        # Match Vercel's default runtime (Node.js 24 LTS)
        nodejs = pkgs.nodejs_24;

        # The Vercel CLI is not packaged in nixpkgs, so it is installed with npm
        # into a project-local prefix (.nix/npm, git-ignored) on first use.
        vercel = pkgs.writeShellApplication {
          name = "vercel";
          runtimeInputs = [ nodejs pkgs.git ];
          text = ''
            root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
            prefix="$root/.nix/npm"
            if [ ! -x "$prefix/bin/vercel" ]; then
              echo "Installing the Vercel CLI into $prefix ..." >&2
              npm install --global --prefix "$prefix" --no-fund --no-audit vercel@latest >&2
            fi
            exec "$prefix/bin/vercel" "$@"
          '';
        };

        # Small task scripts, available inside `nix develop` and via `nix run .#<name>`
        script = name: text: pkgs.writeShellApplication {
          inherit name text;
          runtimeInputs = [ nodejs vercel pkgs.git ];
        };

        dev = script "dev" ''
          [ -d node_modules ] || npm ci
          npm run dev
        '';

        check = script "check" ''
          [ -d node_modules ] || npm ci
          npx tsc --noEmit
          npm run lint
          npm run build
        '';

        deploy-preview = script "deploy-preview" ''
          vercel deploy "$@"
        '';

        deploy-prod = script "deploy-prod" ''
          if [ -n "$(git status --porcelain)" ]; then
            echo "Warning: you have uncommitted changes; they WILL be uploaded with this deploy." >&2
          fi
          read -r -p "Deploy $(git rev-parse --short HEAD) to PRODUCTION? [y/N] " answer
          [ "$answer" = "y" ] || [ "$answer" = "Y" ] || { echo "Aborted."; exit 1; }
          vercel deploy --prod "$@"
        '';
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            nodejs
            vercel
            dev
            check
            deploy-preview
            deploy-prod
            pkgs.git
            pkgs.openssl # needed by Prisma's query engine
          ];

          env = {
            NEXT_TELEMETRY_DISABLED = "1";
          };

          shellHook = ''
            echo "🐼 OnlyPandas dev shell — node $(node --version)"
            echo "  dev             start Next.js on http://localhost:3000"
            echo "  check           type-check, lint and production build"
            echo "  vercel link     link this folder to the Vercel project (first time only)"
            echo "  deploy-preview  deploy a preview build"
            echo "  deploy-prod     deploy to production (asks for confirmation)"
          '';
        };

        apps = builtins.mapAttrs (_: drv: flake-utils.lib.mkApp { inherit drv; }) {
          inherit dev check deploy-preview deploy-prod vercel;
        };

        formatter = pkgs.nixpkgs-fmt;
      });
}
