import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppRreducer";
import { initialState } from "./AppRreducer";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ cart: state.cart, user: state.user, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
