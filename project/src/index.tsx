import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import Spinner from './components/spinner/spinner';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-action';
import { reviews } from './mocks/reviews';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
/*
const Setting = {
  OffersCount: 312,
} as const;
*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store = {store}>
    <Spinner/>
    <ToastContainer/>
    <App reviews = {reviews}/>
  </Provider>
);
