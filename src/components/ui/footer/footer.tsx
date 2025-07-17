import Link from "next/link";
import TopFeatures from "./TopFeature";
import Copyright from "./Copyright";
import SocialIcons from "./Social-Icons";
import PaymentMethods from "./Payment-Methods";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#555555] text-white">
      {/* Top Section with 3 feature boxes with borders */}
      <TopFeatures />

      {/* Main Footer Content - 5 Columns */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Our Company */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-base mb-6 text-white uppercase tracking-wide">
              OUR COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Our Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Store Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Policy */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-base mb-6 text-white uppercase tracking-wide">
              OUR POLICY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  How to Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Buying Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Security Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Refund & Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-base mb-6 text-white uppercase tracking-wide">
              SOCIAL LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  TikTok
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Threads
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-base mb-6 text-white uppercase tracking-wide">
              USEFUL LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Bulk Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Business With Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Be a Wholesaler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Share Your Idea
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-200 hover:text-white text-sm transition-colors">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Available On */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-base mb-6 text-white uppercase tracking-wide">
              AVAILABLE ON
            </h4>

            <div className="flex flex-row sm:flex-row sm:items-center gap-4">
              {/* App Store Image */}
              <div className=" w-1/3 sm:w-1/2">
                <Image
                  src="/app-store.webp"
                  alt="App Store"
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-contain"
                  placeholder="empty"
                  unoptimized
                />
              </div>

              {/* Play Store Image */}
              <div className="w-1/3 sm:w-1/2">
                <Image
                  src="/play-store.webp"
                  alt="Google Play"
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-contain"
                  placeholder="empty"
                  unoptimized
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold mb-2 text-white">
                Join our newsletter!
              </p>
              <p className="text-xs text-gray-200 leading-relaxed">
                Will be used in accordance with our{" "}
                <span className="text-yellow-500">
                  <Link href={"/privacy-policy"}>privacy policy</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Shipping Systems */}
            <div>
              <h5 className="font-bold text-base mb-4 text-white">
                Shipping Systems:
              </h5>

              <Image
                src="/shipping-system.webp"
                alt="shipping-system"
                width={56}
                height={56}
                className="object-contain w-56 "
                placeholder="empty"
                unoptimized
              />
            </div>

            {/* Payment Methods */}
            <div>
              <h5 className="font-bold text-base mb-4 text-white">
                Payment Methods:
              </h5>
              <PaymentMethods />
            </div>

            {/* Our Social Links */}
            <div>
              <h5 className="font-bold text-base mb-4 text-white">
                Our Social Links:
              </h5>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <Copyright />
    </footer>
  );
}
