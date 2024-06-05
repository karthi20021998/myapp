import "./index.css";

const BooksCard = (props) => {
  const { bookDetails } = props;
  const { title, editionCount, ratingsAverage } = bookDetails;
  return (
    <li>
      <div className="books-items-container">
        <h1 className="book-title">{title}</h1>
        <p className="book-rating">Rating-{ratingsAverage}</p>
        <p className="book-edition">Edition count-{editionCount}</p>
        <button className="add-button">Add</button>
      </div>
    </li>
  );
};

export default BooksCard;
