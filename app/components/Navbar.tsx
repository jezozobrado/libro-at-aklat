import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-50 py-5 px-2 flex justify-center">
      <div className="max-w-[1200px] flex w-full justify-between bg-red-50 align-middle items-center">
        <Link href="/">Libro at Aklat</Link>

        <div className="flex gap-5">
          <Link href="/new-books">January books</Link>
          <Link href="/all-books">All books</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/gifts">Gifts</Link>
        </div>

        <Button className="flex">Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
