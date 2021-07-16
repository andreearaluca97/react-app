import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-engine">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter your city"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-danger w-90"
            />
          </div>
        </div>
      </form>
      <h1>Madrid</h1>
      <ul className="city-description">
        <li>
          Wednesday <strong>08: 00</strong>
        </li>
        <li>
          <strong>Cloudy</strong>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://image.flaticon.com/icons/png/512/2204/2204339.png"
            width="70"
            height="70"
            alt="cloudy"
          ></img>
        </div>
        <div className="col-6">
          <ul className="weather-description">
            <li>
              Temperature: <strong>4º C</strong>
            </li>
            <hr />
            <li>
              Precipitation: <strong>55%</strong>
            </li>
            <li>
              Humidity: <strong>75%</strong>
            </li>
            <li>
              Wind: <strong>20km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
