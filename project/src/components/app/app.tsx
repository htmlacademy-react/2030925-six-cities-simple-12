import { Routes, Route } from 'react-router-dom';
import { Approute } from '../../const';
import { useAppSelector } from '../../hooks';
import NotFoundScreen from '../../pages/error-page/error-page';
import LoadingScreen from '../../pages/loading-page/loading-page';
import Login from '../../pages/login-page/login-page';
import MainScreen from '../../pages/main-page/main-page';
import Room from '../../pages/room/room';
import { getOffersLoadingStatus } from '../../store/offers/selectors';

function App(): JSX.Element {
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (areOffersLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path={Approute.Main} element={<MainScreen />} />
      <Route path={Approute.Room} element={<Room />} />
      <Route path={Approute.Login} element={<Login />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
