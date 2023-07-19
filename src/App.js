import { useState } from "react";
import "./App.css";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import WeatherForm from "./components/WeatherForm/WeatherForm";

function App() {
    const [formData, setFormData] = useState(null);

    const formSubmit = (e, data) => {
        e.preventDefault();
        setFormData(data);
    };

    console.log(formData);

    return (
        <div className="app">
            <WeatherForm formSubmit={formSubmit} />
            <div className="container">
                <WeatherWidget cityName={formData} />
            </div>
        </div>
    );
}

export default App;
