import Link from "next/link";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section with 3 feature boxes with borders */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Free Delivery */}
            <div className="flex items-start gap-4 p-6 border-r border-gray-700 last:border-r-0">
              <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  বিনামূল্যে ডেলিভারি
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  ঢাকার ভিতরে ৫০০ টাকার উপরে অর্ডারে বিনামূল্যে ডেলিভারি পাবেন
                  এবং ঢাকার বাইরে ১০০০ টাকার উপরে।
                </p>
              </div>
            </div>

            {/* Quality Products */}
            <div className="flex items-start gap-4 p-6 border-r border-gray-700 last:border-r-0">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  মানসম্মত পণ্যের নিশ্চয়তা
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  আমাদের সকল পণ্য আন্তর্জাতিক মানের এবং আমরা গুণগত মান বজায়
                  রাখতে প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>
            </div>

            {/* Customer Service */}
            <div className="flex items-start gap-4 p-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  কাস্টমার সার্ভিস
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  আমাদের গ্রাহক সেবা টিম সর্বদা আপনার সেবায় নিয়োজিত এবং যেকোনো
                  সমস্যার সমাধান দিতে প্রস্তুত।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - 5 Columns */}
      <div className="container mx-auto px-4 py-12">
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
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Our Coverage
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
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
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  How to Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Buying Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Security Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Return & Refund Policy
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
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Twitter
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
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Live Chat
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Business With Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Find Wholesaler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Bring Your Idea
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
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
            <div className="space-y-4">
              {/* App Store Button */}
              <Link href="#" className="block">
                <div className="bg-black rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors border border-gray-600">
                  <div className="text-white text-2xl">🍎</div>
                  <div>
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-lg font-semibold text-white">
                      App Store
                    </div>
                  </div>
                </div>
              </Link>

              {/* Google Play Button */}
              <Link href="#" className="block">
                <div className="bg-black rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors border border-gray-600">
                  <div className="text-white text-2xl">▶️</div>
                  <div>
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-lg font-semibold text-white">
                      Google Play
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold mb-2 text-white">
                Join our newsletter!
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং সর্বশেষ অফার পান।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Shipping Systems */}
            <div>
              <h5 className="font-bold text-sm mb-4 text-white">
                Shipping Systems:
              </h5>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SA</span>
                </div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">DHL</span>
                </div>
                <div className="w-12 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">UPS</span>
                </div>
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FX</span>
                </div>
                <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">TNT</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h5 className="font-bold text-sm mb-4 text-white">
                Payment Methods:
              </h5>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">bKash</span>
                </div>
                <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Rocket</span>
                </div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Nagad</span>
                </div>
                <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SSL</span>
                </div>
              </div>
            </div>

            {/* Our Social Links */}
            <div>
              <h5 className="font-bold text-sm mb-4 text-white">
                Our Social Links:
              </h5>
              <div className="flex gap-2 flex-wrap">
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-400">
            © MMLY Fashion 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
