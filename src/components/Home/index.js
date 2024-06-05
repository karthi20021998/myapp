import "./index.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import BooksCard from "../BooksCard";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [apiStatus, setApiStatus] = useState("INITIAL");
  const [searchResponse, setSearchResponse] = useState({});

  const getUpdatedData = (data) => ({
    books: data.docs.map((eachBook) => ({
      title: eachBook.title,
      ratingsAverage: eachBook.ratings_average,
      editionCount: eachBook.edition_count,
      id: eachBook.cover_i,
    })),
  });

  const fetchBooksApi = async () => {
    setApiStatus("INPROGRESS");
    const url = `https://openlibrary.org/search.json?q=${searchInput}&limit=10&page=1`;
    const apiResponse = await fetch(url);
    if (apiResponse.ok === true) {
      const data = await apiResponse.json();
      const newData = getUpdatedData(data);
      setSearchResponse(newData);
      setApiStatus("SUCCESS");
    }
  };

  const onChangeUserInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onClickSearchBook = () => {
    fetchBooksApi();
  };

  const renderEmptyView = () => (
    <div>
      <h1>No results</h1>
    </div>
  );

  const renderLoader = () => (
    <div className="loader-container">
      <ThreeDots color="#15158f" height="50" width="50" />
    </div>
  );

  const renderBooks = () => {
    const { books } = searchResponse;
    return (
      <ul>
        {books &&
          books.map((eachBook) => (
            <BooksCard key={eachBook.id} bookDetails={eachBook} />
          ))}
      </ul>
    );
  };

  const renderSearchResultsView = () => {
    switch (apiStatus) {
      case "INPROGRESS":
        return renderLoader();
      case "SUCCESS":
        return renderBooks();
      default:
        return renderEmptyView();
    }
  };

  return (
    <div>
      <h1>Book Library</h1>
      <div>
        <label>Search book by name:</label>
        <input
          type="search"
          placeholder="search"
          value={searchInput}
          onChange={onChangeUserInput}
        />
        <button onClick={onClickSearchBook}>
          <IoMdSearch />
        </button>
      </div>
      {renderSearchResultsView()}
    </div>
  );
};

export default Home;
