import NewBooksCarousel from "../components/allBooks/NewBooksCarousel";
import CarouselByGenre from "../components/allBooks/CarouselByGenre";
import { Badge, Genre } from "../enums/book";
import CarouselByMonth from "../components/allBooks/CarouselByMonth";
import CarouselByTag from "../components/allBooks/CarouselByTag";

const AllBooks = () => {
  return (
    <div>
      <div className="flex  gap-8 flex-col">
        <p className="text-8xl font-young flex justify-center max-w-[800px] m-auto text-center mt-20">
          Our top books in one spot
        </p>
        <p className="flex justify-center">
          Choose from our past and present favorites.
        </p>
      </div>
      <NewBooksCarousel />
      <CarouselByGenre
        genre={Genre.THRILLER}
        queryKey="thriller"
        title="Thrills and Chills"
      />
      <CarouselByGenre
        genre={Genre.ROMANCE}
        queryKey="contemporary"
        title="Slice of life"
      />
      <CarouselByMonth month="1223" queryKey="dec23" title="December 2023" />
      <CarouselByTag
        badge={Badge.EARLY_RELEASE}
        title="Early Releases"
        queryKey="early"
      />
    </div>
  );
};

export default AllBooks;
