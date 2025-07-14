// components/footer/TopFeatures.tsx
import Image from "next/image";

export default function TopFeatures() {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              icon: "/footer-1.svg",
              title: "বিনামূল্যে ডেলিভারি",
              desc: "ঢাকার ভিতরে ৫০০ টাকার উপরে অর্ডারে বিনামূল্যে ডেলিভারি পাবেন এবং ঢাকার বাইরে ১০০০ টাকার উপরে।",
              iconSize: "h-20 w-20",
            },
            {
              icon: "/footer-2.svg",
              title: "মানসম্মত পণ্যের নিশ্চয়তা",
              desc: "আমাদের সকল পণ্য আন্তর্জাতিক মানের এবং আমরা গুণগত মান বজায় রাখতে প্রতিশ্রুতিবদ্ধ।",
              iconSize: "h-14 w-14",
            },
            {
              icon: "/footer-3.svg",
              title: "কাস্টমার সার্ভিস",
              desc: "আমাদের গ্রাহক সেবা টিম সর্বদা আপনার সেবায় নিয়োজিত এবং যেকোনো সমস্যার সমাধান দিতে প্রস্তুত।",
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
                <h3 className="font-bold text-lg mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
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
