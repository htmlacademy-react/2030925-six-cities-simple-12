import { useState } from "react"
import { Reviews } from "../../types/review-type"

export type CommentFormProps = {
    reviews: Reviews
}

export default function CommentForm ({reviews}: CommentFormProps):JSX.Element {
    const [rating,setRating] = useState(0)
    const [review, setReview] = useState('')
    return(
        <form className="reviews__form form" action="#" method="post">
            <label className="reviews__label form__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-form form__rating" />
            <input className="form__rating-input visually-hidden" name="rating" value='5' id='5-stars' type="radio" />
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                </svg>
            </label>
        <textarea
        className="reviews__textarea form__textarea" 
        id="review" 
        name="review" 
        placeholder="Tell how was your stay, what you like and what can be improved">
        value={review}
        onChange={}
        </textarea>
        <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled={true}> Submit</button>
            </div>
            </form>
    )
}