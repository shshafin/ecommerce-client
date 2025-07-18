export function AboutHero() {
  return (
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
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-t-full"></div>
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
  );
}
