import "./index.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const fetchBooksApi = async () => {
    const url = `https://openlibrary.org/search.json?q=${searchInput}`;
    const apiResponse = await fetch(url);
    if (apiResponse.ok === true) {
      const data = await apiResponse.json();
    }
  };

  useEffect(() => {
    fetchBooksApi();
    //eslint-disable-next-line
  }, []);

  const onChangeUserInput = (event) => {
    setSearchInput(event.target.value);
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
      </div>
    </div>
  );
};

export default Home;
