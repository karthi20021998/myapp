import { useContext } from "react";

import BookShelfCard from "../BookShelfCard";
import BookContext from "../../context/bookcontext";
import "./index.css";

const BookShelf = (props) => {
  const { booksList } = useContext(BookContext);
  const { history } = props;

  const onClickAdd = () => {
    history.push("/");
  };

  const renderBooksShelf = () => (
    <ul className="shelf-container">
      {booksList &&
        booksList.map((eachBook) => (
          <BookShelfCard key={eachBook.id} mybooks={eachBook} />
        ))}
    </ul>
  );

  const renderEmptyShelf = () => (
    <div className="empty-shelf-card">
      <h3 className="empty-shelf-title">No Books Added</h3>
      <button className="empty-shelf-btn" onClick={onClickAdd}>
        Add Books
      </button>
    </div>
  );

  return (
    <>
      <h1 className="shelf-title">My Personal Bookshelf</h1>
      {booksList.length === 0 ? renderEmptyShelf() : renderBooksShelf()}
    </>
  );
};

export default BookShelf;
