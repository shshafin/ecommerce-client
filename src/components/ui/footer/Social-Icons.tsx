import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  { id: 1, href: "#" },
  { id: 2, href: "#" },
  { id: 3, href: "#" },
  { id: 4, href: "#" },
  { id: 5, href: "#" },
  { id: 6, href: "#" },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-1 flex-wrap">
      {socialIcons.map((icon) => (
        <Link
          key={icon.id}
          href={icon.href}
          className="flex items-center justify-center ">
          <Image
            src={`/social-${icon.id}.svg`}
            alt={`social-${icon.id}`}
            width={16}
            height={16}
            className="object-contain h-7 w-7"
          />
        </Link>
      ))}
    </div>
  );
}
