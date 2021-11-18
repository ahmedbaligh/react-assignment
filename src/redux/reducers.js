import { LOGIN, LOGOUT } from './actions';

const initialState = {
  isAuthed: JSON.parse(localStorage.getItem('isAuthed')) ?? false,
  user: JSON.parse(localStorage.getItem('user')),
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_url: process.env.REACT_APP_REDIRECT_URL,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const { isAuthed, user } = action.payload;

      localStorage.setItem('isAuthed', JSON.stringify(isAuthed));
      localStorage.setItem('user', JSON.stringify(user));

      return { ...state, isAuthed, user };

    case LOGOUT:
      localStorage.clear();
      return { ...state, isAuthed: false, user: null };

    default:
      return state;
  }
};

export default auth;
