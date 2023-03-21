import logo from "./logo.svg";
import "./App.css";
let a = "1";

// a = 11;

function App() {
  document.title = "ᐉ ZRN • ВТК";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {a && <h2>Hello</h2>}
      <img
        src="https://drive.google.com/uc?export=view&id=1-O9jGiRvEFrKT9PYL7TrRMZEvyI-udv9"
        className="img"
        alt="logo"
      />
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
