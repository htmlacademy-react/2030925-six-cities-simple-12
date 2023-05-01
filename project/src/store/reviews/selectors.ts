import { NameSpace } from '../../const';
import { Reviews } from '../../types/review-type';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.Reviews].reviews;

export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewsLoading;

export const getPostLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewPosted;
