import styles from "./Weather.module.scss";
import Cloudy from "assets/images/cloudy.png";
import { useState } from "react";

export default function Weather() {
    const [degrees, setDegrees] = useState<number>(0);
    const [city, setCity] = useState("");
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Joinville&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede";

    function fetchWeather(url: string) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { main, name } = data;
                setCity(`${name} - SC`);
                setDegrees(Math.round(main.temp));
                }
            )
    }

    return(
        <>
            <div onLoad={() => fetchWeather(url)} className={styles.weatherContainer}>
                <span className={styles.weatherContainer__location}>{city}</span>
                <div className={styles.weatherContainer__weather}>
                    <img src={Cloudy} alt="Cloudy icon" />
                    <span>{degrees}º</span>
                </div>                
            </div>
        </>
    );
}