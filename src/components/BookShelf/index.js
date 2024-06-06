import { useContext } from "react";

import BookShelfCard from "../BookShelfCard";
import BookContext from "../../context/bookcontext";
import "./index.css";

const BookShelf = () => {
  const { booksList } = useContext(BookContext);

  return (
    <>
      <h1 className="shelf-title">My Personal Bookshelf</h1>
      <ul className="shelf-container">
        {booksList &&
          booksList.map((eachBook) => (
            <BookShelfCard key={eachBook.id} mybooks={eachBook} />
          ))}
      </ul>
    </>
  );
};

export default BookShelf;
