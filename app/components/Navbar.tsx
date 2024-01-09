"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { youngSerif } from "../layout";
import { useSession } from "next-auth/react";

import AccountDropdown from "./AccountDropdown";
import { ShoppingBag } from "lucide-react";
import Box from "./Box";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="bg-slate-50 py-3 px-2 flex justify-center border-b-1 border-slate-300">
      {status !== "loading" && (
        <div className="max-w-[1200px] flex w-full justify-between align-middle items-center">
          <Link href="/" className={`${youngSerif.className} text-lg`}>
            Libro at Aklat
          </Link>
          <div className="flex gap-5">
            <Link href="/new-books">January books</Link>
            <Link href="/all-books">All books</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/gifts">Gifts</Link>
          </div>
          {status === "unauthenticated" && (
            <div className="flex gap-3">
              <Button className="flex" variant="outline" asChild>
                <Link href="/api/auth/signin">Sign in</Link>
              </Button>
              <Button className="flex" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
          {status === "authenticated" && (
            <div className="flex gap-4">
              <AccountDropdown />
              <Box />
              {/* <div className="flex gap-2 items-center">
                <p>{`${session.user?.name}'s box`}</p>
                <ShoppingBag size={20} />
              </div> */}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
