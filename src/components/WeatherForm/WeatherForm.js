import { useState } from "react";
import "./WeatherForm.css";

const WeatherForm = (props) => {
    const [city, setCity] = useState("");

    return (
        <form
            className="weather-form"
            onSubmit={(e) => props.formSubmit(e, city)}
        >
            <label className="city-label" htmlFor="city">
                City
            </label>
            <input
                className="city-input"
                id="city"
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="city-submit" type="submit">
                Submit
            </button>
        </form>
    );
};

export default WeatherForm;
