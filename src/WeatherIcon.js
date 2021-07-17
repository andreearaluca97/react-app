import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="weather-icon">
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={`/images/${props.code}.png`}
            alt={"weather"}
            className="weather-icon"
          />
        </div>
      </div>
    </div>
  );
}
