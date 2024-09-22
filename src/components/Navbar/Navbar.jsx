import React from "react";
import styles from "./Navbar.module.css";

function Dropdownicon() {
  return <i className={`${styles.arrow} ${styles.down}`}></i>;
}

function Navbar() {
  return (
    <nav className={styles.root}>
      <a>
        Bezirke <Dropdownicon />
      </a>
      <a>
        Entdecken & Erleben <Dropdownicon />
      </a>
      <a>
        Veranstaltungen <Dropdownicon />
      </a>
      <a>Über uns</a>
      <a>Kontakt</a>
    </nav>
  );
}

export default Navbar;
