import React from "react";
import CarouselByMonth from "./allBooks/CarouselByMonth";

const ShelfByMonth = () => {
  return (
    <>
      <CarouselByMonth month="0124" queryKey="jan24" title="January 2024" />
      <CarouselByMonth month="1223" queryKey="dec23" title="December 2023" />
      <CarouselByMonth month="1123" queryKey="nov23" title="November 2023" />
      <CarouselByMonth month="1023" queryKey="oct23" title="October 2023" />
      <CarouselByMonth month="0923" queryKey="sept23" title="September 2023" />
    </>
  );
};

export default ShelfByMonth;
