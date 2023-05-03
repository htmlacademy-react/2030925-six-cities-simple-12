import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import HistoryRouter from './components/history-router/history-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './components/services/api/browser-history/browser-history';
import { fetchOffersAction, checkAuthAction } from './store/api-action/api-action';

store.dispatch(fetchOffersAction());

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
