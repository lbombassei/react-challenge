export const updateText = (firstName: any, lastName: any) => ({
  type: "UPDATE_TEXT",
  payload: {
    firstName,
    lastName,
  },
});
