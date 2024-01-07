import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookCarouselItem from "./BookCarouselItem";
import { Book } from "@/app/models/book";
import { Separator } from "@/components/ui/separator";

interface Props {
  books?: Book[];
  title: string;
}

const BookCarousel = ({ books, title }: Props) => {
  return (
    <Carousel className=" max-w-[1000px] m-auto my-10">
      <div className="flex ">
        <p className="items-center flex my-3 font-semibold text-md">{title}</p>
      </div>
      <Separator className="bg-slate-300" />
      {books && books.length > 4 && <CarouselPrevious />}
      <CarouselContent className="pb-5 pt-2">
        {books?.map((book, i) => (
          <CarouselItem className="basis-[23%]" key={i}>
            <BookCarouselItem book={book} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {books && books.length > 4 && <CarouselNext />}
    </Carousel>
  );
};

export default BookCarousel;
