// pages/business.tsx
import Image from 'next/image';

const BusinessPage = () => {
  return (
    <div className="space-y-12 py-16 container mx-auto px-4">
      {/* Section 1 */}
      <div className="flex items-center space-x-6">
        <div className="w-1/4">
          <Image
            src="/illustration1.png"
            alt="Illustration 1"
            width={300} // Adjust the width and height as necessary
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className="w-3/4">
          <div className="border rounded-lg p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold text-gray-800">Business With Us</h2>
            <div className="mt-4 text-gray-600">
              <ul className="space-y-2">
                <li>- Collaborate with industry leaders</li>
                <li>- Share innovative ideas to boost growth</li>
                <li>- Access to exclusive resources</li>
                <li>- Support for new ventures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex items-center space-x-6">
        <div className="w-1/4">
          <Image
            src="/illustration2.png"
            alt="Illustration 2"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className="w-3/4">
          <div className="border rounded-lg p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold text-gray-800">Our Approach</h2>
            <div className="mt-4 text-gray-600">
              <ul className="space-y-2">
                <li>- Focus on partnership and mutual benefit</li>
                <li>- Clear communication and transparent processes</li>
                <li>- Emphasis on sustainability and impact</li>
                <li>- Long-term growth and value creation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex items-center space-x-6">
        <div className="w-1/4">
          <Image
            src="/illustration3.png"
            alt="Illustration 3"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className="w-3/4">
          <div className="border rounded-lg p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
            <div className="mt-4 text-gray-600">
              <ul className="space-y-2">
                <li>- Over 10 years of experience in the industry</li>
                <li>- Dedicated team with expert knowledge</li>
                <li>- Proven track record of success</li>
                <li>- Cutting-edge technology and solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
