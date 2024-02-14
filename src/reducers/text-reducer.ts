export interface PeriodicForm {
  firstname: string;
  lastname: string;
}

const initialState: PeriodicForm = {
  firstname: "Breaking",
  lastname: "Bad",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
