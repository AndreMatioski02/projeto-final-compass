import styles from "./Weather.module.scss";
import Cloudy from "assets/images/cloudy.png";
import { useEffect, useState } from "react";

export default function Weather() {
    const [degrees, setDegrees] = useState<number>(0);
    const [city, setCity] = useState("");

    function permission(){
        navigator.geolocation.getCurrentPosition(() => {});
        navigator.permissions.query({ name: "geolocation" })
            .then(function(permissionStatus) {
                if(permissionStatus.state == "granted") {
                    fetchWeather(true);
                }else {                    
                    fetchWeather(false);
                }
            });    
    }

    function setWeather(name: string, main: any) {
        setCity(name)
        setDegrees(Math.round(main.temp));
    }

    function fetchWeather(granted: boolean) {
        granted
            ? navigator.geolocation.getCurrentPosition(async function(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;        

                await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=bf0de12f9df4e3c21f2fb18a7606c041`)
                .then(res => res.json())
                .then(result => {
                    const { main, name } = result;
                    setWeather(name, main);
                });
            })
            : fetch("https://api.openweathermap.org/data/2.5/weather?q=Florianopolis&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede")
                .then(res => res.json())
                .then(result => {
                    const {main, name } = result;
                    setWeather(name, main);
                });
    }

    useEffect(() => {
        permission();
    });

    return(
        <>
            <div className={styles.weatherContainer}>
                <span className={styles.weatherContainer__location}>{city}</span>
                <div className={styles.weatherContainer__weather}>
                    <img src={Cloudy} alt="Cloudy icon" />
                    <span>{degrees}º</span>
                </div>                
            </div>
        </>
    );
}