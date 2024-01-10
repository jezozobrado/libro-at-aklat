import React from "react";
import CarouselByMonth from "./allBooks/CarouselByMonth";
import CarouselByTag from "./allBooks/CarouselByTag";
import { Badge } from "../enums/book";

const ShelfByTag = () => {
  return (
    <>
      <CarouselByTag
        badge={Badge.EARLY_RELEASE}
        queryKey="early"
        title="Early Release"
      />
      <CarouselByTag
        badge={Badge.BOOK_OF_THE_YEAR}
        queryKey="boty"
        title="Book of the Year"
      />
      <CarouselByTag
        badge={Badge.BOTY_FINALIST}
        queryKey="finalist"
        title="BOTY Finalist"
      />
      <CarouselByTag
        badge={Badge.REPEAT_AUTHOR}
        queryKey="repeat"
        title="Repeat Author"
      />
      <CarouselByTag
        badge={Badge["3PEAT_AUTHOR"]}
        queryKey="3peat"
        title="3Peat Author"
      />
      <CarouselByTag
        badge={Badge.YEARLY_LOOK_BACK}
        queryKey="lookback"
        title="Yearly Lookback"
      />
    </>
  );
};

export default ShelfByTag;
