import React from "react";
import logo from "./zrn.svg";
import axios from "axios";
import { CorsOptions } from "cors";

let a = "1";

// a = 11;

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbwYEge-cAgbX8cR2IncbpGVB-_T9S4VzCJyU_iT6Tud/dev";

export const fetchPost = async (query = "", page = 1) => {
  const searchParams = {
    method: "POST",
    CorsOptions,
    body: JSON.stringify({
      q: query,
      orientation: "horizontal",
      safesearch: true,
      page: page,
    }),
  };

  try {
    const response = await axios.post(BASE_URL, searchParams);

    return response.json();
  } catch (e) {
    console.log("qqq");
    return e;
  }
};

const dataPost = async () => {
  fetch(BASE_URL, {
    redirect: "follow",
    method: "POST",
    body: JSON.stringify([{ a: 1 }, { b: 2 }]),
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const getData = async () => {
  const url =
    " https://script.google.com/macros/s/AKfycbxIeRVEiiIlqOSaiX1oe3CtN6-x-Ra29Gt30KRkBTcIaIzYavkYUx2wTbHF1EQL6nuTTw/exec?start=1325437200&end=1325439000&prefix=alert";

  const res = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(window.history);
    });
};

function App() {
  document.title = "ᐉ ZRN • ВТК";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {a && <h2>Hello</h2>}
      <a href="https://script.google.com/macros/s/AKfycbwctKHM50LYWnZwYkUuaySyKcc62WQOMmaoyHemn9CxQdB_8bKjuldZ4Ie2OyCbSCO1UQ/exec?start=1325437200&end=1325439000&prefix=alert">
        "ttt eqweqw qwe qw qweq we qwe qwe qweqweq we qwe q"
      </a>
      <button onClick={(event) => getData()}>Click me!</button>
      <img
        src="https://drive.google.com/uc?export=view&id=1-O9jGiRvEFrKT9PYL7TrRMZEvyI-udv9"
        className="img"
        alt="logo"
        width="400px"
        height="400px"
      />

      <p id="app">0</p>
      <script src="https://script.google.com/macros/s/AKfycbwctKHM50LYWnZwYkUuaySyKcc62WQOMmaoyHemn9CxQdB_8bKjuldZ4Ie2OyCbSCO1UQ/exec?start=1325437200&end=1325439000&prefix=alert"></script>
    </div>
  );
}

export default App;
