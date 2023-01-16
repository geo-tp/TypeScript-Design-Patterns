import { Movie } from "./../adapter/Movie";

export abstract class MovieSearch {
  movies: Movie[];

  constructor(movies: Movie[]) {
    this.movies = movies;
  }

  filterMovies(query: string): Movie[] {
    return [];
  }

  search(query: string) {
    return this.filterMovies(query);
  }
}
