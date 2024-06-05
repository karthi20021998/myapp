import "./index.css";
import { useEffect, useState } from "react";
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
    try {
      const apiResponse = await fetch(url);
      if (apiResponse.ok === true) {
        const data = await apiResponse.json();
        const newData = getUpdatedData(data);
        setSearchResponse(newData);
        setApiStatus("SUCCESS");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooksApi();
    // eslint-disable-next-line
  }, [searchInput]);

  const onChangeUserInput = (event) => {
    setSearchInput(event.target.value);
  };

  const renderEmptyView = () => (
    <div className="empty-view-container">
      <img
        src="https://res.cloudinary.com/dghnaymwn/image/upload/v1709725205/karthi/9318694_yyqzyt.jpg"
        alt="noresultimage"
        className="empty-view-image"
      />
      <h1 className="empty-view-text">Type in search bar to find books....</h1>
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
      <ul className="books-container">
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
        return null;
    }
  };

  return (
    <>
      <div className="home-container">
        <h1 className="heading">Book Library</h1>
        <div className="input-container">
          <label className="input-label">Search book by name:</label>
          <div className="input-card">
            <input
              type="search"
              placeholder="search"
              value={searchInput}
              className="input-box"
              onChange={onChangeUserInput}
            />
          </div>
        </div>
      </div>
      {searchInput === "" ? renderEmptyView() : renderSearchResultsView()}
    </>
  );
};

export default Home;
