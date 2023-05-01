import { Review as ReviewType } from '../../types/review-type';
import { currentRating, parseDate } from '../../utils/utils';

export default function ReviewItem({text,user,rating,date}: ReviewType): JSX.Element {
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: currentRating(rating)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{parseDate(date)}</time>
      </div>
    </li>
  );
}
