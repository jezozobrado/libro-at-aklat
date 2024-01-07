import { Badge, Genre } from "../enums/book";

export const GENRE_LABEL: Record<Genre, string> = {
  [Genre.THRILLER]: "Thriller",
  [Genre.CONTEMPORARY_FICTION]: "Contemporary Fiction",
  [Genre.FANTASY]: "Fantasy",
  [Genre.HISTORICAL_FICTION]: "Historical Fiction",
  [Genre.HORROR]: "Horror",
  [Genre.LITERARY_FICTION]: "Literary Fiction",
  [Genre.MEMOIR]: "Memoir",
  [Genre.MYSTERY]: "Mystery",
  [Genre.NON_FICTION]: "Non Fiction",
  [Genre.ROMANCE]: "Romance",
  [Genre.SCIFI]: "Sci-fi",
};

export const BADGE_LABEL: Record<Badge, string> = {
  [Badge["3PEAT_AUTHOR"]]: "3PEAT AUTHOR",
  [Badge.BOOK_OF_THE_YEAR]: "BOOK OF THE YEAR",
  [Badge.DEBUT]: "DEBUT",
  [Badge.EARLY_RELEASE]: "EARLY RELEASE",
  [Badge.REPEAT_AUTHOR]: "REPEAT AUTHOR",
  [Badge.BOTY_FINALIST]: "3PEAT AUTHOR",
  [Badge.YEARLY_LOOK_BACK]: "YEARLY LOOK BACK",
};

export const BADGE_COLOR: Record<Badge, string> = {
  [Badge["3PEAT_AUTHOR"]]: "bg-red-500",
  [Badge.BOOK_OF_THE_YEAR]: "bg-blue-500",
  [Badge.DEBUT]: "bg-orange-500",
  [Badge.EARLY_RELEASE]: "bg-amber-500",
  [Badge.REPEAT_AUTHOR]: "bg-yellow-500",
  [Badge.BOTY_FINALIST]: "bg-lime-500",
  [Badge.YEARLY_LOOK_BACK]: "bg-blue-500",
};
