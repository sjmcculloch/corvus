import { Constants } from 'expo';
import firebase from '../config/firebase';

export const setSelectedDate = date => ({
  type: 'SET_SELECTED_DATE',
  date,
});

export const startWeekChange = () => ({
  type: 'START_WEEK_CHANGE',
});

export const setUserName = name => ({
  type: 'SET_USER_NAME',
  name,
});

export const setUserAvatar = avatar => ({
  type: 'SET_USER_AVATAR',
  avatar:
    avatar && avatar.length > 0
      ? avatar
      : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
});

export const setLoginError = loginError => ({
  type: 'SET_LOGIN_ERROR',
  loginError,
});

export const clearLoginError = () => ({
  type: 'CLEAR_LOGIN_ERROR',
});

export const startAuthorizing = () => ({
  type: 'USER_START_AUTHORIZING',
});

export const userAuthorized = () => ({
  type: 'USER_AUTHORIZED',
});

export const userNoExist = () => ({
  type: 'USER_NO_EXIST',
});

export const login = (email, password) =>
  function (dispatch) {
    dispatch(startAuthorizing());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(userAuthorized());
      })
      .catch((error) => {
        dispatch(setLoginError(error.message));
        // const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

export const checkUserExists = () =>
  function (dispatch) {
    dispatch(startAuthorizing());

    firebase
      .auth()
      .signInAnonymously()
      .then(() =>
        firebase
          .database()
          .ref(`users/${Constants.deviceId}`)
          .once('value', (snapshot) => {
            const val = snapshot.val();

            if (val === null) {
              dispatch(userNoExist());
            } else {
              dispatch(setUserName(val.name));
              dispatch(setUserAvatar(val.avatar));
              // startChatting(dispatch);
              dispatch(userAuthorized());
            }
          }))
      .catch(err => console.log(err));
  };
