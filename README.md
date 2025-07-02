# Solitive Solutions - Futuristic IT Company Website

A cutting-edge, world-class website for Solitive Solutions, built with modern technologies and featuring stunning 3D animations, micro-interactions, and a futuristic UI design.

## 🚀 Features

- **Futuristic Design**: Dark theme with vibrant neon colors (blue, green, purple, pink, cyan)
- **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Micro-interactions**: Smooth animations and hover effects with Framer Motion
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **High Performance**: Optimized for Lighthouse 90+ scores
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Icons**: Lucide React
- **Development**: ESLint, Prettier for code quality

## 📱 Pages & Sections

### Homepage
- **Hero Section**: 3D floating elements, animated tech icons, compelling CTAs
- **Services Section**: Interactive service cards with hover effects
- **About Section**: Company mission, vision, values, and statistics
- **Testimonials**: Client feedback with ratings and animations
- **Contact Section**: Contact form with company information
- **Footer**: Comprehensive footer with links and social media

### Services (Future Implementation)
- Custom Software Development
- POS Systems
- FBR E-Invoicing Solutions
- ERP Systems
- Mobile App Development
- IT Consulting

### Additional Pages (Future Implementation)
- About Us (expanded)
- Case Studies/Projects
- Blog/Insights
- Quote Request
- Careers

## 🎨 Design System

### Color Palette
- **Primary**: Various shades of blue (#0ea5e9 to #0c4a6e)
- **Secondary**: Various shades of green (#22c55e to #14532d)
- **Accent**: Various shades of purple (#a855f7 to #581c87)
- **Neon Colors**: 
  - Blue: #00D4FF
  - Green: #39FF14
  - Purple: #BF00FF
  - Pink: #FF1493
  - Cyan: #00FFFF
- **Dark Background**: Custom dark theme (#1E1E1E to #F5F5F5)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono

### Animations
- **Float**: 6s ease-in-out infinite floating effect
- **Glow**: 2s pulsing glow effect
- **Custom**: Various micro-interactions and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd solitive-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
solitive-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles and TailwindCSS
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Homepage
│   └── components/            # Reusable components
│       ├── 3D/               # Three.js 3D components
│       │   └── FloatingElements.tsx
│       ├── sections/         # Page sections
│       │   ├── HeroSection.tsx
│       │   ├── ServicesSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   └── ContactSection.tsx
│       ├── Navigation.tsx    # Main navigation
│       └── Footer.tsx        # Site footer
├── public/                   # Static assets
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Bundle Analysis**: Optimized imports and tree shaking
- **SEO**: Complete meta tags and structured data

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - sm: 640px
  - md: 768px  
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  neon: {
    blue: '#00D4FF',
    green: '#39FF14',
    // Add your custom colors
  }
}
```

### Animations
Add custom animations in `globals.css`:

```css
@keyframes customAnimation {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Inspiration**: Apple, Stripe, Cuberto, and Three.js examples
- **Design Reference**: Awwwards technology websites
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 📞 Contact

**Solitive Solutions**
- Email: info@solitive.com
- Phone: +92 300 1234567
- Location: Karachi, Pakistan

---

Built with ❤️ by Solitive Solutions team 