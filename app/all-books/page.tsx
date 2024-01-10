"use client";
import ShelfByGenre from "../components/ShelfByGenre";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { useState } from "react";
import ShelfByDefault from "../components/ShelfByDefault";
import ShelfByMonth from "../components/ShelfByMonth";
import ShelfByTag from "../components/ShelfByTag";

const AllBooks = () => {
  const [filter, setFilter] = useState<string>("");
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
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-[250px] mt-7">
          <div className="flex gap-2 items-center">
            <Filter size={20} />
            {` Filter by ${filter}`}
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setFilter("month")}>
            Month
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setFilter("genre")}>
            Genre
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setFilter("tag")}>
            Tag
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setFilter("")}>
            Default
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {filter === "month" && <ShelfByMonth />}
      {filter === "genre" && <ShelfByGenre />}
      {filter === "tag" && <ShelfByTag />}
      {filter === "" && <ShelfByDefault />}
    </div>
  );
};
export default AllBooks;
