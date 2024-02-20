import {
  Models,
  SettingsContext,
  SettingsDispatchType,
} from './settings.context.d';

/**
 * 
 * @param state
 * @param action 
 * @returns settings context state
 */
export const reducer = (
  state: SettingsContext,
  action: SettingsDispatchType
): SettingsContext => {
  switch (action.type) {
      case 'SET_GENRES':
        return { ...state, genres: action.data as Models[] };
      case 'SET_RACES':
        return { ...state, races: action.data as Models[] };
    default:
      throw new Error(`Unknown settings reducer action ${action.type}`);
  }
};
