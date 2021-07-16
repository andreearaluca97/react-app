import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          Coded by{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/andreea-raluca-lazareanu/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Andreea Raluca Lazareanu</strong>
          </a>{" "}
          and{" "}
          <a
            className="link"
            href="https://github.com/andreearaluca97/react-app"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Open-Sourced on Github</strong>
          </a>
        </footer>
      </div>
    </div>
  );
}
