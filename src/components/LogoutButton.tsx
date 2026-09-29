"use client";

import Link from "next/link";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const LogoutButton = () => {
  return (
    <Link href='/'>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </Link>
  );
};
export default LogoutButton;
