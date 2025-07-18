import { Mail, Phone, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-6xl bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Top Left: Illustration 1 */}
          <div className="bg-white p-8 flex items-center justify-center min-h-[300px]">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main figure */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-300 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400 rounded-full opacity-50"></div>

              {/* Person with headset */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-40 h-40">
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-500 rounded-full"></div>
                  {/* Body */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-28 h-28 bg-blue-800 rounded-t-full"></div>
                  {/* Arms */}
                  <div className="absolute top-20 left-0 w-10 h-4 bg-blue-700 rounded-full transform -rotate-12"></div>
                  <div className="absolute top-20 right-0 w-10 h-4 bg-blue-700 rounded-full transform rotate-12"></div>
                  {/* Headset */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-700 rounded-full transform rotate-12"></div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-blue-300 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Top Right: Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-700" /> Contact Us
            </h2>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="First Name" className="h-12" />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Mobile Number"
                  className="h-12"
                />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="h-12" />
              </div>
              <div>
                <Textarea placeholder="Message" className="min-h-[120px]" />
              </div>
              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded"
              >
                SUBMIT
              </Button>
            </form>
          </div>

          {/* Bottom Left: Contact Info */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Us (যোগাযোগ করুন):
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                আপনার যেকোনো প্রশ্ন, মতামত, অভিযোগ বা সহায়তার প্রয়োজন হলে
                আমাদের সাথে যোগাযোগ করুন।
              </p>
              <p>
                <span className="font-semibold">ঠিকানা:</span>
                <br />
                MSLV Fashion Ltd.
                <br />
                দোকান নম্বর 10, গুলশান, ঢাকা-1000, বাংলাদেশ
              </p>
              <p>
                <span className="font-semibold">মোবাইল নম্বর:</span>{" "}
                +8801798438494
              </p>
              <p>
                <span className="font-semibold">ইমেইল ঠিকানা:</span>{" "}
                support@mslvfashion.com
              </p>
              <p>
                <span className="font-semibold">ওয়েবসাইট:</span>{" "}
                www.mslvfashion.com
              </p>
              <p>
                <span className="font-semibold">সামাজিক মিডিয়া:</span>{" "}
                Facebook, YouTube, Tiktok, LinkedIn, Instagram
              </p>
              <p>
                <span className="font-semibold">গ্রাহক সেবা সময়:</span>{" "}
                প্রতিদিন সকাল ১০টা থেকে রাত ৬টা পর্যন্ত
              </p>
            </div>
          </div>

          {/* Bottom Right: Illustration 2 */}
          <div className="bg-white  p-8 flex items-center justify-center min-h-[300px]">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background elements */}
              <div className="absolute inset-0 bg-purple-100 rounded-full opacity-30"></div>
              <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-green-200 rounded-full"></div>

              {/* Person at desk */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-48">
                {/* Desk */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-yellow-600 rounded-t-lg"></div>
                <div className="absolute bottom-0 left-8 w-4 h-20 bg-yellow-700 rounded-b-lg"></div>
                <div className="absolute bottom-0 right-8 w-4 h-20 bg-yellow-700 rounded-b-lg"></div>

                {/* Laptop */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-t-lg"></div>
                <div className="absolute top-18 left-1/2 -translate-x-1/2 w-20 h-10 bg-gray-700 rounded-b-lg"></div>

                {/* Person */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 h-32">
                  {/* Head */}
                  <div className="w-12 h-12 bg-purple-300 rounded-full mx-auto mb-2"></div>
                  {/* Body */}
                  <div className="w-20 h-20 bg-purple-600 rounded-t-full mx-auto"></div>
                  {/* Legs */}
                  <div className="flex justify-center space-x-2 mt-1">
                    <div className="w-4 h-10 bg-blue-600 rounded-b-lg"></div>
                    <div className="w-4 h-10 bg-blue-600 rounded-b-lg"></div>
                  </div>
                </div>

                {/* Speech bubble */}
                <div className="absolute top-8 right-12 w-20 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
