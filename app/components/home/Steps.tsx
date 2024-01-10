import Image from "next/image";
import React from "react";
import fiveBooks from "../../../public/images/fiveBooks.webp";
import girlReading from "../../../public/images/girl-reading.webp";
import blueBox from "../../../public/images/box.webp";
import Link from "next/link";
import { breeSerif } from "@/app/layout";
import { Button } from "@/components/ui/button";

const Steps = () => {
  return (
    <div className="flex justify-center w-[1200px] m-auto flex-col gap-20 mb-36 mt-20">
      <div className="flex gap-20 justify-between">
        <Image src={fiveBooks} alt="Five books" />
        <div className="flex flex-col gap-5 justify-center">
          <p className="font-bold">STEP 1</p>
          <p className={`${breeSerif.className} text-3xl`}>Pick your book.</p>
          <p>
            We find the best new reads—with an emphasis on early releases, fresh
            perspectives, and debut authors.
          </p>
          <Button asChild variant="link" className="text-base mr-auto pl-0">
            <Link href="/all-books">See the books</Link>
          </Button>
        </div>
      </div>

      <div className="flex gap-20 justify-between flex-row-reverse">
        <Image src={blueBox} alt="Blue box" />
        <div className="flex flex-col gap-5 justify-center">
          <p className="font-bold">STEP 2</p>
          <p className={`${breeSerif.className} text-3xl`}>Get your box.</p>
          <p>
            Keep your eye out for that bright blue box. Trust us, you’re going
            to want to cancel all your plans.
          </p>
        </div>
      </div>

      <div className="flex gap-20 justify-between">
        <Image src={girlReading} alt="Girl reading  " />
        <div className="flex flex-col gap-5 justify-center">
          <p className="font-bold">STEP 3</p>
          <p className={`${breeSerif.className} text-3xl`}>Skip whenever.</p>
          <p>
            Behind on your reading list? Skip any month or roll your credits
            over, no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
