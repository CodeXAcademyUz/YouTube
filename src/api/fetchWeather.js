import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "21b794aa9b4a8c5cfc3f9df7615cc4e0";

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
}