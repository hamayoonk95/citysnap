import "./WeatherDisplay.css";

const WeatherDisplay = (props) => {
    const weatherClass = props.weather.replace(" ", "_").toLowerCase();

    return (
        <div className={`${props.className} ${weatherClass}`}>
            <div className="weather-data">
                <h2 className="city_title">{props.cityName}</h2>
                <div className="weather_title">{props.weather}</div>
            </div>
            <div className="weather-temps">
                <img
                    alt="icon"
                    className="weather_icon"
                    src={`https://openweathermap.org/img/wn/${props.image}@2x.png`}
                />
                <div className="temp">{Math.trunc(props.temperature)}°C</div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
