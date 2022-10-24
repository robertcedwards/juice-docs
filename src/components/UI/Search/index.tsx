import React from "react";
import styles from "./Search.module.css";

interface SearchProps {
  onChange: (value: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.search}
        placeholder="SEARCH"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Search;
