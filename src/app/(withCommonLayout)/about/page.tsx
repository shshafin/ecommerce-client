export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">আমাদের সম্পর্কে</h1>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  MSLV Fashion Ltd. <span className="text-lg font-normal text-gray-600">ফ্যাশনের নতুন সংজ্ঞা।</span>
                </h2>
              </div>
            </div>

            {/* Main Content with Illustration */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Text Content */}
              <div className="lg:col-span-2">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-justify">
                    আমরা বিশ্বাস করি, ফ্যাশন মানে শুধুমাত্র পোশাক পরিধানের নয় - এটি একটি সংস্কৃতির প্রকাশ, জীবনযাত্রার পরিচয়ের এবং কার্যকারিতার
                    প্রতিফলন। আমাদের এই বিশ্বাস থেকেই জন্ম নিয়েছে MSLV Fashion Ltd. - একটি আধুনিক, মানসম্পন্ন ও নিরাপদযোগ্য ফ্যাশন
                    ব্র্যান্ড।
                  </p>

                  <p className="text-justify">
                    আমাদের যাত্রা শুরু হয় প্রাকৃতিকতার সাধনায় মানুষের জন্য প্রাকৃতিক এবং মানসম্পন্ন পোশাক সরবরাহের স্বপ্ন নিয়ে। আমাদের প্রতি���ি পোশাক
                    তৈরি করা হয় আন্তর্জাতিক মানের ব্রেইন কনট্রোল থেকে দেশীয় নানাবিধ করে, কিন্তু মানের দিক থেকে দেশীয় নানাবিধ মানের,
                    বুনন, তুলন এবং বিশ্বমানের জন্য ৭৫ গ্রাম ওজনের কাপড় ব্যবহার করা হয়।
                  </p>

                  <p className="text-justify">
                    আমাদের ডিজাইনের দিম প্রতিটির নতুন নতুন কাঠামোশৈলী তৈরি করার পাশাপাশি গ্রাহক সুবিধা পূর্ণ সাইজ প্রদান করে প্রতিটি মানুষ
                    নিজের পছন্দের ফ্যাশন খুঁজে পায় কারণ আমাদের দক্ষ কারিগর, যারা প্রতিটি পোশাক তৈরি করেন।
                  </p>

                  <p className="text-justify">
                    আমাদের লক্ষ্য (Mission): দেশীয় বাজারে মানসম্পন্ন ও প্রাকৃতিক পোশাক সরবরাহের মাধ্যমে একটি আদর্শ ব্র্যান্ড নাম হয়ে ওঠা।
                  </p>

                  <p className="text-justify">
                    আমাদের দৃষ্টি (Vision): বাংলাদেশের জাতীয় পোশাক এবং বিশ্বমানের ফ্যাশন ব্র্যান্ড হিসেবে প্রতিষ্ঠিত হওয়া।
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="lg:col-span-1 flex justify-center items-start">
                <div className="relative w-full max-w-sm mx-auto">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-green-100 rounded-full opacity-20"></div>

                  {/* Main Illustration Container */}
                  <div className="relative p-8">
                    {/* Plant */}
                    <div className="absolute right-4 bottom-8">
                      <div className="w-16 h-20 relative">
                        {/* Pot */}
                        <div className="absolute bottom-0 w-12 h-8 bg-green-600 rounded-b-lg mx-auto left-1/2 transform -translate-x-1/2"></div>
                        {/* Plant Leaves */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-12 bg-green-500 rounded-full transform -rotate-12"></div>
                          <div className="w-6 h-10 bg-green-400 rounded-full absolute top-2 left-2 transform rotate-12"></div>
                          <div className="w-7 h-11 bg-green-600 rounded-full absolute top-1 left-1 transform rotate-45"></div>
                        </div>
                      </div>
                    </div>

                    {/* People */}
                    <div className="flex items-end justify-center space-x-4 relative z-10">
                      {/* Man */}
                      <div className="relative">
                        {/* Head */}
                        <div className="w-12 h-12 bg-green-200 rounded-full mb-2 mx-auto relative">
                          {/* Hair */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gray-800 rounded-t-full"></div>
                          {/* Face */}
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-200 rounded-full">
                            {/* Eyes */}
                            <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                            <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                        {/* Body */}
                        <div className="w-16 h-24 bg-green-500 rounded-t-full mx-auto relative">
                          {/* Arms */}
                          <div className="absolute top-4 -left-2 w-6 h-3 bg-green-400 rounded-full transform -rotate-12"></div>
                          <div className="absolute top-4 -right-2 w-6 h-3 bg-green-400 rounded-full transform rotate-12"></div>
                        </div>
                        {/* Legs */}
                        <div className="flex justify-center space-x-1 mt-1">
                          <div className="w-3 h-8 bg-gray-700 rounded-b-lg"></div>
                          <div className="w-3 h-8 bg-gray-700 rounded-b-lg"></div>
                        </div>
                      </div>

                      {/* Woman */}
                      <div className="relative">
                        {/* Head */}
                        <div className="w-12 h-12 bg-green-200 rounded-full mb-2 mx-auto relative">
                          {/* Hair */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gray-900 rounded-t-full"></div>
                          {/* Face */}
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-200 rounded-full">
                            {/* Eyes */}
                            <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                            <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                        {/* Body */}
                        <div className="w-16 h-24 bg-green-600 rounded-t-full mx-auto relative">
                          {/* Arms */}
                          <div className="absolute top-4 -left-2 w-6 h-3 bg-green-500 rounded-full transform -rotate-12"></div>
                          <div className="absolute top-4 -right-2 w-6 h-3 bg-green-500 rounded-full transform rotate-12"></div>
                        </div>
                        {/* Legs */}
                        <div className="flex justify-center space-x-1 mt-1">
                          <div className="w-3 h-8 bg-gray-700 rounded-b-lg"></div>
                          <div className="w-3 h-8 bg-gray-700 rounded-b-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-900">আমাদের মূলনীতি(Core Values):</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">গুণগত মানের প্রতি প্রতিশ্রুতিবদ্ধ</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">গ্রাহকসেবায় ডেডিকেটেড ও উৎসর্গীকৃত</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">প্রাকৃতিক সম্পদের সর্বোচ্চ ব্যবহার</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">সৎ ও সহজ ব্যবসায়িক নীতি</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
