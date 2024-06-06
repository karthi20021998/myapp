import { useContext } from "react";
import BookContext from "../../context/bookcontext";
import "./index.css";

const BooksCard = (props) => {
  const { bookDetails } = props;
  const { title, editionCount, ratingsAverage } = bookDetails;

  const { addBooks } = useContext(BookContext);

  const onClickAdd = () => {
    addBooks(bookDetails);
  };

  return (
    <li>
      <div className="books-items-container">
        <h1 className="book-title">{title}</h1>
        <p className="book-rating">Rating-{ratingsAverage}</p>
        <p className="book-edition">Edition count-{editionCount}</p>
        <button className="add-button" onClick={onClickAdd}>
          Add to shelf
        </button>
      </div>
    </li>
  );
};

export default BooksCard;
