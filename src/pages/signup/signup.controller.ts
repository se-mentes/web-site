import axios from "axios";
import { SettingsProviderValue } from "../../settings/settings.context.d";

export const fetchGenreModel = async (
  settingsContext: SettingsProviderValue,
) => {
  const resp = await axios.get(
    'http://0.0.0.0:1337/api/models?filters[model][$eq]=genre',
  );
  const genres = resp.data.data.map(({ attributes, id }: any) => {
    return {
      label: attributes.label,
      id,
    }
  });
  settingsContext.dispatch({ type: 'SET_GENRES', data: genres });
}

export const fetchRaceModel = async (
  settingsContext: SettingsProviderValue,
) => {
  const resp = await axios.get(
    'http://0.0.0.0:1337/api/models?filters[model][$eq]=race',
  );
  const races = resp.data.data.map(({ attributes, id }: any) => {
    return {
      label: attributes.label,
      id,
    }
  });
  settingsContext.dispatch({ type: 'SET_RACES', data: races });
}