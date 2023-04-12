import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';

const Setting = {
  OffersCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store = {store}>
    <App
      offersCount = {Setting.OffersCount}
      offers = {offers}
      reviews = {reviews}
    />
  </Provider>
);
