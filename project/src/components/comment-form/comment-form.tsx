import { ChangeEvent, FormEvent, useState } from "react"

export default function CommentForm (): JSX.Element {
    const [review, setReview] = useState('')

    function handleReviewChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.preventDefault();

        setReview(event.target.value)
    }

    function handleSubmit(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
    }
    return(
        <form className="reviews__form form" action="/" method="post">
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
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
        />
        <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button 
                className="reviews__submit form__submit button" 
                type="submit" 
                disabled={true} 
                onClick={handleSubmit}>Submit</button>
            </div>
            </form>
    )
}
