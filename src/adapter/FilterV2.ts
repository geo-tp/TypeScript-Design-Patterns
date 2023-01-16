import { Movie } from "./Movie";

export class FilterV2 {
  static filterByActor(actor: string, movies: Movie[]): Movie[] {
    const moviesWithSelectedActor = [];

    for (let movie of movies) {
      for (let movieActor of movie.actors) {
        if (actor == movieActor) {
          moviesWithSelectedActor.push(movie);
          break;
        }
      }
    }

    return moviesWithSelectedActor;
  }
}
