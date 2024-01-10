"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { X, ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import useCartStore from "../store/CartStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "../models/book";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import useBoxStore from "../store/BoxStore";

const Box = () => {
  const { data: session } = useSession();
  const setCart = useCartStore((store) => store.setCart);
  const cart = useCartStore((store) => store.cart);

  const isCartOpen = useBoxStore((s) => s.open);
  const closeCart = useBoxStore((s) => s.setClose);
  const openCart = useBoxStore((s) => s.setOpen);

  const { data: currentCart, refetch } = useQuery<any>({
    queryKey: ["addToCart"],
    queryFn: () =>
      axios.get(`/api/cart/${session?.user?.image}`).then((res) => res.data),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (session?.user?.image) {
      console.log("huh", session?.user?.image);
      refetch();
    }
  }, [session]);

  useEffect(
    () => setCart((currentCart?.[0]?.cart || []) as Book[]),
    [currentCart]
  );
  return (
    <DropdownMenu open={isCartOpen}>
      <DropdownMenuTrigger>
        <div
          className="flex gap-2 items-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openCart();
          }}
        >
          <p>{`${session?.user?.name}'s box`}</p>
          <ShoppingBag size={20} />
          <Badge className="relative bottom-2 right-4 px-1 py-[0px] m-0">
            {cart.length}
          </Badge>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent onPointerDownOutside={closeCart}>
        <X
          strokeWidth={2.5}
          size={28}
          className="ml-auto p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            closeCart();
          }}
        />
        {!!cart.length && (
          <p className="ml-2 mb-2 text-md font-semibold">{`You got great taste! ${
            cart.length === 1
              ? "One is not enough, pick more"
              : cart.length === 2
              ? "Third time's a charm"
              : "Checkout now"
          }`}</p>
        )}
        {cart?.length ? (
          cart.map((book: Book) => (
            <div key={book.id} className="flex gap-5 m-0 p-2 items-center">
              <Image
                src={book.image || ""}
                width={100}
                height={150}
                className="object-contain "
                alt="book"
              />
              <div className="flex flex-col gap-1 w-[200px]">
                <p className="text-lg font-medium">{book.title}</p>
                <p>{`by ${book.author}`}</p>
                <p>999.99</p>
              </div>
              <Button
                variant="link"
                className="text-red-700"
                onClick={() =>
                  axios
                    .put(`/api/cart/${session?.user?.image}`, {
                      bookId: book.id,
                    })
                    .then(() => refetch())
                }
              >
                <X className="mr-2 h-4 w-4" /> Remove
              </Button>
            </div>
          ))
        ) : (
          <p className="p-2 pt-2 pb-10 text-md font-semibold">
            Looks empty here. Pick your books.
          </p>
        )}
        <div className="flex gap-2 ml-auto mr-1 mb-1 justify-end">
          {cart.length ? (
            <Button variant="outline" asChild onClick={closeCart}>
              <Link href="/all-books">See other books</Link>
            </Button>
          ) : (
            <Button asChild onClick={closeCart}>
              <Link href="/all-books">See books</Link>
            </Button>
          )}
          {!!cart?.length && <Button>Checkout</Button>}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Box;
