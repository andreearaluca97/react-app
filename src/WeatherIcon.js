import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="weather-icon">
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon className="weather-icon" code={props.icon} />
        </div>
      </div>
    </div>
  );
}
