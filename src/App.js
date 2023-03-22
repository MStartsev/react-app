import logo from "./logo.svg";
import "./App.css";
let a = "1";

// a = 11;

const getData = async () => {
  const url =
    "https://script.google.com/macros/s/AKfycbzncnMcwpLCjoPs-tluBEh6s1E8o8LP3aqAvemrJOkUp23D_JY016AcjKWxsf5MpoDoxg/exec";

  // fetch(url)
  //   .then((d) => d.json())
  //   .then((d) => {
  //     document.getElementById("app").textContent = d[0].name;
  //     console.log(d);
  //   });

  let data = "Olya";

  const params = {
    // redirect: "follow",
    method: "POST",
    contentType: "application/jsonp",
    payload: JSON.stringify(data),
    // mode: "no-cors",
    // cache: "no-cache",
    // credential: "same-origin",
    // headers: {"Content-Type": "application/json",},
    // direct: "fillow",
    // reffererPolicy: "no-refferer",
    // body: JSON.stringify({ spec: base }),
  };

  const res = await fetch(url, params);
  const json = await res.json(); // додатково оброблюємо Promise
  console.log(json);
};

function App() {
  document.title = "ᐉ ZRN • ВТК";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {a && <h2>Hello</h2>}
      <button onClick={(event) => getData()}>Click me!</button>
      <img
        src="https://drive.google.com/uc?export=view&id=1-O9jGiRvEFrKT9PYL7TrRMZEvyI-udv9"
        className="img"
        alt="logo"
      />

      <p id="app">0</p>
    </div>
  );
}

export default App;
// "https://drive.google.com/file/d/1-O9jGiRvEFrKT9PYL7TrRMZEvyI-udv9/view?usp=share_link"
// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li>{book.name}</li>
//       ))}
//     </ul>
//   );
// };
