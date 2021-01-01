import { userActionType } from './userActionTypes';

export const setCurrentUser = user => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});
