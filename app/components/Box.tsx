"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Box = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <p>{`${session?.user?.name}'s box`}</p>
          <ShoppingBag size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        fhajfhkajhfjkahkfjhakjfffffffffffffff
        {/* <DropdownMenuItem>
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
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Box;
