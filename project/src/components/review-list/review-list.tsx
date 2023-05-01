import React from 'react';
import { Reviews } from '../../types/review-type';
import ReviewItem from '../review-item/review-item';

export type ReviewListProps = {
    reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.slice(0, 10).map((review) => (
        <ReviewItem
          key={review.id}
          {...review}
        />
      ))}
    </ul>
  );
}

export default React.memo(ReviewList);
