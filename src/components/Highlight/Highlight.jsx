import React from "react";
import styles from "./Highlight.module.css";
import CallToAction from "../CallToAction/CallToAction";

function Headline() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span className={styles.category}>Kategorie</span>
        <h1 className={styles.headline}>
          Hier steht eine wichtige Headline des Highlights
        </h1>
        <p className={styles.subText}>
          Hier kann ein Teaser Text stehen, der auch über mehrere Zeilen geht.
        </p>
        <CallToAction />
      </div>
    </div>
  );
}

export default Headline;
