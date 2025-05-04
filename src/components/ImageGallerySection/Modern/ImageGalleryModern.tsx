import { ImageGalleryModernProps } from "../types";
import styles from "./image-gallery-modern.module.css";
import { useState, useCallback, useEffect } from "react";

export const ImageGalleryModern = ({
  images,
  title,
  description,
  style,
}: ImageGalleryModernProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationType, setAnimationType] = useState<'zoomIn' | 'zoomOut' | null>(null);

  const handlePrevious = useCallback(() => {
    setAnimationType('zoomOut');
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setAnimationType('zoomIn');
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleThumbnailClick = useCallback((index: number) => {
    setAnimationType(index > currentImageIndex ? 'zoomIn' : 'zoomOut');
    setCurrentImageIndex(index);
  }, [currentImageIndex]);

  // Reset animation type after animation completes
  useEffect(() => {
    if (animationType) {
      const timer = setTimeout(() => {
        setAnimationType(null);
      }, 500); // Match this with the CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [animationType]);

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.gallerySection}>
        <div className={styles.mainImageContainer}>
          <img
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className={`${styles.mainImage} ${
              animationType ? styles[animationType] : ''
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
      </div>
    </section>
  );
};
