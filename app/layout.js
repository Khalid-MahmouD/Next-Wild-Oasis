import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google"; //1
import Header from "./_components/Header";

const josefin = Josefin_Sans({ //2
  subsets: ['latin'], // 2.1
  display: 'swap', // 2.2
})

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description: "Luxurious cabins hotel, located in the heart of the Italian Dolomites surrounded by the most beautiful mountains and dark forests.",
}


export default function RootLayout({ children }) {
  return <html lang='en'>

    <body className={`
      ${josefin.className} 
      bg-primary-950 text-primary-100 min-h-screen
       flex flex-col antialiased relative`}>
      <Header />
      <div className="flex-1 px-8 py-12 grid">
        <main className="max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>

    </body>
  </html>
}