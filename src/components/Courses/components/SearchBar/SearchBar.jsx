import React from "react";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import "./SearchBar.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar" data-testid="searchBar">
      <Input
        placeholder="Input text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="searchInput"
      />
      <Button text="SEARCH"
      onClick={() => {}}
      data-testid="searchButton"
      />
    </div>
  );
}
