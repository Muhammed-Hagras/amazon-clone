export const initialState = {
  cart: [],
  user: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default Reducer;
