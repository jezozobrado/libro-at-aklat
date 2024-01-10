import React from "react";
import CarouselByMonth from "./allBooks/CarouselByMonth";
import CarouselByGenre from "./allBooks/CarouselByGenre";
import { Genre } from "../enums/book";

const ShelfByGenre = () => {
  return (
    <>
      <CarouselByGenre
        genre={Genre.CONTEMPORARY_FICTION}
        queryKey="cf"
        title="Contemporary Fiction"
      />
      <CarouselByGenre
        genre={Genre.HISTORICAL_FICTION}
        queryKey="hf"
        title="Historical Fiction"
      />
      <CarouselByGenre
        genre={Genre.FANTASY}
        queryKey="fantasy"
        title="Fantasy"
      />
      <CarouselByGenre
        genre={Genre.ROMANCE}
        queryKey="romance"
        title="Romance"
      />
      <CarouselByGenre
        genre={Genre.THRILLER}
        queryKey="thriller"
        title="Thriller"
      />
      <CarouselByGenre genre={Genre.HORROR} queryKey="horror" title="Horror" />
    </>
  );
};

export default ShelfByGenre;
