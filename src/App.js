import logo from "./logo.svg";
import "./App.css";

const post = (
  <>
    <h2>Post Header</h2>
    <p>Post text</p>
  </>
);

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li>{book.name}</li>
      ))}
    </ul>
  );
};

function App() {
  document.title = "ᐉ ZRN • ВТК";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {post}

      <div>
        <BookList books={favouriteBooks} />
      </div>
    </div>
  );
}

export default App;
