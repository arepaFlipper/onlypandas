"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          {theme === "dark" && "🌙"}
          {theme === "light" && "🌞"}
          {theme === "system" && "🖥️"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>🌞 Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>🌙 Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>🖥️ System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default ModeToggle
