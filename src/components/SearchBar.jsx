// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State to store the user's search input

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Pass the query to the parent when the user submits it
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update state on user input
        placeholder="Search for music..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
