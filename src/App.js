import React from "react";
import logo from "./zrn.svg";
import { fetchData, hashTBase } from "./utils";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbwuH3wG19viE1klcnPfZro60F7Mgtz2hE8FJsFGNfgh3Q0aPp7pUBtleS0H_wTGZSoH5A/exec";

let app = "answer";

async function main() {
  const res = await fetchData(BASE_URL, {
    name: "Bobby",
  });
  app = res.join("");
}

function App() {
  document.title = "ᐉ ZRN • ВТК";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>Hello</h2>

      <button onClick={(event) => main()}>Click me! POST</button>
      <button
        onClick={(event) =>
          hashTBase({
            login: "aa@zrn.com.ua",
            pass: "password",
          })
        }
      >
        Click me! randNo
      </button>
      <img
        src="https://drive.google.com/uc?export=view&id=1-O9jGiRvEFrKT9PYL7TrRMZEvyI-udv9"
        className="img"
        alt="logo"
        width="400px"
        height="400px"
      />

      <p id="app">{app}</p>
    </div>
  );
}

export default App;
