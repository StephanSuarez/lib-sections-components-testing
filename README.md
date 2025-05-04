# React Web Section Components

A collection of reusable React components for building modern web sections, featuring smooth animations, responsive designs, and customizable styles.

## Available Sections

### Image Gallery Sections
- **Classic Gallery**: Traditional horizontal layout with slide animations
- **Modern Gallery**: Contemporary vertical layout with zoom effects

More sections coming soon:
- Hero Sections
- Feature Sections
- Testimonial Sections
- Contact Sections
- Pricing Sections
- FAQ Sections

## Installation

```bash
npm install @your-org/web-sections
# or
yarn add @your-org/web-sections
```

## Quick Start

```tsx
import { ImageGalleryClassic, ImageGalleryModern } from '@your-org/web-sections';

// Example: Image Gallery Section
<ImageGalleryModern
  images={['url1.jpg', 'url2.jpg', 'url3.jpg']}
  title="Our Portfolio"
  description="Explore our latest work"
  style="blue"
/>
```

## Documentation

Each section component has its own documentation with detailed examples and customization options. You can find them in the following locations:

- `/docs/sections/image-gallery.md` - Image Gallery sections documentation
- `/docs/sections/hero.md` - Hero sections documentation (coming soon)
- `/docs/sections/features.md` - Feature sections documentation (coming soon)
- And more...

## Common Features

All section components share these features:
- Responsive design
- Customizable themes
- Smooth animations
- TypeScript support
- CSS Modules for styling
- Accessibility support

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Your Organization]
