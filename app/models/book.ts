import { Badge, Genre } from "../enums/book";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  overview: string;
  month: string;
  slug: string;
  synopsis?: string;
  badge?: Badge;
  image: string;
  contentWarning?: string;
}
