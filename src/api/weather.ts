import { WeatherForecast } from '../types/api';
import { fetchApi } from './client';

export const weatherApi = {
  getForecast: () => fetchApi<WeatherForecast[]>('/api/WeatherForecast'),
};