import Image from "next/image";
import React from "react";
import { Book } from "../models/book";
import { GENRE_LABEL } from "../constants/book";
import { Button } from "@/components/ui/button";
import Tag from "./Tag";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="max-w-[1000px] flex justify-center flex-col gap-5 w-full m-auto mb-10">
      <div className="flex justify-center w-full m-auto ">
        <div className="flex-1 flex justify-center bg-slate-100 py-14 ">
          <Image src={book.image} width={200} height={300} alt="book" />
        </div>
        <div className="flex flex-col flex-1 justify-between p-14 bg-slate-50">
          <div className="flex flex-col  gap-2  ">
            <p>{GENRE_LABEL[book.genre].toUpperCase()}</p>
            <Tag badge={book.badge} />
            <p className="text-xl font-semibold">{book.title}</p>
            <p>{book.overview}</p>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
