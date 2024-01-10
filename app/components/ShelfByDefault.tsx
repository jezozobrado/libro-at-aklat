import React from "react";
import { Badge, Genre } from "../enums/book";
import CarouselByGenre from "./allBooks/CarouselByGenre";
import CarouselByMonth from "./allBooks/CarouselByMonth";
import CarouselByTag from "./allBooks/CarouselByTag";
import NewBooksCarousel from "./allBooks/NewBooksCarousel";

const ShelfByDefault = () => {
  return (
    <>
      <NewBooksCarousel />
      <CarouselByGenre
        genre={Genre.THRILLER}
        queryKey="thriller"
        title="Thrills and Chills"
      />
      <CarouselByMonth month="1223" queryKey="dec23" title="December 2023" />
      <CarouselByTag
        badge={Badge.EARLY_RELEASE}
        title="Early Releases"
        queryKey="early"
      />
      <CarouselByGenre
        genre={Genre.HISTORICAL_FICTION}
        queryKey="historicalFiction"
        title="Historical Fiction"
      />
      <CarouselByGenre
        genre={Genre.ROMANCE}
        queryKey="contemporary"
        title="Romance"
      />
      <CarouselByMonth month="1123" queryKey="nov23" title="November 2023" />
    </>
  );
};

export default ShelfByDefault;
