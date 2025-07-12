import Image from "next/image";
import Link from "next/link";

export default function OrderTracking() {
  return (
    <Link
      href="/track-order"
      className="flex items-center space-x-2 text-md font-medium hover:text-primary">
      <Image
        src="/order-track.svg"
        alt="Track Order"
        width={20}
        height={20}
        className="h-5 w-5"
      />
      <span className="hidden sm:inline">Order Tracking</span>
    </Link>
  );
}
