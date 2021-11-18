export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = ({ user, isAuthed }) => ({
  type: LOGIN,
  payload: {
    user,
    isAuthed
  }
});

export const logout = () => ({
  type: LOGOUT
});
