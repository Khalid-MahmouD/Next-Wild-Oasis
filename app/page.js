import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis. Welcome to paradise!</h1>

      <Link href="/cabins">Explore Luxurious Cabins</Link>
    </div>
  );
}

// prefetch all the routes
// each page will download 
// each page cached 