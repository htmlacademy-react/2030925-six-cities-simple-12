import Spinner from '../components/spinner/spinner';

export default function LoadingPage() {
  return(
    <div className="not-found__container">
      <div className="property__mark">
        <h1 className="property__name">
            Loading...
        </h1>
        <span></span>
      </div>
      <Spinner />
    </div>
  );
}
