import { NameSpace } from '../../const';
import { Comments } from '../../types/review-type';
import { State } from '../../types/state';

export const getComments = (state: State): Comments => state[NameSpace.Comments].comments;
export const getCommentsLoadingStatus = (state: State): boolean => state[NameSpace.Comments].areCommentsLoading;
export const getPostLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isCommentBeingPosted;
