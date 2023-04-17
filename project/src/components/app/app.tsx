import MainPage from '../../pages/main-page';
import { AppRoute } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page';
import ErrorPage from '../../pages/error-page';
import { Offer } from '../../types/offer-type';
import { Reviews } from '../../types/review-type';
import Room from '../../pages/room';

type AppScreenProps = {
  offers: Offer[];
  reviews: Reviews;
}

function App({offers,reviews}: AppScreenProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}/>
        <Route index element={<MainPage offers={offers} />}/>
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Room}
          element={<Room offer={offers[2]} reviews={reviews}/>}
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
