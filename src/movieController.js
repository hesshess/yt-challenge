import { getMovieById, getMovies, addMovie } from "./db";

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
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/

export const getAdd = (req, res) =>
  res.render("add", { pageTitle: "Add Movie" });

export const postAdd = (req, res) => {
  const { title, synopsis, genre } = req.body;
  console.log(title, synopsis, genre);
  /*
This adds a movie to the DB.
Only ONE required argument, it should be an object containing
  title: string;
  synopsis: string;
  genres: Array of strings;
*/

  const genreNoSpace = genre.replace(/ /g, "");
  const genres = genreNoSpace.split(",");
  const movieObj = {
    title,
    synopsis,
    genres
  };
  addMovie(movieObj);

  return res.redirect("/");
};
