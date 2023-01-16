import { FilterV2 } from "./FilterV2";
import { Movie } from "./Movie";
export class FilterAdaptater {
  movies: Movie[];
  actor: string;

  constructor(movies: Movie[], actor: string) {
    this.movies = movies;
    this.actor = actor;
  }

  filterByActor() {
    return FilterV2.filterByActor(this.actor, this.movies);
  }
}
