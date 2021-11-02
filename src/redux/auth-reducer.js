const AUTH_STATUS_DATA = "AUTH_STATUS_DATA";
const UPDATE_EMAIL_TEXT = "UPDATE_EMAIL_TEXT";
const UPDATE_PASSWORD_TEXT = "UPDATE_PASSWORD_TEXT";
const SUBMIT_AUTH_ACTION = "SUBMIT_AUTH_ACTION";
const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
const UPDATE_USERNAME_TEXT = "UPDATE_USERNAME_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const UPDATE_USER_AVATAR = "UPDATE_USER_AVATAR";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
const SET_AUTH_ERROR = "SET_AUTH_ERROR";
const CLEAR_AUTH_ERROR = "CLEAR_AUTH_ERROR";

let initState = {
  username: "noname",
  email: "",
  password: "",
  userAvatar: null,
  currentUser: null,
  isAuth: false,
  createdAt: "",
  isFetching: false,
  text: "",
  authError: "",
  messages: [],
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_ERROR: {
      return {
        ...state,
        authError: action.authError,
      };
    }
    case CLEAR_AUTH_ERROR: {
      return {
        ...state,
        authError: "",
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_USER_PROFILE: {
      debugger;
      return {
        ...state,
        username: action.username,
        userAvatar: action.userAvatar,
      };
    }
    case UPDATE_USER_AVATAR: {
      return {
        ...state,
        userAvatar: action.userAvatar,
      };
    }
    case UPDATE_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    case UPDATE_USERNAME_TEXT: {
      return {
        ...state,
        username: action.usernameText,
      };
    }
    case UPDATE_EMAIL_TEXT: {
      return {
        ...state,
        email: action.emailText,
      };
    }
    case UPDATE_PASSWORD_TEXT: {
      return {
        ...state,
        password: action.passwordText,
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        text: action.messageText,
      };
    }
    case SUBMIT_AUTH_ACTION: {
      return {
        ...state,
        email: "",
        password: "",
        text: "",
      };
    }
    case AUTH_STATUS_DATA: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    case UPDATE_MESSAGES: {
      return {
        ...state,
        messages: [...action.messages],
      };
    }
    default:
      return state;
  }
};

export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR,
});

export const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  authError: error,
});

export const updateEmailText = (newText) => ({
  type: UPDATE_EMAIL_TEXT,
  emailText: newText,
});
export const updatePasswordText = (newText) => ({
  type: UPDATE_PASSWORD_TEXT,
  passwordText: newText,
});
export const updateUsernameText = (newText) => ({
  type: UPDATE_USERNAME_TEXT,
  usernameText: newText,
});
export const authStatus = (isAuth) => ({ type: AUTH_STATUS_DATA, isAuth });
export const submitAuthAction = () => ({ type: SUBMIT_AUTH_ACTION });
export const updateCurrentUser = (currentUser) => ({
  type: UPDATE_CURRENT_USER,
  currentUser,
});
export const setUserProfile = (username, userAvatar) => ({
  type: SET_USER_PROFILE,
  username,
  userAvatar,
});
export const updateUserAvatar = (userAvatar) => ({
  type: UPDATE_USER_AVATAR,
  userAvatar,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const updateMessageText = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText,
});
export const updateMessages = (messages) => ({
  type: UPDATE_MESSAGES,
  messages,
});
