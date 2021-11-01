const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let initState = {
  text: "",
  username: "noname",
  userAvatar: null,
  currentUser: null,
  isFetching: false,
};

export const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        text: action.messageText,
      };
    }
    default:
      return state;
  }
};

export const updateMessageText = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText,
});
