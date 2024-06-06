import { createContext } from "react";

const BookContext = createContext({
  bookList: [],
  addBooks: () => {},
});

export default BookContext;
