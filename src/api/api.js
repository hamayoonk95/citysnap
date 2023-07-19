import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;

export const getWeather = async (cityName) => {
    const options = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
            q: cityName,
            appid: WEATHER_API_KEY,
            units: "metric",
        },
        headers: {
            Accept: "application/json",
        },
    };

    try {
        const response = await axios(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
