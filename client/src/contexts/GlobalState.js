import React from 'react';
import {createContext} from "react";
import {useReducer} from "react";
import {initialState, reducer} from "../reducer";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
