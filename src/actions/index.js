import axios from 'axios';

const API_KEY ='bcb249356d293058fa7b5f619526f023';
const URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url =`${URL}&q=${city},india`;
  const request=axios.get(url);
  //console.log("request:",request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
