"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const NewBooks = () => {
  const { data: books } = useQuery({
    queryKey: ["new-books"],
    queryFn: () => axios.get("/api/books").then((res) => res.data),
  });

  // const x = prisma?.book.findMany();

  console.log("x", books);
  return <div>NewBooks</div>;
};

export default NewBooks;
