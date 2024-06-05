import "./index.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const fetchBooksApi = async () => {
    const url = `https://openlibrary.org/search.json?q=${searchInput}`;
    const apiResponse = await fetch(url);
    if (apiResponse.ok === true) {
      const data = await apiResponse.json();
    }
  };

  const onChangeUserInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onClickSearch = () => {
    fetchBooksApi();
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
        <button onClick={onClickSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Home;
