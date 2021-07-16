import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />

        <footer>
          Coded by{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/andreea-raluca-lazareanu/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Andreea Raluca Lazareanu </strong>
            <img
              className="linkedin-img"
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="linkedin"
            ></img>{" "}
          </a>{" "}
          and{" "}
          <a
            className="link"
            href="https://github.com/andreearaluca97/react-app"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Open-Sourced on Github </strong>
          </a>
          <img
            className="github-img"
            src="https://image.flaticon.com/icons/png/512/733/733553.png"
            alt="linkedin"
          ></img>{" "}
        </footer>
      </div>
    </div>
  );
}
