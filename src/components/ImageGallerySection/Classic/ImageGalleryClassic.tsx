import { ImageGalleryClassicProps } from "../types";
import styles from "./image-gallery-classic.module.css";
import { useState, useCallback, useEffect } from "react";

export const ImageGalleryClassic = ({
  images,
  title,
  description,
  style,
}: ImageGalleryClassicProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const handlePrevious = useCallback(() => {
    setSlideDirection('right');
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSlideDirection('left');
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleThumbnailClick = useCallback((index: number) => {
    setSlideDirection(index > currentImageIndex ? 'left' : 'right');
    setCurrentImageIndex(index);
  }, [currentImageIndex]);

  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => {
        setSlideDirection(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  return (
    <section className={styles.galleryContainer}>      
      <div className={styles.mainImageContainer}>
        <img
          src={images[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className={`${styles.mainImage} ${
            slideDirection ? styles[`slide${slideDirection.charAt(0).toUpperCase() + slideDirection.slice(1)}`] : ''
          }`}
        />
        <button
          className={`${styles.navigationButton} ${styles.prevButton}`}
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          className={`${styles.navigationButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className={styles.thumbnailsContainer}>
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`${styles.thumbnailWrapper} ${
              index === currentImageIndex ? styles.active : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`${title} - Thumbnail ${index + 1}`}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
