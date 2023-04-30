import MainPage from '../../pages/main-page';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page';
import ErrorPage from '../../pages/error-page';
import { Reviews } from '../../types/review-type';
import Room from '../../pages/room';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/loading-page';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../services/api/browser-history/browser-history';
import { getOffersLoadingStatus } from '../../store/offers/selectors';

type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews}: AppScreenProps): JSX.Element {
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);

  if(isOffersLoading) {
    return(
      <LoadingPage/>
    );
  }
  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}/>
        <Route index element={<MainPage/>}/>
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Room}
          element={<Room reviews={reviews}/>}
        />
        <Route
          path='*'
          element={<ErrorPage/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
