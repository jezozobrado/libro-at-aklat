"use client";

import BookCard from "@/app/components/BookCard";
import BookDetail from "@/app/components/BookDetail";
import OtherBooks from "@/app/components/OtherBooks";
import { Book } from "@/app/models/book";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  params: { slug: string };
}

const BookDetailPage = ({ params: { slug } }: Props) => {
  const router = useRouter();
  const { data: book } = useQuery<Book[]>({
    queryKey: [slug],
    queryFn: () =>
      axios.get("/api/books", { params: { slug } }).then((res) => res.data),
  });

  return (
    <div className="w-full flex justify-center max-w-[800px] mt-10 flex-col gap-3 m-auto">
      <div className="flex gap-1 items-center ">
        <Button
          variant="link"
          size="icon"
          className="flex justify-center "
          onClick={router.back}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <p className="text-md font-semibold text-slate-800">
          {book?.[0].title.toUpperCase()}
        </p>
      </div>
      {/* <div className="w-full flex justify-center max-w-10000px] my-10 m-auto"> */}
      <BookDetail book={book?.[0]} />
      {/* </div> */}
    </div>
  );
};

export default BookDetailPage;
