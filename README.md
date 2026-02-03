# Fullstack Developer Portfolio

A professional portfolio website built with Next.js 15, TypeScript, and TailwindCSS. Optimized for performance, accessibility, and SEO.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)
- **Deployment:** Vercel

## Features

- **Performance Optimized**
  - Lighthouse score 95+
  - Core Web Vitals optimized
  - Image optimization with next/image
  - Font optimization with next/font
  - Bundle size optimized with package imports

- **Modern UI/UX**
  - Responsive design (Mobile-first)
  - Dark/Light mode with system preference
  - Smooth scroll animations
  - Professional hover effects
  - Loading states

- **SEO Ready**
  - Complete metadata configuration
  - Open Graph tags
  - Twitter cards
  - Structured data ready
  - Automatic sitemap generation
  - robots.txt configured

- **Developer Experience**
  - TypeScript strict mode
  - ESLint + Prettier configured
  - Clean component architecture
  - Reusable UI components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RobertPX/portafolio.git
cd portafolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Home page
│   ├── robots.ts        # robots.txt generator
│   └── sitemap.ts       # sitemap.xml generator
├── components/
│   ├── sections/        # Page sections
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── tech-stack.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/              # shadcn/ui components
│   ├── navigation.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    ├── data.ts          # Projects and content data
    └── utils.ts         # Utility functions
```

## Customization

### Personal Information

1. Update `src/lib/data.ts` with your:
   - Projects
   - Tech stack
   - Social links
   - Navigation items

2. Update `src/app/layout.tsx` with your:
   - Name
   - Site URL
   - Meta description
   - Keywords

3. Replace placeholder content in:
   - `src/components/sections/hero.tsx`
   - `src/components/sections/about.tsx`
   - `src/components/sections/footer.tsx`

### Styling

- Colors: Edit CSS variables in `src/app/globals.css`
- Fonts: Update font imports in `src/app/layout.tsx`
- Components: Customize shadcn/ui components in `src/components/ui/`

### Images

Add your images to `public/`:
- `favicon.ico` - Browser tab icon
- `og-image.png` - Open Graph image (1200x630px)
- `projects/` - Project screenshots
- `cv.pdf` - Your resume/CV

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

The project includes `vercel.json` with optimized security headers and caching.

### Manual Build

```bash
npm run build
npm run start
```

## Performance

Target Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with Next.js and deployed on Vercel.
