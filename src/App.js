import React from "react";
import logo from "./zrn.svg";

let a = "1";

// a = 11;

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbwuH3wG19viE1klcnPfZro60F7Mgtz2hE8FJsFGNfgh3Q0aPp7pUBtleS0H_wTGZSoH5A/exec";

export async function postData() {
  let res = { name: "Bobby" };

  console.info(res);

  await fetch(BASE_URL, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    // credential: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    direct: "fillow",
    reffererPolicy: "no-refferer",
    body: JSON.stringify(res),
  });
}

const fetchData = async (scriptURL, data) => {
  var json;
  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response !== "") json = await response.json();
    console.log("Success:", JSON.stringify(json));
  } catch (e) {
    console.log("Errors:", e.message);
  }
  return json;
};

async function main() {
  const res = await fetchData(BASE_URL, {
    name: "Bobby",
  });
  console.log(res);
}

const getData = async () => {
  const url =
    "https://script.google.com/macros/s/AKfycbwuH3wG19viE1klcnPfZro60F7Mgtz2hE8FJsFGNfgh3Q0aPp7pUBtleS0H_wTGZSoH5A/exec?start=1325437200&end=1325439000&prefix=alert";

  await fetch(url)
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
      <button onClick={(event) => getData()}>Click me! GET</button>
      <button onClick={(event) => main()}>Click me! POST</button>
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
