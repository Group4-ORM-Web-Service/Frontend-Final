import React, { createContext, useContext, useReducer } from 'react';
import { appReducer, initialAppState } from '../store/reducers/AppReducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, dispatchApp] = useReducer(appReducer, initialAppState);

  return <AppContext.Provider value={{ appState, dispatchApp }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
