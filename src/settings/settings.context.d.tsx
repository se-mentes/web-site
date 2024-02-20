
export interface Models {
  label: string;
  model: string;
  id: string;
}

export interface SettingsContext {
  genres: Models[];
  races: Models[];
}

export interface SettingsDispatchType {
  type:
    'SET_GENRES' |
    'SET_RACES';
  data?: unknown;
}

export interface SettingsProviderValue {
  state: SettingsContext;
  dispatch: (data: SettingsDispatchType) => void;
}
