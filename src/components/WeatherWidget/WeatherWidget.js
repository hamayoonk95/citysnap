import { useState, useEffect } from "react";
import Card from "../../containers/UI/Card";
import { getWeather } from "../../api/api";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

const WeatherWidget = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const defaultCity = "London";
    const cityName = props.cityName || defaultCity;
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getWeather(cityName);
                setWeatherData(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchWeather();
    }, [cityName]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <Card>
            {weatherData ? (
                <WeatherDisplay
                    className="weather_card"
                    cityName={weatherData.name}
                    weather={weatherData.weather[0].main}
                    weather_description={weatherData.weather[0].description}
                    temperature={weatherData.main.temp}
                    image={weatherData.weather[0].icon}
                />
            ) : (
                <p>Loading...</p>
            )}
        </Card>
    );
};

export default WeatherWidget;
