import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://image.flaticon.com/icons/png/512/2204/2204335.png",
      date: "sunday 18:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-engine">
          <div className="row mt-3">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter your city"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn w-90" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="city-description">
          <li className="text-capitalize">
            <strong>{weatherData.date}</strong>
          </li>
          <li className="text-capitalize">
            <strong>{weatherData.description}</strong>
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              width="70"
              height="70"
              alt={weatherData.description}
            ></img>
          </div>
          <div className="col-6">
            <ul className="weather-description">
              <li className="temperature">
                Temperature:{" "}
                <strong>{Math.round(weatherData.temperature)}ºC| F</strong>
              </li>
              <hr />

              <li>
                Humidity: <strong>{weatherData.humidity} %</strong>
              </li>
              <li>
                Wind: <strong>{Math.round(weatherData.wind)} Km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d4344c6ea95063be2031ed54ff742e0b";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
