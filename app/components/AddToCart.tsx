"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "../store/CartStore";
import { Book } from "../models/book";
import { useSession } from "next-auth/react";
import axios from "axios";

interface Props {
  className?: string;
  book: Book;
}

const AddToCart = ({ className, book }: Props) => {
  const { data: session } = useSession();
  // const setCart = useCartStore((s) => s.setCart);
  // const cart = useCartStore((s) => s.cart);

  // const { data: books } = useQuery<Book[]>({
  //   queryKey: [queryKey],
  //   queryFn: () =>
  //     axios.get("/api/books", { params: { month } }).then((res) => res.data),
  // });

  return (
    <Button
      className={`${className} text-md`}
      onClick={(e) => {
        e.preventDefault();
        axios
          .put("/api/cart", { id: session?.user?.image, cart: [book.id] })
          .then((res) => res.data);
      }}
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
