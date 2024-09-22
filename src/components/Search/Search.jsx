import React from "react";
import searchIcon from "../../images/search.svg";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.root}>
      <img alt="search-icon" src={searchIcon} />
    </div>
  );
}

export default Search;
