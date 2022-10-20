import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import useDebounce from "./hook/useDebounceHook";
import Country from "./components/Country";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(inputValue, 1200);

  const doRequest = useCallback(async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${debouncedValue}`
    );
    setSearchResults(data);
  }, [debouncedValue]);

  useEffect(() => {
    if (debouncedValue) {
      doRequest();
    }
  }, [debouncedValue, doRequest]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      find countries:{" "}
      <input type="text" value={inputValue} onChange={handleChange} />
      {searchResults.length === 1 &&
        searchResults.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      {searchResults.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      {searchResults.length >= 2 && searchResults.length < 10 ? (
        <div>
          {searchResults.map((country, i) => (
            <div key={i + 1}>
              <p key={i}>{country.name.common}</p>
              <button
                key={country.population}
                value={country.name.common}
                onClick={handleClick}
              >
                show
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
