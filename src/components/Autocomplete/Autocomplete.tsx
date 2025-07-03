import { useState, useEffect, useRef } from "react";
import styles from "./Autocmplete.module.css";

interface AutocompleteProps {
  options: string[];
}

export const Autocomplete = ({ options }: AutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState(options);

  const isSearchTermEntered = searchTerm.length > 0;

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setFilteredResults(
      options.filter((string) => string.indexOf(searchTerm) != -1)
    );
  }, [searchTerm, options]);

  const handleClear = () => {
    setSearchTerm("");
    searchInputRef.current?.focus();
  };

  const handleSelect = (value: string) => {
    setSearchTerm(value);
    searchInputRef.current?.focus();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={isSearchTermEntered ? searchTerm : ""}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={searchInputRef}
      />
      <button onClick={() => handleClear()}>{"Clear"}</button>
      {isSearchTermEntered && (
        <div>
          {filteredResults.map((string) => (
            <button
              className={styles.dropdownOption}
              tabIndex={0}
              onClick={() => handleSelect(string)}
            >
              {string}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
