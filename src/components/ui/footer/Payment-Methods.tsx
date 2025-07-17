import Image from "next/image";

const paymentMethods = [
  { id: 1, href: "#" },
  { id: 2, href: "#" },
  { id: 3, href: "#" },
  { id: 4, href: "#" },
  { id: 5, href: "#" },
  { id: 6, href: "#" },
];

export default function PaymentMethods() {
  return (
    <div className="flex gap-1 flex-wrap">
      {paymentMethods.map((icon) => (
        <Image
          key={icon.id}
          src={`/p-${icon.id}.webp`}
          alt={`p-${icon.id}`}
          width={40}
          height={40}
          className="object-contain"
          placeholder="empty"
        />
      ))}
    </div>
  );
}
