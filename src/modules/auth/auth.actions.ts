import * as types from './auth.actionsTypes';

export const logout = () => ({
  type: types.LOGOUT,
});

export const login = () => ({
  type: types.LOGIN,
});
