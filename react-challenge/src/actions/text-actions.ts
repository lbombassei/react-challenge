import { PeriodicForm } from "../reducers/text-reducer";

export const setFormState = (data: PeriodicForm) => ({
  type: "SET_FORM_STATE",
  payload: data,
});
