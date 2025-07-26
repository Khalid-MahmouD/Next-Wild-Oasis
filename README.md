# The Wild Oasis

This is a [Next.js](https://nextjs.org/) project for a luxury cabin booking platform, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🏞️ Project Overview

The Wild Oasis is a cabin booking application that allows users to browse and book luxury cabins. The project features a modern design with Tailwind CSS and follows Next.js App Router conventions.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

### Current Pages and Routes

The application currently implements the following routes:

#### 🏠 Main Pages

- **`/` (Home Page)** - `app/page.js`

  - Landing page with welcome message
  - Link to explore cabins
  - Entry point for the application

- **`/cabins` (Cabins Page)** - `app/cabins/page.js`

  - Lists available cabins for booking
  - Includes demo API fetch from JSONPlaceholder
  - Features Counter component for interactivity

- **`/about` (About Page)** - `app/about/page.js`

  - Information about The Wild Oasis
  - Company details and story

- **`/account` (Account Page)** - `app/account/page.js`
  - User account management
  - Profile and reservation settings

### 🧩 Current Components

#### Core Components (`app/_components/`)

- **`Logo.js`** - Site branding and logo display
- **`Navigation.js`** - Main navigation menu with links to all pages
- **`Counter.js`** - Interactive counter component (demo functionality)

#### Layout Components

- **`app/layout.js`** - Root layout with header, main content, and footer
- **`app/loading.js`** - Loading UI component

### 🎨 Styling

- **Global Styles** - `app/_styles/globals.css`
- **Tailwind Configuration** - `tailwind.config.js`
- **PostCSS Configuration** - `postcss.config.mjs`

### 📦 Dependencies

#### Core Dependencies

- **Next.js 14.2.30** - React framework with App Router
- **React 18** - UI library
- **@heroicons/react** - Icon library
- **Tailwind CSS** - Utility-first CSS framework

#### Development Dependencies

- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 🗂️ Planned Features (Starter Components Available)

The `starter/` directory contains ready-to-implement components for future features:

### 📋 Booking Components

- `CabinCard.js` - Individual cabin display cards
- `DateSelector.js` - Date picker for reservations
- `ReservationForm.js` - Booking form component
- `ReservationCard.js` - Display user reservations
- `DeleteReservation.js` - Remove bookings functionality

### 🔐 Authentication Components

- `SignInButton.js` - Google sign-in integration
- `SignOutButton.js` - User logout functionality
- `LoginMessage.js` - Login prompt component

### 🧭 Navigation Components

- `Header.js` - Enhanced header component
- `SideNavigation.js` - Account sidebar navigation

### 🎛️ UI Components

- `Spinner.js` & `SpinnerMini.js` - Loading indicators
- `TextExpander.js` - Expandable text functionality
- `Price.js` - Price display component
- `SelectCountry.js` - Country selection dropdown

### 📄 Additional Pages

- `home-page.js` - Enhanced landing page
- `cabin-page.js` - Individual cabin details
- `login-page.js` - User authentication
- `profile-page.js` - User profile management
- `reservations-page.js` - User booking history
- `reservation-edit-page.js` - Modify existing bookings
- `thank-you-page.js` - Booking confirmation

### 🔧 Utilities

- `data-service.js` - API interaction service
- `colors.json` - Design system colors
- `error.js` & `not-found.js` - Error handling pages

## 🛠️ Current Implementation Status

### ✅ Implemented

- [x] Basic Next.js App Router setup
- [x] Tailwind CSS configuration
- [x] Root layout with header/footer
- [x] Core navigation between pages
- [x] Home, About, Cabins, and Account pages
- [x] Logo and Navigation components
- [x] Loading states

### 🚧 In Development

- [ ] Individual cabin details and booking
- [ ] User authentication system
- [ ] Reservation management
- [ ] Payment integration
- [ ] User profiles and account management

## 🎯 Next Steps

1. Implement authentication with NextAuth.js
2. Set up database integration (Supabase recommended)
3. Create cabin booking functionality
4. Add payment processing
5. Implement user reservation management
6. Deploy to Vercel

## 📚 Learn More

To learn more about Next.js and the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
