import express from "express";
import { home, filterMovie, movieDetail } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/filter", filterMovie);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
