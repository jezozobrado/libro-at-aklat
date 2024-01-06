import { youngSerif } from "@/app/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center mt-20 w-[750px] m-auto flex-col gap-4">
      <div
        className={`${youngSerif.className} text-[100px] font- text-center leading-tight tracking-wide`}
      >
        Books are our jam.
      </div>
      <p className="w-[500px] m-auto text-center">
        Choose from a curated selection of the best new hardcovers and
        audiobooks every month.
      </p>
      <div className="flex gap-3 justify-center">
        <Button>Join now</Button>
        <Button variant="outline">Give a gift</Button>
      </div>
      <div className="flex gap-0 items-baseline justify-center">
        <p>Already a member?</p>
        <Button asChild variant="link">
          <Link href="/login" className="text-base">
            Login.
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;