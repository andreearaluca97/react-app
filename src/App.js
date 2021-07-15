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
            href="https://www.linkedin.com/in/andreea-raluca-lazareanu/"
            target="_blank"
            rel="noreferrer"
          >
            Andreea Raluca Lazareanu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/andreearaluca97/react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
