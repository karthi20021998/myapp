import { createContext } from "react";

const BookContext = createContext({
  bookList: [],
  addBooks: () => {},
  removeBooks: () => {},
});

export default BookContext;
