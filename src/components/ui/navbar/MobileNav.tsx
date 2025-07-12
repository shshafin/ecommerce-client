import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function MobileNav({ close }: { close: () => void }) {
  return (
    <nav className="lg:hidden pb-4 border-t mt-4 pt-4">
      <div className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={close}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
