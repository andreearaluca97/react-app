import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="city-description">
        <li className="text-capitalize">
          <strong>
            <FormattedDate date={props.data.date} />
          </strong>
        </li>
        <li className="text-capitalize">
          <strong>{props.data.description}</strong>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            width="70"
            height="70"
            alt={props.data.description}
          ></img>
        </div>
        <div className="col-6">
          <ul className="weather-description">
            <li className="temperature">
              Temperature:{" "}
              <strong>{Math.round(props.data.temperature)}ºC| F</strong>
            </li>
            <hr />

            <li>
              Humidity: <strong>{props.data.humidity} %</strong>
            </li>
            <li>
              Wind: <strong>{Math.round(props.data.wind)} Km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
