export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-white p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">
                  Terms and Conditions
                </h1>
                <p className="text-sm text-gray-600">
                  আমাদের ওয়েবসাইট ব্যবহারের শর্তাবলী ও নিয়মকানুন
                </p>
              </div>

              {/* Illustration */}
              <div className="hidden md:block ml-8">
                <div className="relative w-32 h-32">
                  {/* Computer/Laptop */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-t-lg">
                    <div className="w-20 h-12 bg-blue-400 rounded-t-lg mx-auto mt-1"></div>
                  </div>

                  {/* Person */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-20">
                    {/* Head */}
                    <div className="w-8 h-8 bg-blue-300 rounded-full mx-auto mb-1"></div>
                    {/* Body */}
                    <div className="w-12 h-12 bg-blue-500 rounded-t-full mx-auto"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
                  <div className="absolute top-8 left-2 w-4 h-4 bg-yellow-400 rounded opacity-80"></div>
                  <div className="absolute top-4 left-1/2 w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
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
                  **MSLV Fashion Ltd.** এর ওয়েবসাইট ব্যবহারের পূর্বে অনুগ্রহ
                  করে নিম্নলিখিত শর্তাবলী সম্পূর্ণভাবে পড়ুন এবং বুঝুন। আমাদের
                  ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীতে সম্মত হচ্ছেন
                  বলে বিবেচিত হবে।
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ১. সাধারণ শর্তাবলী
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ১.১ আমাদের ওয়েবসাইট ব্যবহার করে আপনি স্বীকার করছেন যে আপনি
                    এই শর্তাবলী মেনে চলবেন।
                  </p>
                  <p className="text-justify">
                    ১.২ এই শর্তাবলী যেকোনো সময় পরিবর্তন করার অধিকার আমাদের
                    রয়েছে। পরিবর্তিত শর্তাবলী ওয়েবসাইটে প্রকাশের সাথে সাথেই
                    কার্যকর হবে।
                  </p>
                  <p className="text-justify">
                    ১.৩ আপনি যদি এই শর্তাবলীর সাথে একমত না হন, তাহলে অনুগ্রহ করে
                    আমাদের ওয়েবসাইট ব্যবহার করবেন না।
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ২. পণ্য ও সেবা সংক্রান্ত শর্তাবলী
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ২.১ আমাদের ওয়েবসাইটে প্রদর্শিত সকল পণ্যের দাম, বিবরণ এবং
                    ছবি সঠিক রাখার চেষ্টা করা হয়। তবে কোনো ভুল থাকলে তা
                    সংশোধনের অধিকার আমাদের রয়েছে।
                  </p>
                  <p className="text-justify">
                    ২.২ পণ্যের স্টক শেষ হয়ে গেলে বা অন্য কোনো কারণে সরবরাহ করতে
                    না পারলে আমরা আপনাকে অবহিত করব।
                  </p>
                  <p className="text-justify">
                    ২.৩ পণ্যের রং, সাইজ বা অন্যান্য বৈশিষ্ট্য মনিটর বা ডিভাইসের
                    কারণে ভিন্ন দেখাতে পারে।
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ৩. অর্ডার ও পেমেন্ট
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৩.১ অর্ডার করার সময় সঠিক তথ্য প্রদান করা আপনার দায়িত্ব।
                  </p>
                  <p className="text-justify">
                    ৩.২ অর্ডার কনফার্ম করার পর আমাদের প্রতিনিধি আপনার সাথে
                    যোগাযোগ করবেন।
                  </p>
                  <p className="text-justify">
                    ৩.৩ পেমেন্ট সংক্রান্ত সকল তথ্য নিরাপদ রাখা হয় এবং তৃতীয়
                    পক্ষের সাথে শেয়ার করা হয় না।
                  </p>
                  <p className="text-justify">
                    ৩.৪ ক্যাশ অন ডেলিভারি, বিকাশ, নগদ, রকেট এবং ব্যাংক
                    ট্রান্সফারের মাধ্যমে পেমেন্ট করতে পারবেন।
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ৪. ডেলিভারি ও শিপিং
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৪.১ ঢাকার ভিতরে ১-২ কর্মদিবস এবং ঢাকার বাইরে ২-৩ কর্মদিবসের
                    মধ্যে ডেলিভারি দেওয়া হয়।
                  </p>
                  <p className="text-justify">
                    ৪.২ ডেলিভারি চার্জ পণ্যের ওজন এবং গন্তব্যের উপর নির্ভর করে।
                  </p>
                  <p className="text-justify">
                    ৪.৩ প্রাকৃতিক দুর্যোগ বা অন্য কোনো অপ্রত্যাশিত কারণে
                    ডেলিভারি বিলম্ব হতে পারে।
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ৫. রিটার্ন ও রিফান্ড পলিসি
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৫.১ পণ্য রিসিভ করার ৭ দিনের মধ্যে রিটার্ন করতে পারবেন।
                  </p>
                  <p className="text-justify">
                    ৫.২ রিটার্ন করার জন্য পণ্যটি অব্যবহৃত এবং মূল প্যাকেজিং সহ
                    থাকতে হবে।
                  </p>
                  <p className="text-justify">
                    ৫.৩ ব্যক্তিগত ব্যবহারের পণ্য (যেমন: আন্ডারগার্মেন্টস)
                    রিটার্ন করা যাবে না।
                  </p>
                  <p className="text-justify">
                    ৫.৪ রিফান্ড প্রক্রিয়া সম্পন্ন হতে ৭-১০ কর্মদিবস সময় লাগতে
                    পারে।
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ৬. গোপনীয়তা নীতি
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৬.১ আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখা আমাদের অগ্রাধিকার।
                  </p>
                  <p className="text-justify">
                    ৬.২ আপনার অনুমতি ছাড়া তৃতীয় পক্ষের সাথে কোনো তথ্য শেয়ার
                    করা হয় না।
                  </p>
                  <p className="text-justify">
                    ৬.৩ অর্ডার প্রসেসিং এবং ডেলিভারির জন্য প্রয়োজনীয় তথ্য
                    ব্যবহার করা হয়।
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ৭. দায়বদ্ধতার সীমাবদ্ধতা
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৭.১ আমাদের ওয়েবসাইট ব্যবহারে কোনো ক্ষতি হলে তার জন্য আমরা
                    দায়ী নই।
                  </p>
                  <p className="text-justify">
                    ৭.২ তৃতীয় পক্ষের সেবা ব্যবহারে কোনো সমস্যা হলে সরাসরি তাদের
                    সাথে যোগাযোগ করুন।
                  </p>
                  <p className="text-justify">
                    ৭.৩ ওয়েবসাইটের কোনো তথ্য ভুল হলে তা সংশোধনের অধিকার আমাদের
                    রয়েছে।
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  ৮. যোগাযোগ
                </h3>
                <div className="space-y-3 pl-4">
                  <p className="text-justify">
                    ৮.১ কোনো প্রশ্ন বা সমস্যার জন্য আমাদের সাথে যোগাযোগ করুন।
                  </p>
                  <p className="text-justify">
                    ৮.২ ইমেইল: support@mslvfashion.com
                  </p>
                  <p className="text-justify">৮.৩ ফোন: +8801798438494</p>
                  <p className="text-justify">
                    ৮.৪ ঠিকানা: MSLV Fashion Ltd., দোকান নম্বর ১০, গুলশান,
                    ঢাকা-১০০০, বাংলাদেশ
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-600 text-center">
                  এই শর্তাবলী সর্বশেষ আপডেট করা হয়েছে: ডিসেম্বর ২০২৪
                </p>
                <p className="text-sm text-gray-600 text-center mt-2">
                  © ২০২৪ MSLV Fashion Ltd. সকল অধিকার সংরক্ষিত।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
