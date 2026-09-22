# ZPR Roofing — Landing Page & Admin Platform

A modern, high-performance web application and internal management dashboard for **ZPR Roofing**, a professional roofing contractor proudly serving Rockford, IL and Northern Illinois.

---

## 🚀 Overview

This project provides both a client-facing marketing landing page optimized for conversion and local SEO, as well as an internal administrative panel to manage quotes, projects, inventory, finances, and team operations.

### Key Features

- **Client-Facing Landing Page**:
  - **Services Showcase**: Detailed pages for Roof Repair, New Roof Installation, Storm Damage Repair, and Roof Inspections.
  - **Portfolio & Case Studies**: Interactive showcases of completed residential and commercial projects.
  - **Testimonials & Trust Signals**: Customer reviews and official BBB (Better Business Bureau) accreditation badge.
  - **Interactive Assistant**: Quick answers and quotes guidance widget.
  - **Lead Capture & Contact System**: Contact and quote request forms connected to automated email notifications via Resend.
  - **SEO & Meta Optimization**: Fully configured OpenGraph, Twitter cards, local business schema, and robots directives.

- **Admin Management System (`/admin`)**:
  - **Quotes Management**: Create, edit, approve, reject, and convert quotes directly into active projects.
  - **Projects Tracking**: Monitor progress, assigned workers, start and completion dates.
  - **Inventory Control**: Material stock levels, alerts for low-inventory items, and usage forecasts.
  - **Client Directory**: Centralized customer records and contact histories.
  - **Finances & Analytics**: Financial metrics, revenue vs. costs charts, and project profitability summaries.
  - **Workforce Management**: Crew scheduling, assignments, and contractor details.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library**: [React](https://react.dev/) 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 & [tw-animate-css](https://github.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) Primitives & [Lucide Icons](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Email Delivery**: [Resend](https://resend.com/) & [React Email](https://react.email/)
- **Form & Validation**: React Hook Form & [Zod](https://zod.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Project Structure

```
├── app/                  # Next.js App Router (pages & API routes)
│   ├── about/            # About Us page
│   ├── admin/            # Admin dashboard routes
│   ├── api/              # API endpoints (email sending, chat)
│   ├── areas-we-serve/   # Service areas coverage page
│   ├── contact/          # Contact page
│   ├── faq/              # Frequently asked questions
│   ├── portfolio/        # Portfolio showcase
│   ├── services/         # Dedicated service subpages
│   └── testimonials/     # Client testimonials page
├── components/           # Reusable UI & section components
│   ├── admin/            # Admin dashboard components & dialogs
│   └── ui/               # Base UI design system components
├── lib/                  # Utility functions
├── public/               # Static assets, brand logos, and photography
└── styles/               # Global stylesheet configurations
```

---

## ⚡ Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) and [pnpm](https://pnpm.io/) (or `npm`) installed.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:JamzDeveloper/roofing-landing-page.git
cd roofing-landing-page
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and configure your environment variables:

```env
# Resend API Key & recipient for contact form emails
RESEND_API_KEY=your_resend_api_key_here
RESEND_EMAIL_TO=recipient_email_here
```

### 4. Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🏗️ Available Scripts

- `pnpm dev`: Runs the local development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint checks across the codebase.

---

## 📄 License

This project is proprietary and confidential. All rights reserved by **ZPR Roofing**.