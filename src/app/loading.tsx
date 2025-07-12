import { Loader2 } from "lucide-react";
const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
    </div>
  );
};

export default LoadingPage;
