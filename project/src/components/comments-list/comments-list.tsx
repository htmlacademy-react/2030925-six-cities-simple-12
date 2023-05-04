import React from 'react';
import { Comments } from '../../types/review-type';
import { sortReviews, makeHash } from '../../utils/utils';
import Comment from '../comment/comment';

type CommentsListProps = {
  comments: Comments;
};

function CommentsList({comments}: CommentsListProps) {
  if(!comments.length) {
    return null;
  }

  return (
    <ul className="reviews__list">
      {
        sortReviews(comments).map((comment, index) => {
          const key = makeHash(comment);

          return index < 10 ?
            <li
              className="reviews__item"
              data-testid={`offer-review-item ${comment.date}`}
              key={key}
            >
              <Comment {...comment} key={comment.id}/>
            </li>
            :
            null;
        })
      }
    </ul>
  );
}

export default React.memo(CommentsList);

