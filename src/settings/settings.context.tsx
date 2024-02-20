import { useReducer, createContext, useEffect, ReactNode } from 'react';
import { reducer } from './settings.reducer';
import {
  SettingsContext,
  SettingsDispatchType,
  SettingsProviderValue,
} from './settings.context.d';

const initialSettingsState: SettingsContext = {
  genres: [],
  races: [],
}

const SettingsStore = createContext({} as SettingsProviderValue);

/**
 * 
 * @returns 
 */
export const SettingsProvider = (props: { children: ReactNode }) => {
  // Define state and dispatch method for this Context
  const reducerData = useReducer(reducer, { ...initialSettingsState });
  const state: SettingsContext = reducerData[0];
  const dispatch: (data: SettingsDispatchType) => void = reducerData[1];

  useEffect(() => {
    // Todo: Set default  config from local store
  }, []);
  
  return (
    <SettingsStore.Provider value={{ state, dispatch }}>
      {props.children}
    </SettingsStore.Provider>
  );
};

export default SettingsStore;
