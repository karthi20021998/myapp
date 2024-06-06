import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import BookShelf from "./components/BookShelf";
import "./App.css";

import BookContext from "./context/bookcontext";

const App = () => {
  const [booksList, setBooksList] = useState([]);

  const addBooks = (bookDetails) => {
    const bookAlreadyExists = booksList.find(
      (eachBook) => eachBook.id === bookDetails.id
    );
    if (!bookAlreadyExists) {
      setBooksList((prevstate) => [...prevstate, bookDetails]);
    }
  };

  console.log(booksList);
  return (
    <BookContext.Provider
      value={{
        booksList,
        addBooks,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BookShelf} />
      </Switch>
    </BookContext.Provider>
  );
};

export default App;
