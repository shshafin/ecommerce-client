import { Truck, DollarSign, Headphones, Shield } from "lucide-react";

export default function ServiceFeatures() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-teal-600" />,
      title: "FREE SHIPPING & RETURN",
      subtitle: "Free Shipping Over",
      detail: "Order 3500 Tk",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-teal-600" />,
      title: "MONEY BACK GUARANTEE",
      subtitle: "100% money back",
      detail: "Guarantee",
    },
    {
      icon: <Headphones className="w-8 h-8 text-teal-600" />,
      title: "ONLINE SUPPORT 24/7",
      subtitle: "If you any problem then ",
      detail: "contact us",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "SECURE PAYMENT",
      subtitle: "100% Secure Payment",
      detail: "Process",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 border-0 sm:border-r lg:last:border-r-0">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-xs leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-400 leading-tight">
                {feature.subtitle}
              </p>
              <p className="text-xs text-gray-400 leading-tight">
                {feature.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
