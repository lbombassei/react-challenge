import { createStore } from "redux";
import textReducer from "./reducers/text-reducer";

const store = createStore(textReducer);

export default store;
