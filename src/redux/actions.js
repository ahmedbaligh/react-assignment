export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_COMMENT = 'ADD_COMMENT';

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

export const addComment = ({ comment, repoID }) => ({
  type: ADD_COMMENT,
  payload: {
    comment,
    repoID
  }
});
