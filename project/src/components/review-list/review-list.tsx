import { Reviews, Review } from '../../types/review-type';
import ReviewItem from '../review-item/review-item';

export type ReviewListProps = {
    reviews: Reviews;
}

export default function ReviewList(props: ReviewListProps): JSX.Element {
  const lists = props.reviews.map((review: Review) => (
    <ReviewItem
      key={review.id}
      review={review}
      user={review.user}
    />
  ));
  return(

    <ul className="reviews__list">{lists}</ul>

  );
}
