"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const AccountDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Account</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button asChild variant="link">
            <Link href="/account-details">Account details</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button asChild variant="link">
            <Link href="/account-details">Bookshelf</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button asChild variant="link">
            <Link href="/account-details">To be read</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button asChild variant="link">
            <Link href="/api/auth/signout">Sign out</Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
