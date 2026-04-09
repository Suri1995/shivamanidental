# Shivamani Dental - Next.js Web Application

A modern, responsive dental clinic website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with design tokens
- **Animations**: Framer Motion
- **Package Manager**: Yarn
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: Sonner

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with design tokens
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation bar
│   ├── HeroSection.tsx   # Hero section with animations
│   ├── ServicesSection.tsx
│   ├── DoctorsTeam.tsx
│   └── ... (other sections)
├── public/               # Static assets
│   └── assets/          # Generated images
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
├── scripts/             # Node.js build scripts (optional)
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- Yarn package manager

### Installation

1. **Install dependencies**:
```bash
yarn install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

3. **Run the development server**:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Commands

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

### Adding UI Components

The project uses shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Adding Dependencies

Dependencies are automatically detected from imports. Simply import what you need:

```typescript
import { Button } from '@/components/ui/button'
```

The system will automatically install required packages.

### Design System

The project uses a cohesive design system with:
- **Color Tokens**: Defined in `app/globals.css`
- **Typography**: Montserrat (headings) and Roboto (body)
- **Spacing**: Tailwind's spacing scale
- **Animations**: Framer Motion for smooth transitions

## Features

- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design (mobile-first)
- 🎨 Beautiful modern UI with design tokens
- ♿ Accessibility best practices (WCAG)
- 🚀 Optimized for performance
- 📊 SEO optimized with metadata
- 🔧 TypeScript for type safety

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys

### Manual Deployment

```bash
yarn build
yarn start
```

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## License

This project is proprietary and confidential.

## Support

For issues or questions, please contact the development team or open an issue in the repository.

---

Built with ❤️ for Shivamani Dental Clinic

