"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import useCartStore from "../store/CartStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Box = () => {
  const { data: session } = useSession();
  const cart = useCartStore((store) => store.cart);

  const { data: box } = useQuery<any>({
    queryKey: ["addToCart"],
    queryFn: () =>
      axios.get(`/api/cart/${session?.user?.image}`).then((res) => res.data),
  });

  console.log("sasasa", box);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <p>{`${session?.user?.name}'s box`}</p>
          <ShoppingBag size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {cart.map((book) => book.title)}
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
