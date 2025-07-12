import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative uppercase text-lg font-medium transition-colors ${
              isActive ? "text-[#008B8B]" : "text-gray-700 hover:text-[#008B8B]"
            }`}>
            {link.name}
            {/* underline */}
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#008B8B]"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
