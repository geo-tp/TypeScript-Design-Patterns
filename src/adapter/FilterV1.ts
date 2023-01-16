import { Movie } from "./Movie";

export class FilterV1 {
  actor: string;
  movies: Movie[];

  constructor(actor: string, movies: Movie[]) {
    this.actor = actor;
    this.movies = movies;
  }

  filterByActor() {
    const moviesWithSelectedActor = [];

    for (let movie of this.movies) {
      for (let movieActor in movie.actors) {
        if (this.actor == movieActor) {
          moviesWithSelectedActor.push(movie);
          break;
        }
      }
    }

    return moviesWithSelectedActor;
  }
}
