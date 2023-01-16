import { Movie } from "./../adapter/Movie";
import { MovieSearch } from "./AMovieSearch";

export class MovieNameSearch extends MovieSearch {
  override filterMovies(query: string): Movie[] {
    return [];
  }
}
