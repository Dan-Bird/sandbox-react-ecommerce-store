import userActionType from './userActionTypes';

export const googleSignInStart = () => ({
  type: userActionType.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = user => ({
  type: userActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = error => ({
  type: userActionType.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
