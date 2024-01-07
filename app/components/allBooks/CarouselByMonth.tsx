"use client";
import { useQuery } from "@tanstack/react-query";
import BookCarousel from "./BookCarousel";
import axios from "axios";
import { Book } from "@/app/models/book";
import { Genre } from "@/app/enums/book";

interface Props {
  queryKey: string;
  month: string;
  title: string;
}

const CarouselByMonth = ({ queryKey, month, title }: Props) => {
  const { data: books } = useQuery<Book[]>({
    queryKey: [queryKey],
    queryFn: () =>
      axios.get("/api/books", { params: { month } }).then((res) => res.data),
  });

  return <BookCarousel books={books} title={title} />;
};

export default CarouselByMonth;
