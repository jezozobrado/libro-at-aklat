"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "../store/CartStore";
import { Book } from "../models/book";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import useBoxStore from "../store/BoxStore";

interface Props {
  className?: string;
  book: Book;
}

const AddToCart = ({ className, book }: Props) => {
  const { data: session } = useSession();
  const setCart = useCartStore((s) => s.setCart);
  const cart = useCartStore((s) => s.cart);

  const openCart = useBoxStore((s) => s.setOpen);

  const { data, refetch } = useQuery<any>({
    queryKey: ["addToCart"],
    queryFn: () =>
      axios.get(`/api/cart/${session?.user?.image}`).then((res) => res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (session?.user?.image) {
      console.log("huh", session?.user?.image);
      refetch();
    }
  }, [session?.user?.image]);

  useEffect(() => setCart((data?.[0]?.cart || []) as Book[]), [data]);

  const isPicked = cart.map((c) => c.id).includes(book.id);

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.put("/api/cart", newTodo);
    },
    onSuccess: () => {
      refetch();
      openCart();
      window.scrollTo(0, 0);
    },
  });

  return (
    <Button
      disabled={isPicked || mutation.isPending}
      className={`${className} text-md`}
      onClick={(e) => {
        e.preventDefault();
        mutation.mutate({
          id: session?.user?.image,
          cart: [book.id],
        } as unknown as void);
        // axios
        //   .put("/api/cart", { id: session?.user?.image, cart: [book.id] })
        //   .then((res) => res.data)
        //   .then(refetch);
      }}
    >
      {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isPicked ? "Already picked" : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
