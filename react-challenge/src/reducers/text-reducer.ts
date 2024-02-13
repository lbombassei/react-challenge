const initialState = {
  firstName: "Breaking",
  lastName: "Bad",
};

const textReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

export default textReducer;
