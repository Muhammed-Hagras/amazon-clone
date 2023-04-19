export const getCartTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

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
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      console.log(state.cart);
      // const itemIndex = state.cart.findIndex((item) => item.id === action.id);

      // console.log(itemIndex);
      // console.log(action.id);

      let newCart = state.cart.filter((item) => item.id !== action.id);
      return {
        ...state,
        cart: newCart,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default Reducer;
