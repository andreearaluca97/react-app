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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-warning" />
          </div>
        </div>
      </form>
      <h1>Madrid</h1>
      <ul className="city-description">
        <li>Wednesday 08: 00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            className="image-weather"
            src="https://image.flaticon.com/icons/png/512/2204/2204339.png"
            width="70"
            height="70"
            alt="cloudy"
          ></img>
          4º C
        </div>
        <div className="col-6">
          <ul className="weather-description">
            <li>Precipitation: 55%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 20km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
