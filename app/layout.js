import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";


export const metadata = {
  title: "The Wild Oasis",
}

export default function RootLayout({ children }) {
  return <html lang='en'>
    <body className="bg-primary-950 text-primary-100 min-h-screen">
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        {children}
      </main>
      <footer>
        Copyright © 2025 The Wild Oasis. All rights reserved
      </footer>
    </body>
  </html>
}