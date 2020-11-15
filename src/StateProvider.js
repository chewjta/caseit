import React, { createContext, useContext, useReducer } from "react";
import createPersistedReducer from "use-persisted-reducer";

// prepares the data layer
export const StateContext = createContext();
const usePersistedReducer = createPersistedReducer("state");

// wrap the app with the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={usePersistedReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
