"use client";

import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type UserMenuProps = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

const UserMenu = ({ name, email, image }: UserMenuProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='mt-4 outline-none cursor-pointer'>
        <Avatar>
          <AvatarImage src={image || "/user-placeholder.png"} className='object-cover' />
          <AvatarFallback>
            {name ? name[0].toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='w-52'>
        <DropdownMenuLabel className='flex flex-col gap-0.5'>
          <span className='font-semibold'>{name || "User"}</span>
          <span className='text-xs font-normal text-muted-foreground truncate'>{email}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className='text-xs text-muted-foreground'>Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-accent" : ""}>
          🌞 Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-accent" : ""}>
          🌙 Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-accent" : ""}>
          🖥️ System
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <a href='/api/auth/logout' className='text-red-500 focus:text-red-500 w-full cursor-pointer'>
            Logout
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
