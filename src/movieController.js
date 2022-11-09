import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie, pageTitle: movie.title });
};

export const filterMovie = (req, res) => {
  const {
    query: { year, rating }
  } = req;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    return res.render("movies", {
      pageTitle: `Searching by year: ${year}`,
      searchingBy: "year",
      searchingTerm: year,
      movies
    });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    return res.render("movies", {
      pageTitle: `Searching by rating: ${rating}`,
      movies
    });
  }
  res.render("404", { pageTitle: "Movie not found" });
};
