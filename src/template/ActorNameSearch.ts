import { Movie } from "./../adapter/Movie";
import { MovieSearch } from "./AMovieSearch";

export class ActorNameSearch extends MovieSearch {
  override filterMovies(query: string): Movie[] {
    // Todo : filter and return movies containing query
    query;
    return [];
  }
}
