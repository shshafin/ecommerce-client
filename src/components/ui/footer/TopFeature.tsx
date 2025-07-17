// components/footer/TopFeatures.tsx
import Image from "next/image";

export default function TopFeatures() {
  return (
    <div className="border-b border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              icon: "/footer-1.svg",
              title: "দেশব্যাপী ডেলিভারি",
              desc: "আমরা আমাদের ওয়েবসাইটের পণ্য দ্রুততার সাথে সারা দেশে ডেলিভারি করে থাকি।",
              iconSize: "h-20 w-20",
            },
            {
              icon: "/footer-2.svg",
              title: "নিরাপদ মূল্যপরিশোধ",
              desc: "আমাদের পেমেন্ট করুন, দেশের সবচেয়ে জনপ্রিয় ও নিরাপদ পেমেন্ট পদ্ধতিতে।",
              iconSize: "h-14 w-14",
            },
            {
              icon: "/footer-3.svg",
              title: "কাস্টমার সাপোর্ট",
              desc: "সহজ কেনাকাটার অভিজ্ঞতার জন্য আমাদের আছে, ২৪/৭ ঘন্টা সার্বক্ষণিক কাস্টমার সেবা।",
              iconSize: "h-14 w-14",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-6 ${
                i !== 2 ? "md:border-r" : ""
              } border-gray-200`}>
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className={`object-contain ${item.iconSize}`}
              />
              <div>
                <h3 className="font-bold font-[AlinurBanglaborno] tracking-wider text-lg mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-bold font-[AlinurBanglaborno] tracking-wider text-gray-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
