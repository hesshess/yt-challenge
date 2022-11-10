import express from 'express';
import { home, movieDetail, getAdd, postAdd } from './movieController';

const movieRouter = express.Router();

movieRouter.get('/', home);
movieRouter.route('/add').get(getAdd).post(postAdd);
movieRouter.get('/:id', movieDetail);
export default movieRouter;
