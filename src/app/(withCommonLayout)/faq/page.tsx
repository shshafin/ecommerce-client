import Image from 'next/image';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Section with Illustration */}
          <div className="bg-white p-8 text-center">
              <Image
                src="/shirt1.jpg"
                alt="FAQ Illustration"
                width={400}
                height={300}
                className="w-full max-w-md mx-auto h-auto"
                priority
              />

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">❓ FAQ - Frequently Asked Questions গোয়েন্দা জিজ্ঞাসা</h1>
          </div>

          {/* FAQ Content */}
          <div className="p-8 pt-0">
            <div className="space-y-8">
              {/* Question 1 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">প্রশ্ন ১: অর্ডার করতে কেমন করবো?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  উত্তর: আমাদের ওয়েবসাইটে গিয়ে আপনার পছন্দের পণ্য &#39;Add to Cart&#39; এবং Checkout অপশনে গিয়ে অর্ডার দিন, ডেলিভারি ও
                  পেমেন্ট নিয়ে আর কোন চিন্তা করতে হবেনা।
                </p>
              </div>

              {/* Question 2 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">প্রশ্ন ২: পণ্য কতদিন পেতে পারবো সময় লাগবে?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  উত্তর: ঢাকার ভিতরে ২৪-৪৮ ঘন্টা এবং ঢাকার বাইরে ৩-৫ কর্মদিবসের মধ্যে (ছুটির দিন ব্যতীত) সময় লাগে।
                </p>
              </div>

              {/* Question 3 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">প্রশ্ন ৩: অর্ডার দিয়ে কোন ধরনা পেতে পারবো না?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  উত্তর: হ্যাঁ, আমাদের সাথে যোগাযোগ করে কোন পণ্য (COD) এর মাধ্যমে নিতে পারেন, কুরিয়ারের চার্জ অগ্রিম পেমেন্ট করতে হবে।
                </p>
              </div>

              {/* Question 4 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">প্রশ্ন ৪: পণ্যের সাইজ বা নিয়ান কী করবো?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  উত্তর: আমাদের সাথে যোগাযোগ করে সঠিক সাইজ নিয়ে নিশ্চিত করতে পারবেন। নিশ্চিত ও নিরাপদ নেটিভিটি অনুযায়ী সঠিক সাইজ
                  করবেন আমরা সাহায্য করবো।
                </p>
              </div>

              {/* Question 5 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">প্রশ্ন ৫: পেমেন্ট কিভাবে করতে পারবো?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  উত্তর: হ্যাঁ, একাধিক পেমেন্ট সিস্টেম আমাদের রয়েছে তবে বিকাশের একাউন্টের সবচেয়ে সহজ, শুধু সাবধানে।
                </p>
              </div>

              {/* Question 6 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">প্রশ্ন ৬: কাস্টমার রিভিউ নেয়ার জন্য কিছু?</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  উত্তর: অবশ্যই আমাদের পণ্যের কাস্টমার রিভিউ গ্রহণ করা হয় তবে নিরপেক্ষ জানার জন্য আমাদের কাস্টমার সার্ভিস (হোয়াটসঅ্যাপ) করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
