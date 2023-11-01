const initialState = { counterData: 1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counterData: action.payload + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counterData: action.payload - 1,
      };
    case "RESET":
      return {
        ...state,
        counterData: 0,
      };
    default:
      return state;
  }
};
export default reducer;
