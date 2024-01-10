"use client";
import { useQuery } from "@tanstack/react-query";
import BookCarousel from "./BookCarousel";
import axios from "axios";
import { Book } from "@/app/models/book";
import { Badge } from "@/app/enums/book";

interface Props {
  queryKey: string;
  badge: Badge;
  title: string;
}

const CarouselByTag = ({ queryKey, badge, title }: Props) => {
  const { data: books, isLoading } = useQuery<Book[]>({
    queryKey: [queryKey],
    queryFn: () =>
      axios.get("/api/books", { params: { badge } }).then((res) => res.data),
  });

  return <>{!isLoading && <BookCarousel books={books} title={title} />}</>;
};

export default CarouselByTag;
