import express from "express";
import { home, movieDetail, getAdd, postAdd } from "./movieController";

const movieRouter = express.Router();

// create the '/' route
// create the /:id route
// create the /add route (GET + POST)
movieRouter.get("/", home);
movieRouter.route("/add").get(getAdd).post(postAdd);
movieRouter.get("/:id", movieDetail);
export default movieRouter;
