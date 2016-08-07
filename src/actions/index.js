import axios from 'axios';

const API_KEY = 'c8969cdf2826c2e9a345e56f969520c2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Returns promise assigned to variable request

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
