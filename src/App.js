import React from 'react';
import { connect } from 'react-redux';

import { login, logout } from './redux/actions';

const App = ({ user, login, logout }) => {
  return (
    <div>
      <div>GitHub React Assignment</div>
      <h1>User: {user}</h1>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  login: (user, isAuthed = true) => dispatch(login(user, isAuthed)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
