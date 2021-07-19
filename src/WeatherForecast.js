import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "d4344c6ea95063be2031ed54ff742e0b";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="50d" />
          </div>

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">19º | </span>
            <span className="WeatherForecast-temperatures-min">5º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
