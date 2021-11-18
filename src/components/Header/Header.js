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
          <div className="user-info">
            <span className="logged-text">
              Logged in as <span className="user-name">{user?.name}</span>
            </span>
            <img className="user-avatar" src={user?.avatar_url} alt="Avatar" />
          </div>
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
