import MainPage from '../../pages/main-page';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page';
import ErrorPage from '../../pages/error-page';
import Room from '../../pages/room';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/loading-page';
import { getOffersLoadingStatus } from '../../store/offers/selectors';

function App(): JSX.Element {
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);

  if(isOffersLoading) {
    return(
      <LoadingPage/>
    );
  }
  return(
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage/>}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage/>}
      />
      <Route
        path={AppRoute.Room}
        element={<Room/>}
      />
      <Route
        path='*'
        element={<ErrorPage/>}
      />
    </Routes>
  );
}

export default App;
