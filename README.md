# Apex Commerce Suite — Vector E-Commerce & Portfolio Showcase Platform

**Apex Commerce Suite** is a modern, high-performance, image-free E-Commerce Front-End & Interactive Portfolio Showcase built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Shadcn UI**.

Designed to showcase top-tier web developer skills without relying on fragile external raster images, all products feature 100% procedural vector graphic blueprints, instant real-time cart state, discount calculators, and a simulated checkout pipeline.

---

## 🌟 Key Features & Capabilities

- **100% Vector & Graphic Product Visualizers (No Raster Images)**:
  - Procedurally rendered SVG vector blueprints for hardware and software modules (Curved Displays, Mechanical Keyboards, Studio Headphones, Neural Processors, FIDO2 Security Keys, Thunderbolt Docks).
  - Guarantees 100% reliable rendering without broken external image dependencies or slow image asset downloads.

- **Real-Time Client Cart Engine & Drawer**:
  - Interactive slide-over cart drawer (`CartDrawer.tsx`).
  - Dynamic quantity increments, subtotals, tax calculation, and item removal.
  - Interactive Promo Code System (`APEX20` / `APEX10` for 20% / 10% instant discounts).

- **Simulated Order Checkout**:
  - Interactive Checkout Modal (`CheckoutModal.tsx`) with shipping inputs, simulated card payment, and instant order ID generation.

- **Category Curation & Live Search Indexing**:
  - Category filters (`All`, `Displays`, `Peripherals`, `Audio & IoT`, `SaaS Modules`).
  - Real-time search filter indexing product names, categories, and technical specifications.

- **Dark & Light Mode Support**:
  - Persistent theme mode state in `localStorage` with smooth color transitions.

- **Responsive Architecture**:
  - Pixel-perfect layout across desktop, tablet, and mobile displays.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS Design Tokens
- **Icons**: Lucide React
- **UI Components**: Custom Primitives & Shadcn UI Primitives
- **Graphics**: Procedural SVG Vector Blueprints (`ProductVector.tsx`)
- **State Management**: React Context API (`CartContext.tsx`, `ThemeContext.tsx`)

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation & Local Setup

```bash
# Clone or navigate to directory
cd apex-commerce-suite

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## 📦 Production Build

To test static page generation and production build optimization:

```bash
npm run build
npm run start
```
