# Mohamadreza Najarbashi - Resume Website

A modern, interactive resume website built with Next.js, featuring an innovative halftone image effect with mouse interaction. Deployed on GitHub Pages.

## Features

- **Interactive Image Canvas**: Halftone-style image processing with mouse interaction effects
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with custom color palette
- **Timeline-based Experience Section**: Visual timeline for professional experience
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions
- **Static Export**: Optimized static site generation for fast loading

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages (via GitHub Actions)

## Prerequisites

- Node.js 22 or higher
- pnpm (recommended) or npm/yarn

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KeyMoad/keymoad.github.io.git
cd keymoad.github.io
```

2. Install dependencies:
```bash
pnpm install
```

3. Add your photo to the `public` directory:
   - Place your image as `public/photo.jpg` or `public/photo.png`
   - Update the image path in `app/page.tsx` if using a different filename

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the static site:

```bash
pnpm build
```

The output will be in the `out` directory, ready for static hosting.

### Local Preview

Preview the production build locally:

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme colors
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main resume page
├── components/
│   ├── image-canvas.tsx     # Interactive halftone image canvas
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── noise.ts             # Noise functions for canvas effects
│   └── utils.ts             # Utility functions
├── public/
│   └── photo.jpg            # Profile photo
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
└── next.config.mjs          # Next.js configuration
```

## Customization

### Color Palette

The color scheme is defined in `app/globals.css`:

- **Background**: `#020202` (Dark black)
- **Primary/Accent**: `#3E6259` (Teal green)
- **Foreground/Text**: `#CECFC7` (Light beige)

To change colors, update the CSS variables in `app/globals.css`.

### Image Canvas Settings

Adjust the halftone effect parameters in `app/page.tsx`:

```typescript
const HALFTONE_SIZE = 0.005
const CONTRAST = 1
const ACCENT_COLOR = "#CECFC7"
const MOUSE_RADIUS = 100
const REPULSION_STRENGTH = 1.5
const RETURN_SPEED = 0.6
const ACCENT_PROBABILITY = 0.2
const SIZE_VARIATION = 0.1
```

### Resume Content

Edit your resume information directly in `app/page.tsx`. The page includes sections for:

- Header (Name, Title, Contact Info)
- Summary
- Professional Experience
- Projects
- Volunteering
- Skills
- Education
- Languages

## Deployment

### GitHub Pages (Automatic)

The site is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment is handled by GitHub Actions workflow (`.github/workflows/deploy.yml`).

To deploy manually:

1. Push your changes to the `main` branch
2. The GitHub Action will automatically build and deploy the site
3. Your site will be available at `https://keymoad.github.io`

### Manual Deployment

To deploy to other static hosting providers:

1. Build the project:
```bash
pnpm build
```

2. Upload the `out` directory contents to your hosting provider

## Configuration

### Next.js Config

The project uses static export configuration in `next.config.mjs`:

- `output: "export"` - Enables static site generation
- `trailingSlash: true` - Adds trailing slashes to URLs
- `images.unoptimized: true` - Disables image optimization for static export

## License

This project is free to use as a template. You are welcome to:

- ✅ Use this codebase as a starting point for your own resume website
- ✅ Modify the code, styling, and structure to suit your needs
- ✅ Deploy your own version of this template

**However, you must:**

- ❌ **Replace all personal content** (name, contact information, experience, projects, etc.) with your own
- ❌ **Replace the profile photo** with your own image
- ❌ **Not claim the original design/code as your own**

In essence, use the template structure and code, but make it your own with your personal information and content. This ensures the template remains open for others while protecting personal information.

---

**TL;DR**: Free to use as a template. Change the photo and all content. Keep it your own!

## Author

**Mohamadreza Najarbashi (KeyMoad)**

- GitHub: [@KeyMoad](https://github.com/KeyMoad)
- LinkedIn: [mohamadreza-najarbashi](https://www.linkedin.com/in/mohamadreza-najarbashi/)
- Email: mohamadreza.najarbashii@gmail.com
- Telegram: [@KeyMoad](https://t.me/KeyMoad)
