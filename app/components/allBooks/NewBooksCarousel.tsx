"use client";
import { useQuery } from "@tanstack/react-query";
import BookCarousel from "./BookCarousel";
import axios from "axios";
import { Book } from "@/app/models/book";

const NewBooksCarousel = () => {
  const { data: books } = useQuery<Book[]>({
    queryKey: ["new-books"],
    queryFn: () =>
      axios
        .get("/api/books", { params: { month: "0124" } })
        .then((res) => res.data),
  });

  return <BookCarousel books={books} title="January 2024" />;
};

export default NewBooksCarousel;
