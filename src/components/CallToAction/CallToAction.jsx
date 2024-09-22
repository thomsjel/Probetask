import React from "react";
import styles from "./CallToAction.module.css";
import gogglesImage from "../../images/goggles.svg";

function CallToAction() {
  return (
    <button className={styles.root}>
      <div className={styles.iconWrapper}>
        <img alt="goggles-icon" src={gogglesImage} />
      </div>
      <span>Call to Action</span>
      <span>→</span>
    </button>
  );
}

export default CallToAction;
