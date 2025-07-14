import Link from "next/link";
import SocialIcons from "./social-icons";
import TopFeatures from "./TopFeature";
import Copyright from "./Copyright";

export function Footer() {
  return (
    <footer className="bg-[#555555] text-white">
      {/* Top Section with 3 feature boxes with borders */}
      <TopFeatures />

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
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Our Coverage
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
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
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  How to Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Buying Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Security Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
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
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
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
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Business With Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Find Wholesaler
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  Bring Your Idea
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
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
              <Link
                href="#"
                className="block">
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
              <Link
                href="#"
                className="block">
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
      <div className="border-t border-gray-400">
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
