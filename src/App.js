import React from "react";
import logo from "./zrn.svg";
import { fetchData } from "./utils";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbwuH3wG19viE1klcnPfZro60F7Mgtz2hE8FJsFGNfgh3Q0aPp7pUBtleS0H_wTGZSoH5A/exec";

let app = "answer";

async function main() {
  const res = await fetchData(BASE_URL, {
    name: "Bobby",
  });
  app = res.join("");
}

const hashTBase = () =>
  // (Math.random() + Number.MIN_VALUE).toString(36).slice(-10);
  {
    // const phrase = "PAROLL";

    let arrSymbol = [];
    let arrCharCode = [
      [48, 57],
      [64, 90],
      [95, 96],
      [97, 122],
      [1025, 1112],
      [1162, 1168],
    ];

    let date = new Date().toISOString();
    date = date.match(/[3-9]/g).reverse();
    console.log(date);

    for (const arrItem of arrCharCode) {
      for (let i = arrItem[0]; i <= arrItem[1]; i += 1)
        arrSymbol.push(String.fromCharCode(i));
    }

    const charSet = arrSymbol.join("");
    //https://overcoder.net/q/2525/генерация-случайной-строки-символов-в-javascript
    //https://asecuritysite.com/coding/asc2?val=1024%2C1280

    console.log(charSet);

    function randomString(len, charSet) {
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    }

    let res = randomString(5, charSet);
    console.log(res);

    return charSet;
  };

// console.log(randNo());

function App() {
  document.title = "ᐉ ZRN • ВТК";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>Hello</h2>

      <button onClick={(event) => main()}>Click me! POST</button>
      <button onClick={(event) => hashTBase()}>Click me! randNo</button>
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
