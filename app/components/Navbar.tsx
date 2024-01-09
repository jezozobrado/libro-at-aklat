import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { youngSerif } from "../layout";
import { useSession } from "next-auth/react";

const Navbar = () => {
  // const { status, data: session } = useSession();

  // console.log("status", status);
  return (
    <nav className="bg-slate-50 py-3 px-2 flex justify-center border-b-1 border-slate-300">
      <div className="max-w-[1200px] flex w-full justify-between align-middle items-center">
        <Link href="/" className={`${youngSerif.className} text-lg`}>
          Libro at Aklat
        </Link>
        <div className="flex gap-5">
          <Link href="/new-books">January books</Link>
          <Link href="/all-books">All books</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/gifts">Gifts</Link>
          <Link href="/api/auth/signin">Sign in</Link>
        </div>
        <div className="flex gap-3">
          <Button className="flex" variant="outline">
            Log in
          </Button>
          <Button className="flex">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
