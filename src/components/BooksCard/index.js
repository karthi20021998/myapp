import "./index.css";

const BooksCard = (props) => {
  const { bookDetails } = props;
  const { title, editionCount, ratingsAverage } = bookDetails;
  return (
    <li>
      <h1>{title}</h1>
      <p>{ratingsAverage}</p>
      <p>{editionCount}</p>
    </li>
  );
};

export default BooksCard;
