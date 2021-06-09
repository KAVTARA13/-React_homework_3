import { SET_AUTH_USER, SET_AUTH_GUEST } from '../action-types/auth-types';

const initialState = {
  auth: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // AUTH
    case SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };
    case SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};

export default authReducer;