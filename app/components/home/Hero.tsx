"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import HeroText from "../HeroText";

const Hero = () => {
  const { status } = useSession();
  return (
    <div className="flex justify-center mt-20 w-[750px] m-auto flex-col gap-4">
      <HeroText
        header=" Books are our jam."
        subtitle=" Choose from a curated selection of the best new hardcovers and
        audiobooks every month."
      />

      {status === "unauthenticated" && (
        <div className="flex gap-3 justify-center">
          <Button>Join now</Button>
          <Button variant="outline">Give a gift</Button>
        </div>
      )}

      {status === "unauthenticated" && (
        <div className="flex gap-0 items-baseline justify-center">
          <p>Already a member?</p>
          <Button asChild variant="link">
            <Link href="/login" className="text-[16px]">
              Login.
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Hero;
