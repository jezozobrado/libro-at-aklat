"use client";
import { useQuery } from "@tanstack/react-query";
import BookCarousel from "./BookCarousel";
import axios from "axios";
import { Book } from "@/app/models/book";

interface Props {
  queryKey: string;
  month: string;
  title: string;
}

const CarouselByMonth = ({ queryKey, month, title }: Props) => {
  const { data: books, isLoading } = useQuery<Book[]>({
    queryKey: [queryKey],
    queryFn: () =>
      axios.get("/api/books", { params: { month } }).then((res) => res.data),
  });

  return <>{!isLoading && <BookCarousel books={books} title={title} />}</>;
};

export default CarouselByMonth;
