import React from 'react';
import { connect } from 'react-redux';

import AppHeader from './Header.styles';
import { logout } from '../../redux/actions';

const Header = ({ isAuthed, user, logout }) => {
  return (
    <AppHeader>
      <span className="app-name">React GitHub Assignment</span>

      {isAuthed && (
        <div className="user-container">
          <span className="user-info">Logged in as {user?.name}</span>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </AppHeader>
  );
};

const mapStateToProps = ({ isAuthed, user }) => ({ isAuthed, user });

const mapDispatchToProps = dispatch => ({
  logout: (user, isAuthed) => dispatch(logout(user, isAuthed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
