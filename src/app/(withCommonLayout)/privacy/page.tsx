export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-white p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-blue-600 mb-2 flex items-center">
                  🔒 Privacy & Policy
                  <span className="text-lg font-normal text-gray-600 ml-3">(গোপনীয়তা নীতিমালা)</span>
                </h1>
              </div>

              {/* Security Illustration */}
              <div className="hidden md:block ml-8">
                <div className="relative w-32 h-32">
                  {/* Laptop */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-18 bg-gray-800 rounded-t-lg">
                    <div className="w-24 h-14 bg-blue-400 rounded-t-lg mx-auto mt-1 relative">
                      {/* Shield Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-10 bg-green-500 rounded-t-full relative">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Security Elements */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-8 left-2 w-4 h-4 bg-green-400 rounded opacity-80"></div>
                  <div className="absolute top-4 left-1/2 w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>

                  {/* Lock Icons */}
                  <div className="absolute top-6 right-6 w-5 h-5 bg-orange-400 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-justify mb-4">
                  আমাদের ওয়েবসাইট ব্যবহারকারীদের গোপনীয়তা রক্ষা করা আমাদের অগ্রাধিকার। এই গোপনীয়তা নীতিমালায় বর্ণনা করা হয়েছে যে আমরা কীভাবে
                  আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি। আমাদের সেবা ব্যবহার করার মাধ্যমে আপনি এই নীতিমালায় সম্মত হচ্ছেন বলে
                  বিবেচিত হবে।
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">১. তথ্য সংগ্রহ এবং ব্যবহার</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ১.১ আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি যখন আপনি আমাদের ওয়েবসাইটে অ্যাকাউন্ট তৈরি করেন, অর্ডার করেন বা আমাদের সাথে
                    যোগাযোগ করেন। এই তথ্যের মধ্যে রয়েছে আপনার নাম, ইমেইল ঠিকানা, ফোন নম্বর, ঠিকানা এবং পেমেন্ট সংক্রান্ত তথ্য।
                  </p>
                  <p className="text-justify">
                    ১.২ আমরা এই তথ্য ব্যবহার করি আপনার অর্ডার প্রসেস করতে, পণ্য ডেলিভারি দিতে, গ্রাহক সেবা প্রদান করতে এবং আমাদের সেবার
                    মান উন্নত করতে।
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">২. কুকিজ এবং ট্র্যাকিং প্রযুক্তি</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ২.১ আমাদের ওয়েবসাইট কুকিজ এবং অনুরূপ ট্র্যাকিং প্রযুক্তি ব্যবহার করে আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে এবং ওয়েবসাইটের
                    কার্যকারিতা বিশ্লেষণ করতে।
                  </p>
                  <p className="text-justify">
                    ২.২ আপনি চাইলে আপনার ব্রাউজার সেটিংস থেকে কুকিজ নিষ্ক্রিয় করতে পারেন, তবে এতে ওয়েবসাইটের কিছু ফিচার সঠিকভাবে কাজ
                    নাও করতে পারে।
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">৩. তথ্য নিরাপত্তা</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৩.১ আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে উন্নত নিরাপত্তা ব্যবস্থা গ্রহণ করেছি। আমাদের সিস্টেম SSL এনক্রিপশন ব্যবহার
                    করে এবং নিয়মিত নিরাপত্তা আপডেট করা হয়।
                  </p>
                  <p className="text-justify">
                    ৩.২ আমাদের কর্মীরা এবং তৃতীয় পক্ষের সেবা প্রদানকারীরা গোপনীয়তা চুক্তিতে আবদ্ধ এবং শুধুমাত্র প্রয়োজনীয় কাজের জন্য আপনার তথ্য
                    অ্যাক্সেস করতে পারেন।
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">৪. তথ্য শেয়ারিং</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৪.১ আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রি, ভাড়া বা বিনিময় করি না। তবে নিম্নলিখিত ক্ষেত্রে তথ্য শেয়ার করতে
                    পারি:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>অর্ডার প্রসেসিং এবং ডেলিভারির জন্য</li>
                    <li>পেমেন্ট প্রসেসিং এর জন্য</li>
                    <li>আইনি বাধ্যবাধকতা পূরণের জন্য</li>
                    <li>জালিয়াতি প্রতিরোধ এবং নিরাপত্তার জন্য</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">৫. আপনার অধিকার</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">৫.১ আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>আপনার ব্যক্তিগত তথ্য অ্যাক্সেস করার অধিকার</li>
                    <li>ভুল তথ্য সংশোধন করার অধিকার</li>
                    <li>আপনার তথ্য মুছে ফেলার অধিকার</li>
                    <li>তথ্য প্রসেসিং সীমিত করার অধিকার</li>
                    <li>তথ্য পোর্টেবিলিটির অধিকার</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">৬. তথ্য সংরক্ষণ</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৬.১ আমরা আপনার ব্যক্তিগত তথ্য ততক্ষণ পর্যন্ত সংরক্ষণ করি যতক্ষণ পর্যন্ত এটি আমাদের সেবা প্রদানের জন্য প্রয়োজন বা আইনি
                    বাধ্যবাধকতা পূরণের জন্য প্রয়োজন।
                  </p>
                  <p className="text-justify">
                    ৬.২ আপনি যদি আপনার অ্যাকাউন্ট বন্ধ করতে চান, তাহলে আমাদের সাথে যোগাযোগ করুন এবং আমরা আপনার তথ্য নিরাপদে মুছে ফেলব।
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">৭. নীতিমালা পরিবর্তন</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৭.১ আমরা এই গোপনীয়তা নীতিমালা যেকোনো সময় পরিবর্তন করার অধিকার রাখি। কোনো পরিবর্তন হলে আমরা আমাদের ওয়েবসাইটে তা
                    প্রকাশ করব।
                  </p>
                  <p className="text-justify">৭.২ গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে আমরা ইমেইলের মাধ্যমে আপনাকে অবহিত করব।</p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">৮. যোগাযোগ</h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">৮.১ গোপনীয়তা সংক্রান্ত কোনো প্রশ্ন বা উদ্বেগ থাকলে আমাদের সাথে যোগাযোগ করুন:</p>
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-black mb-2">যোগাযোগের তথ্য:</p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <strong>ইমেইল:</strong> privacy@mslvfashion.com
                      </li>
                      <li>
                        <strong>ফোন:</strong> +8801798438494
                      </li>
                      <li>
                        <strong>ঠিকানা:</strong> MSLV Fashion Ltd., দোকান নম্বর ১০, গুলশান, ঢাকা-১০০০
                      </li>
                      <li>
                        <strong>কার্যসময়:</strong> সকাল ১০টা - সন্ধ্যা ৬টা (রবিবার ছুটি)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-600 text-center">
                  এই গোপনীয়তা নীতিমালা সর্বশেষ আপডেট করা হয়েছে: ডিসেম্বর ২০২৪
                </p>
                <p className="text-sm text-gray-600 text-center mt-2">© ২০২৪ MSLV Fashion Ltd. সকল অধিকার সংরক্ষিত।</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
