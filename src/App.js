import React from 'react';
import logo from './zrn.svg';
import { fetchData } from './utils';

const BASE_URL =
  'https://script.google.com/macros/s/AKfycbwuH3wG19viE1klcnPfZro60F7Mgtz2hE8FJsFGNfgh3Q0aPp7pUBtleS0H_wTGZSoH5A/exec';

let app = 'answer';

async function main() {
  const res = await fetchData(BASE_URL, {
    name: 'Bobby',
  });
  app = res.join('');
}

const randNo = () =>
  // (Math.random() + Number.MIN_VALUE).toString(36).slice(-10);
  {
    let arrSymbol = [];
    let arrCharCode = [
      [40, 122],
      [1025, 1168],
    ];

    for (const arrItem of arrCharCode) {
      for (let i = arrItem[0]; i <= arrItem[1]; i += 1) arrSymbol.push(String.fromCharCode(i));
    }
    //https://overcoder.net/q/2525/генерация-случайной-строки-символов-в-javascript
    //https://asecuritysite.com/coding/asc2?val=1024%2C1280

    let str = 'Ґ';
    let charCode = 47;
    let code = str.charCodeAt(0);
    let chCode = String.fromCharCode(charCode);
    console.log(arrSymbol);
    return code;
  };

// console.log(randNo());

function App() {
  document.title = 'ᐉ ZRN • ВТК';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>Hello</h2>

      <button onClick={event => main()}>Click me! POST</button>
      <button onClick={event => randNo()}>Click me! randNo</button>
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
