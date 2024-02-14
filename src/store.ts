import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/text-reducer";

const store = configureStore({ reducer: rootReducer });

export default store;
