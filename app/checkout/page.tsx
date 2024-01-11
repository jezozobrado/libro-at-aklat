import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <div className="m-auto w-full flex justify-center mt-60 text-lg font-semibold">{`Checkout is not yet implemented in the BE.`}</div>
      <Button variant={"link"} className="m-auto flex justify-center text-md">
        <Link href="/all-books">Go back to book selections.</Link>
      </Button>
    </>
  );
};

export default Checkout;
