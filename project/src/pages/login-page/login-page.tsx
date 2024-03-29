import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { getAuthorizationStatus } from '../../store/user/selectors';
import {Navigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { AuthorizationStatus, Approute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action/api-action';
import { AuthInfo } from '../../types/auth-data';

function Login() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [formData, setFormData] = useState<AuthInfo>({
    email: '',
    password: '',
  });

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email || formData.password) {
      dispatch(
        loginAction({ email: formData.email, password: formData.password })
      );
    }
  };

  useEffect(() => {
    if (
      formData.email &&
      formData.email.match(/^\S+@\S+\.\S+$/) &&
      formData.password &&
      formData.password.match(/[A-Za-z]+[0-9]+|[0-9]+[A-Za-z]+/)
    ) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [formData]);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={Approute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            >
            </path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit} data-testid='signin-form'>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="emailId">
                  E-mail
                </label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  id="emailId"
                  data-testid="email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="passwordId">
                  Password
                </label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  id="passwordId"
                  data-testid="password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={submitButtonDisabled}
                data-testid='signin-button'
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={Approute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
