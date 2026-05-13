# Hometech Studio — Premium Construction Website

## Overview

Hometech Studio is a modern premium construction and architecture website built using Next.js, Sanity CMS, Tailwind CSS, Framer Motion, and Vercel.

The project was designed with a strong focus on:

- Premium visual aesthetics
- Responsive UI/UX
- Smooth animations
- CMS-driven project management
- Scalable architecture
- Performance optimization
- Production deployment workflow

This project demonstrates full-stack frontend engineering skills including CMS integration, responsive design systems, deployment pipelines, animation systems, and API development.

---

# Live Demo

```bash
https://construction-website-jy38ywpfa-keshav-soni-s-projects.vercel.app/
```

---

# Tech Stack

| Technology    | Usage                      |
| ------------- | -------------------------- |
| Next.js 16    | Frontend Framework         |
| TypeScript    | Type Safety                |
| Tailwind CSS  | Styling                    |
| Framer Motion | Animations                 |
| Sanity CMS    | Headless CMS               |
| Vercel        | Deployment                 |
| GitHub        | Version Control            |
| Nodemailer    | Contact Form Email Service |

---

# Features

## Modern Responsive Design

- Mobile-first responsive UI
- Tablet optimization
- Desktop premium layout
- Fluid typography scaling
- Responsive image handling

---

## CMS Powered Portfolio

Projects can be:

- Added dynamically
- Edited live
- Updated without coding
- Managed through Sanity Studio

Features include:

- Dynamic project pages
- Gallery system
- Slug-based routing
- Real-time content updates

---

## Premium UI/UX

- Animated hero section
- Fullscreen mobile navigation
- Hover transitions
- Reveal animations
- Interactive project slider
- Custom loader screen
- Cinematic project layouts

---

## Performance Optimizations

- Optimized image loading
- Responsive image sizing
- Static page generation
- Server-side rendering
- Lazy loading
- Optimized animations for mobile

---

## Contact System

- Functional contact form
- API route handling
- Email delivery integration
- Production-ready backend endpoint

---

# Folder Structure

```bash
src/
 ├── app/
 │    ├── api/
 │    ├── contact/
 │    ├── project/[slug]/
 │    └── studio/
 │
 ├── components/
 │    ├── Navbar.tsx
 │    ├── Loader.tsx
 │    ├── ProjectsSlider.tsx
 │    ├── ContactForm.tsx
 │    ├── Reveal.tsx
 │    ├── HeroAnimation.tsx
 │    └── SmoothScroll.tsx
 │
 ├── sanity/
 │    ├── client.ts
 │    ├── schemaTypes/
 │    └── lib/
 │
 └── styles/
```

---

# Key Engineering Highlights

## Dynamic CMS Architecture

Implemented a scalable CMS workflow using Sanity where projects can be managed by non-technical users without touching code.

---

## Advanced Frontend Animations

Built smooth interaction systems using Framer Motion and optimized animation behavior separately for desktop and mobile performance.

---

## Responsive Engineering

Created a fully responsive experience with:

- Adaptive typography
- Mobile navigation system
- Swipe-friendly layouts
- Responsive grids
- Optimized touch interactions

---

## Production Deployment Workflow

Configured:

- GitHub version control
- Vercel deployment pipeline
- Environment variables
- Production build optimization
- CMS live integration

---

# Sanity CMS Workflow

The admin panel allows:

- Adding new projects
- Uploading gallery images
- Editing descriptions
- Managing portfolio content
- Multi-admin collaboration

Studio Route:

```bash
/studio
```

---

# Git Workflow Used

```bash
git init
git add .
git commit -m "Initial commit"
git branch production
git push origin main
```

---

# Local Development Setup

## Clone Repository

```bash
git clone https://github.com/keshavsoni166/construction-website.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Add Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
EMAIL_USER=
EMAIL_PASS=
```

---

## Run Development Server

```bash
npm run dev
```

---

# Deployment

Deployed using:

- GitHub
- Vercel

Production deployment includes:

- Automatic CI/CD
- SSL security
- CDN delivery
- Edge optimization

---

# Future Improvements

- CAPTCHA spam protection
- Advanced SEO optimization
- Analytics integration
- Blog section
- Dark/light theme system
- Multi-language support
- Client dashboard

---

# Screenshots

/screenshots/homepage.png

---

# Skills Demonstrated

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Responsive Design
- UI/UX Engineering
- Framer Motion
- Component Architecture

---

## Backend / CMS

- API Routes
- Headless CMS
- Sanity
- Dynamic Data Fetching
- Slug Routing
- Server Rendering

---

## DevOps / Deployment

- Git
- GitHub
- Vercel
- Environment Variables
- Production Deployment
- CI/CD Workflow

---

# Author

## Keshav Soni

Full Stack Developer / Frontend Engineer

GitHub:

```bash
https://github.com/keshavsoni166
```

---

# License

This project is developed for portfolio and commercial demonstration purposes.
