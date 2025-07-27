export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Section - Exact match */}
          <div className="bg-white p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">
                  🔄 Refund & Return Policy{" "}
                  <span className="text-lg font-normal text-gray-600">(রিফান্ড ও রিটার্ন নীতিমালা)</span>
                </h1>
              </div>

              {/* Exact illustration from your image */}
              <div className="hidden md:block ml-8">
                <div className="relative w-40 h-32">
                  {/* Large red/orange gift box on the right */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500 rounded-lg">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-16 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full opacity-80"></div>
                  </div>

                  {/* Person 1 with shopping bag (left) */}
                  <div className="absolute bottom-0 left-4 w-12 h-24">
                    {/* Head */}
                    <div className="w-8 h-8 bg-blue-300 rounded-full mx-auto mb-1"></div>
                    {/* Body */}
                    <div className="w-10 h-12 bg-blue-500 rounded-t-full mx-auto mb-1"></div>
                    {/* Shopping bag */}
                    <div className="w-6 h-5 bg-green-500 rounded-sm mx-auto"></div>
                  </div>

                  {/* Person 2 with package (center-left) */}
                  <div className="absolute bottom-0 left-16 w-12 h-24">
                    {/* Head */}
                    <div className="w-8 h-8 bg-pink-300 rounded-full mx-auto mb-1"></div>
                    {/* Body */}
                    <div className="w-10 h-12 bg-pink-500 rounded-t-full mx-auto mb-1"></div>
                    {/* Package */}
                    <div className="w-7 h-4 bg-orange-500 rounded-sm mx-auto"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-2 left-2 w-5 h-5 bg-blue-400 rounded-full opacity-80"></div>
                  <div className="absolute top-6 left-8 w-4 h-4 bg-green-400 rounded opacity-80"></div>
                  <div className="absolute top-4 right-8 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>

                  {/* Return arrow curved */}
                  <div className="absolute top-8 left-12 w-12 h-2 bg-blue-500 rounded-full transform rotate-45 opacity-70"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Exact Bengali text structure */}
          <div className="p-8">
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              {/* Main content paragraph */}
              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  আমাদের কোম্পানির রিটার্ন ও রিফান্ড নীতি অত্যন্ত গ্রাহকবান্ধব। আপনি যদি আমাদের পণ্যে সন্তুষ্ট না হন, তাহলে পণ্য রিসিভ করার ৭
                  দিনের মধ্যে রিটার্ন করতে পারবেন। রিটার্নের জন্য পণ্যটি অবশ্যই অব্যবহৃত এবং মূল প্যাকেজিং সহ থাকতে হবে। আমরা আপনার সম্পূর্ণ
                  অর্থ ফেরত দিয়ে দেব।
                </p>
              </div>

              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  রিটার্নের ক্ষেত্রে আমাদের কিছু শর্ত রয়েছে। পণ্যটি অবশ্যই নতুন অবস্থায় থাকতে হবে, কোনো ক্ষতি বা দাগ থাকা যাবে না। পণ্যের সাথে
                  সকল ট্যাগ এবং লেবেল থাকতে হবে। ব্যক্তিগত স্বাস্থ্যবিধি সংক্রান্ত পণ্য (যেমন: আন্ডারগার্মেন্টস) রিটার্ন করা যাবে না। কাস্টমাইজড
                  পণ্যও রিটার্নযোগ্য নয়।
                </p>
              </div>

              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  রিফান্ড প্রক্রিয়া সম্পন্ন হতে ৭-১০ কর্মদিবস সময় লাগতে পারে। আপনার মূল পেমেন্ট মেথডেই অর্থ ফেরত দেওয়া হবে। ক্যাশ অন
                  ডেলিভারির ক্ষেত্রে বিকাশ, নগদ বা রকেটের মাধ্যমে রিফান্ড করা হবে। ডেলিভারি চার্জ সাধারণত রিফান্ডযোগ্য নয়, তবে পণ্যে ত্রুটি
                  থাকলে সম্পূর্ণ অর্থ ফেরত দেওয়া হবে।
                </p>
              </div>

              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  রিটার্ন করতে চাইলে প্রথমে আমাদের কাস্টমার সার্ভিসে যোগাযোগ করুন। আপনার অর্ডার নম্বর এবং রিটার্নের কারণ জানান। প্রয়োজনে পণ্যের
                  ছবি পাঠান। আমাদের টিম আপনার রিকোয়েস্ট রিভিউ করে অনুমোদন দেবে। অনুমোদনের পর আমাদের ডেলিভারি টিম আপনার কাছ থেকে পণ্য
                  সংগ্রহ করবে।
                </p>
              </div>

              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  সাইজ বা রঙের সমস্যার জন্য আপনি পণ্য এক্সচেঞ্জ করতে পারেন। এক্সচেঞ্জের জন্যও একই শর্তাবলী প্রযোজ্য। তবে এক্সচেঞ্জের
                  ক্ষেত্রে অতিরিক্ত ডেলিভারি চার্জ লাগতে পারে। যদি আপনার পছন্দের সাইজ বা রঙ স্টকে না থাকে, তাহলে রিফান্ড দেওয়া হবে।
                </p>
              </div>

              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  যদি আপনি ত্রুটিপূর্ণ বা ভুল পণ্য পান, তাহলে অবিলম্বে আমাদের সাথে যোগাযোগ করুন। এক্ষেত্রে আমরা সম্পূর্ণ রিফান্ড বা বিনামূল্যে
                  রিপ্লেসমেন্ট দেব। ত্রুটিপূর্ণ পণ্যের জন্য কোনো রিটার্ন চার্জ প্রযোজ্য হবে না। আমাদের কোয়ালিটি কন্ট্রোল টিম প্রতিটি পণ্য যাচাই
                  করে থাকে।
                </p>
              </div>

              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  গ্রাহকের ব্যক্তিগত পছন্দ না হওয়ার কারণে রিটার্নের ক্ষেত্রে রিটার্ন চার্জ প্রযোজ্য। ঢাকার ভিতরে ৬০ টাকা এবং ঢাকার বাইরে ১২০ টাকা
                  রিটার্ন চার্জ কাটা হবে। তবে পণ্যে ত্রুটি বা ভুল ডেলিভারির ক্ষেত্রে কোনো চার্জ প্রযোজ্য হবে না। আমরা সর্বদা গ্রাহক সন্তুষ্টিকে
                  প্রাধান্য দিয়ে থাকি।
                </p>
              </div>

              {/* Contact section */}
              <div className="mb-8">
                <p className="text-justify text-base leading-7">
                  রিফান্ড বা রিটার্ন সংক্রান্ত যেকোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন। আমাদের কাস্টমার সার্ভিস টিম সর্বদা আপনার সেবায়
                  নিয়োজিত। ইমেইল: returns@mslvfashion.com, ফোন: +8801798438494। আমাদের অফিস ঠিকানা: MSLV Fashion Ltd., দোকান
                  নম্বর ১০, গুলশান, ঢাকা-১০০০।
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-600 text-center">
                  এই রিফান্ড ও রিটার্ন নীতিমালা সর্বশেষ আপডেট করা হয়েছে: ডিসেম্বর ২০২৪
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
