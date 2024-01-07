import { Book } from "@/app/models/book";
import Image from "next/image";
import Tag from "../Tag";
import { GENRE_LABEL } from "@/app/constants/book";
import Link from "next/link";

interface Props {
  book?: Book;
}

const BookCarouselItem = ({ book }: Props) => {
  if (!book) return;
  return (
    <div className="flex flex-col w-full justify-center gap-2 ">
      <div className="flex justify-center scale-75 -my-6">
        <Link href={`/all-books/${book.slug}`}>
          <Image src={book.image} width={200} height={300} alt="book" />
        </Link>
      </div>
      <p className="flex justify-center text-center font-semibold text-sm -mt-2 text-slate-800">
        {GENRE_LABEL[book.genre].toUpperCase()}
      </p>
      <Tag badge={book.badge} className="flex justify-center m-auto" />
    </div>
  );
};

export default BookCarouselItem;
