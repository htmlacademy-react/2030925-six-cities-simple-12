import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logOutAction } from '../../store/api-action';
import Logo from '../logo/logo';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(logOutAction);
  };
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && userData ? (
                <>
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <img className="header__avatar-wrapper user__avatar-wrapper" src={userData.avatar} alt={userData.name}/>
                      <span className="header__user-name user__name">{userData.mail}</span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Main}>
                      <div className="header__signout" onClick={logOut}>Sign out</div>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className='header__nav-link header__nav-link--profile'
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign In</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
