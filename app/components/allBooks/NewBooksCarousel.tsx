"use client";
import { useQuery } from "@tanstack/react-query";
import BookCarousel from "./BookCarousel";
import axios from "axios";
import { Book } from "@/app/models/book";
import { Loader2 } from "lucide-react";

const NewBooksCarousel = () => {
  const { data: books, isLoading } = useQuery<Book[]>({
    queryKey: ["new-books"],
    queryFn: () =>
      axios
        .get("/api/books", { params: { month: "0124" } })
        .then((res) => res.data),
  });

  return (
    <>
      {isLoading ? (
        <Loader2 className="m-auto mt-20" size={40} />
      ) : (
        <BookCarousel books={books} title="January 2024" />
      )}
    </>
  );
};

export default NewBooksCarousel;
