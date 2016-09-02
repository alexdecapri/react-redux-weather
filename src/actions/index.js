import axios from 'axios';

const API_KEY = 'c8969cdf2826c2e9a345e56f969520c2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Returns promise assigned to variable request
  // redux-promise makes this clean^^ :)

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
    // if this is a promise, redux-promise stops the action entirely
    // once request finishes, then dispatches a new action of the same type but with a payload of the resolved request
  };
}
