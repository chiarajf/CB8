import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Image } from "@mantine/core";

const Meteo = ({ firstCity, lastCity }) => {
  const [firstMeteoData, setFirstMeteoData] = useState("");
  const [lastMeteoData, setLastMeteoData] = useState("");

  useEffect(() => {
    const fetchData = async (city, setMeteoData) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bb4691ab38149c8f5633a9e4a97a96c1`
        );
        if (!response.ok) {
          throw new Error(`Errore nella richiesta: ${response.statusText}`);
        }
        const data = await response.json();

        setMeteoData(data);
      } catch (error) {
        console.error(`Errore durante la richiesta meteo: ${error.message}`);
      }
    };

    if (firstCity) {
      fetchData(firstCity, setFirstMeteoData);
    }
    if (lastCity) {
      fetchData(lastCity, setLastMeteoData);
    }
  }, []);

  return (
    <div className={styles.Meteo}>
      {firstMeteoData && (
        <div className={styles.city}>
          <h3>{firstCity}</h3>

          <ul className={styles.list}>
            <Image
              src={`https://openweathermap.org/img/wn/${firstMeteoData.weather[0].icon}@2x.png`}
              width={200}
              height={200}
              className={styles.image}
            />
            <li className={styles.temperature} key="temperature">
              {firstMeteoData.main.temp}°C
            </li>
            <li key="humidity">💧 {firstMeteoData.main.humidity}%</li>

            <li key="speed">🌪️ {firstMeteoData.wind.speed}km/h</li>
          </ul>
        </div>
      )}
      {lastMeteoData && (
        <div className={styles.city}>
          <h3>{lastCity}</h3>
          <ul className={styles.list}>
            <Image
              src={`https://openweathermap.org/img/wn/${lastMeteoData.weather[0].icon}@2x.png`}
              width={200}
              height={200}
              className={styles.image}
            />
            <li className={styles.temperature} key="temperature">
              {lastMeteoData.main.temp}°C
            </li>
            <li key="humidity">💧 {lastMeteoData.main.humidity}%</li>

            <li key="speed">🌪️ {lastMeteoData.wind.speed}km/h</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Meteo;
