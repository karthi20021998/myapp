import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./index.css";

import BookContext from "../../context/bookcontext";

const BookShelfCard = (props) => {
  const { mybooks } = props;
  const { title, editionCount, id } = mybooks;
  const { removeBooks } = useContext(BookContext);

  const onClickDelete = () => {
    removeBooks(id);
  };

  return (
    <li className="shelf-items-card">
      <div>
        <h1 className="shelf-items-title">{title}</h1>
        <p className="shelf-items-edition-count">
          Edition Count:<span className="span-text">{editionCount}</span>
        </p>
      </div>
      <button className="remove-btn" onClick={onClickDelete}>
        <MdDeleteOutline className="remove-icon" />
      </button>
    </li>
  );
};

export default BookShelfCard;
