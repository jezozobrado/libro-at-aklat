"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import { Book } from "../models/book";
import Link from "next/link";
import useCartStore from "../store/CartStore";

const NewBooks = () => {
  const { data: books } = useQuery<Book[]>({
    queryKey: ["new-books"],
    queryFn: () =>
      axios
        .get("/api/books", { params: { month: "0124" } })
        .then((res) => res.data),
  });

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 my-16">
        <p className={`font-young  text-8xl flex justify-center`}>
          January books
        </p>
        <p className="flex justify-center">
          New month. New reads. Add your favorite(s) to your box now.
        </p>
      </div>

      {books?.map((book, i) => (
        <Link href={`/all-books/${book.slug}`} key={i}>
          <BookCard book={book} key={i} />
        </Link>
      ))}
    </div>
  );
};

export default NewBooks;
