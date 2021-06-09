import { SET_AUTH_USER, SET_AUTH_GUEST } from '../action-types/auth-types';

export const setAuthUserAction = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});

export const setAuthGuestAction = () => ({
  type: SET_AUTH_GUEST,
});