const initialState = { theme: "light" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "dark":
      return {
        theme: "dark",
      };
    case "light":
      return {
        theme: "light",
      };

    default:
      return state;
  }
};
export default reducer;
