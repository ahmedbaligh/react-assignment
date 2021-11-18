import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../redux/actions';
import LoginPage from './Login.styles';

const baseURL = 'https://github.com/login/oauth/authorize?scope=user';

const Login = ({ isAuthed, client_id, redirect_url, proxy_url, login }) => {
  const [data, setData] = useState({
    errorMessage: '',
    isLoading: false
  });

  useEffect(() => {
    const url = window.location.href;

    if (url.includes('?code=')) {
      const newUrl = url.split('?code=');
      window.history.pushState({}, null, newUrl[0]);

      setData({ ...data, isLoading: true });

      fetch(proxy_url, {
        method: 'POST',
        body: JSON.stringify({ code: newUrl[1] })
      })
        .then(response => response.json())
        .then(data => {
          login({
            user: data,
            isAuthed: true
          });
        })
        .catch(error => {
          console.log(error);
          setData({
            isLoading: false,
            errorMessage: 'Sorry! Login failed'
          });
        });
    }
  }, [login, data, proxy_url]);

  return isAuthed ? (
    <Redirect to="/" />
  ) : (
    <LoginPage>
      <section className="container">
        <div>
          <h1>Login to see your public repos</h1>

          <div className="login-container">
            {data.isLoading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <a
                className="login-link"
                href={`${baseURL}&client_id=${client_id}&redirect_uri=${redirect_url}`}
                onClick={() => setData({ ...data, errorMessage: '' })}
              >
                <span>Login with GitHub</span>
              </a>
            )}
          </div>
          <span>{data.errorMessage}</span>
        </div>
      </section>
    </LoginPage>
  );
};

const mapStateToProps = ({ isAuthed, client_id, redirect_url, proxy_url }) => ({
  isAuthed,
  client_id,
  redirect_url,
  proxy_url
});

const mapDispatchToProps = dispatch => ({
  login: ({ user, isAuthed }) => dispatch(login({ user, isAuthed }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
