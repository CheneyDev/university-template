# University Website Template

A modern, responsive, and multilingual website template for universities built with Next.js. This template provides a solid foundation for creating a university website with support for English and French languages.

## Features

- **Multilingual Support**: Built-in support for English and French, easily extendable to other languages
- **Responsive Design**: Fully responsive layout that works on all devices
- **Configurable University Identity**: Easy customization of university name, logo, colors, and contact information
- **Modern UI Components**: Header with navigation, footer, language switcher, and more
- **SEO Optimized**: Metadata support for better search engine visibility
- **Cloudflare Pages Ready**: Configuration file included for easy deployment

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/university-template.git
cd university-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### University Identity

Update the university details in `src/config/university.ts`:

- University name (in different languages)
- Logo URLs (replace the SVG files in `public/images/`)
- University colors
- Contact information
- Social media links
- Campus locations

### Navigation

Modify the navigation structure in `src/config/navigation.ts`:

- Main navigation items
- Footer navigation sections
- Add or remove menu items as needed

### Content

The content structure follows this pattern:

- `src/app/[locale]/` - Contains all localized pages
- `src/components/` - Reusable UI components
- `src/config/` - Configuration files for customization
- `src/types/` - TypeScript type definitions

## Deployment

### Cloudflare Pages

This template includes a configuration file for Cloudflare Pages deployment:

1. Push your code to a GitHub repository
2. In your Cloudflare Pages dashboard, create a new project
3. Connect your GitHub repository
4. Use the following build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18

## License

This template is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js - The React framework used
- Tailwind CSS - For styling
- Unsplash - For demo images
