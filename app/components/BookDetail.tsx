import { GENRE_LABEL } from "../constants/book";
import { Book } from "../models/book";
import Image from "next/image";
import Tag from "./Tag";
import AddToCart from "./AddToCart";
import { Separator } from "@/components/ui/separator";
import BookDetailItem from "./detailPage/BookDetailItem";
import Divider from "./detailPage/Divider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownRight, ChevronRight, MoveRight } from "lucide-react";

interface Props {
  book?: Book;
}

const BookDetail = ({ book }: Props) => {
  if (!book) return;

  return (
    <div className=" w-full flex-2 flex-col">
      <div className="bg-slate-100 px-52 py-10 flex justify-center">
        <Image src={book.image} width={200} height={300} alt="book" />
      </div>
      <div className="bg-slate-50  py-10 flex flex-col gap-[6px]">
        <div className="flex flex-col gap-2">
          <p className="text-center">{GENRE_LABEL[book.genre].toUpperCase()}</p>
          <p className="text-2xl font-semibold text-center">{book.title}</p>
          <p className="text-center">{`by ${book.author}`}</p>
          <Tag badge={book.badge} className=" flex m-auto" />
          <AddToCart className="flex m-auto w-52 mb-2" />
        </div>
        <Divider />
        <BookDetailItem label="Quick Take" value={book.overview} />
        <Divider />
        <BookDetailItem label="Synopsis" value={book.synopsis} />
        <Divider />
        <BookDetailItem
          label="Content Warning"
          value={book.contentWarning || "This book has no content warning."}
        />
        <Divider />
        <BookDetailItem
          label="Preview"
          value={`Get an early look from the first pages of ${book.title}.`}
        />
        <div className="flex gap-0">
          <Button
            asChild
            variant={"link"}
            className="ml-6 mr-0 text-md text-slate-600"
          >
            <Link href="/">Read a sample</Link>
          </Button>
          <Button
            variant="link"
            size="icon"
            className="flex justify-center -ml-4 "
          >
            <MoveRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
