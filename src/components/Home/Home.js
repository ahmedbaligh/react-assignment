import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Wrapper from './Home.styles';
import { logout } from '../../redux/actions';
import { Repos } from '../';

const Home = ({ isAuthed, user, logout }) => {
  return !isAuthed ? (
    <Redirect to="/signin" />
  ) : (
    <Wrapper>
      <h1>Here are your public repos:</h1>

      <Repos />
    </Wrapper>
  );
};

const mapStateToProps = ({ isAuthed, user }) => ({ isAuthed, user });

const mapDispatchToProps = dispatch => ({
  logout: (user, isAuthed) => dispatch(logout(user, isAuthed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
