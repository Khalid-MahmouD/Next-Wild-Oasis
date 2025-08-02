# The Wild Oasis

Welcome to **The Wild Oasis** – a luxurious cabins hotel web application built with [Next.js](https://nextjs.org/), [Supabase](https://supabase.com/), and [Tailwind CSS](https://tailwindcss.com/). This project showcases modern full-stack development best practices, including server-side rendering, dynamic routing, and responsive design.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🏕️ **Browse Cabins**: View a curated list of luxury cabins with images, descriptions, and amenities.
- 🔍 **Cabin Details**: Dynamic pages for each cabin with detailed info and reservation options.
- 🗺️ **Location Info**: See where each cabin is located in the Italian Dolomites.
- 👤 **Guest Area**: Secure guest area for reservations and account management.
- ⚡ **Fast & Responsive**: Optimized for all devices using Tailwind CSS.
- 🔒 **Authentication**: (If enabled) Secure login and registration via Supabase.
- 🚀 **SEO Optimized**: Dynamic metadata for better search engine visibility.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Backend/Database**: [Supabase](https://supabase.com/)
- **Image Optimization**: [Next/Image](https://nextjs.org/docs/pages/api-reference/components/image)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Supabase project (for backend/database)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/next-wild-oasis.git
    cd next-wild-oasis
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure environment variables**

    Create a `.env.local` file in the root directory and add your Supabase credentials:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
app/
  |_ _components/      # Reusable UI components (Header, Logo, Navigation, etc.)
  |_ _lib/             # Data fetching and Supabase client
  |_ _styles/          # Global styles (Tailwind config, CSS)
  |_ cabins/           # Dynamic cabin pages ([cabinId]/page.js)
  |_ layout.js         # Main layout file
  |_ page.js           # Home page
public/
  |_ bg.png            # Background image
  |_ ...               # Other static assets
.env.local             # Environment variables
README.md              # Project documentation
```

---

## Environment Variables

| Variable                   | Description                |
|----------------------------|----------------------------|
| NEXT_PUBLIC_SUPABASE_URL   | Supabase project URL       |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anon public key |

---

## Scripts

| Command         | Description                      |
|-----------------|----------------------------------|
| `npm run dev`   | Start development server         |
| `npm run build` | Build for production             |
| `npm start`     | Start production server          |
| `npm run lint`  | Run ESLint checks                |

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

---

## Contact

For questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
