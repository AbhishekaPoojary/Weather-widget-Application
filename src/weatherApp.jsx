import SearchBox from "./searchBox.jsx";
import InfoBox from "./infoBox.jsx";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "city",
        temp: 51.61,
        tempMin: 651,
        tempMax: 51,
        humidity: 45,
        feelsLike: 54,
        weather: "haze"
    });

    let updateInfo = (weatherInfo) => {
        setWeatherInfo(weatherInfo);
    }

    return(
        <div>
            <h2 style={{textAlign: "center"}}>Weather App</h2>
            < SearchBox updateInfo={updateInfo} />
            < InfoBox info={weatherInfo} />
        </div>
    )
}