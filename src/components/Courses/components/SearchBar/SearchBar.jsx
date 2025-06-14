import Input from "../../../../common/Button/Input";
import Button from "../../../../common/Button/Button";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="searchBar" data-testid="searchBar">
      <Input
        placeholderText="Enter course name or ID"
        labelText=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="searchInput"
      />
      <Button
        buttonText="Search"
        handleClick={() => {}}
        data-testid="searchButton"
      />
    </div>
  );
}
