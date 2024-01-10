"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import { Book } from "../models/book";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const NewBooks = () => {
  const router = useRouter();
  const { data: books, isLoading } = useQuery<Book[]>({
    queryKey: ["new-books"],
    queryFn: () =>
      axios
        .get("/api/books", { params: { month: "0124" } })
        .then((res) => res.data),
  });

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-5 my-16">
          <p className={`font-young  text-8xl flex justify-center`}>
            January books
          </p>
          <p className="flex justify-center">
            New month. New reads. Add your favorite(s) to your box now.
          </p>
        </div>

        {isLoading ? (
          <Loader2 size={40} className="m-auto animate-spin" />
        ) : (
          books?.map((book, i) => (
            <Link href={`/all-books/${book.slug}`} key={i}>
              <BookCard book={book} key={i} />
            </Link>
          ))
        )}

        {!isLoading && (
          <div className="flex m-auto gap-2 flex-col mb-20 mt-12">
            <p className="font-young text-2xl flex justify-center">
              Not into this month's books?
            </p>
            <p className="flex justify-center">
              Check out our past selections.
            </p>
            <Button
              className="w-[200px] flex justify-center m-auto"
              onClick={() => router.push("/all-books")}
            >
              See all books
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewBooks;
