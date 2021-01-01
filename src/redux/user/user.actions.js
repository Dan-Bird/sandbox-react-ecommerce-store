import { actionType } from '../actionTypes';

export const setCurrentUser = user => ({
  type: actionType.SET_CURRENT_USER,
  payload: user,
});
