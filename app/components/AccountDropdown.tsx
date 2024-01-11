"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const AccountDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <CircleUserRound size={20} />
          Account
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button asChild variant="link">
            <Link href="/account-details">Account details</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button asChild variant="link">
            <Link href="/book-shelf">Bookshelf</Link>
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
