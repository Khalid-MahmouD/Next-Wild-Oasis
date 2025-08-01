import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"; // Adjust the path as necessary


function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height={60}
        width={60}
        quality={100} // Optional: Adjust quality for better performance

        alt="The Wild Oasis logo"
      />
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;


// correct sized images on demand
// X layout shifts -> force to specify the exact height and width of the image
// Lazy load images when in viewport


// 