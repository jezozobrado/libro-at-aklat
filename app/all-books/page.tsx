"use server";
import Image from "next/image";
import React from "react";

const AllBooks = () => {
  const src =
    "https://static.bookofthemonth.com/covers/list/ImpostorSyndrome_Wang-Kathy_200x300.webp";
  return (
    <div>
      AllBooks
      <Image src={src} alt="book" width={200} height={300} />
    </div>
  );
};

export default AllBooks;
