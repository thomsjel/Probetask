import React, { useEffect, useState, useMemo } from "react";
import styles from "./ImageSlider.module.css";

function ImageSlider({ transitionTime, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const preloadedImages = useMemo(() => {
    return images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionTime * 1000);

    return () => clearInterval(interval);
  }, [images.length, transitionTime]);

  return (
    <div className={styles.root}>
      {preloadedImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`slide-${index}`}
          className={`${styles.image}`}
          hidden={currentImageIndex !== index}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
