import React from "react";
import Highlight from "../Highlight/Highlight";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./Intro.module.css";
import sliderImage1 from "../../images/headerbild1.jpeg";
import sliderImage2 from "../../images/headerbild2.jpeg";
import sliderImage3 from "../../images/headerbild3.jpeg";

function Intro() {
  const images = [sliderImage1, sliderImage2, sliderImage3];
  return (
    <div className={styles.root}>
      <Highlight />
      <ImageSlider transitionTime={3} images={images} />
    </div>
  );
}

export default Intro;
