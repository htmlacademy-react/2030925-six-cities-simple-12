import { Review } from '../../types/review-type';
import { User } from '../../types/user-type';

export type ReviewItemProps = {
 review: Review;
 user: User;
}

export default function ReviewItem(props: ReviewItemProps): JSX.Element {
  const {review} = props;
  const {user} = props;
  const {rating,date,text} = review;
  const {avatar,name} = user;

  const parseDate = () => {
    const currentDate = new Date(date);
    const month = currentDate.toLocaleString('default', {month: 'long'});
    return `${month} ${currentDate.getFullYear()}`;
  };
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{parseDate()}</time>
      </div>
    </li>
  );
}
