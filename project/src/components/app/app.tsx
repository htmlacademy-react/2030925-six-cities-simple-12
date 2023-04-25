import MainPage from '../../pages/main-page';
import { AppRoute } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page';
import ErrorPage from '../../pages/error-page';
import { Reviews } from '../../types/review-type';
import Room from '../../pages/room';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/loading-page';

type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews}: AppScreenProps): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.offerIsLoadingStatus);

  if(isOffersLoading) {
    return(
      <LoadingPage/>
    );
  }
  return(
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
