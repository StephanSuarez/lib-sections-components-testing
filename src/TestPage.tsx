// src/TestPage.tsx
import { ImageGalleryClassic, ImageGalleryModern } from './components/ImageGallerySection';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
  'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
];

export const TestPage = () => {
  return (
    <div>
      <ImageGalleryClassic
        title="My Test Gallery"
        description="Galería de prueba para desarrollo"
        images={images}
        style="green"
      />
      <ImageGalleryModern
        title="My Test Gallery"
        description="Galería de prueba para desarrollo"
        images={images}
        style="red"
      />
    </div>
  );
};
