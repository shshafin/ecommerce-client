"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { CustomCheckbox } from "@/components/ui/check-box";

export default function CheckoutPage() {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      size: "S",
      color: "Green",
      price: 449,
      quantity: 2,
      image: "/shirt1.jpg",
    },
    {
      id: 2,
      name: "T-Shirt",
      size: "M",
      color: "Blue",
      price: 449,
      quantity: 3,
      image: "/shirt2.jpg",
    },
    {
      id: 3,
      name: "T-Shirt",
      size: "L",
      color: "Dark Olive Green",
      price: 449,
      quantity: 5,
      image: "/shirt1.jpg",
    },
  ]);

  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    mobile: "",
    email: "",
    district: "",
    thana: "",
    area: "",
    address: "",
    notes: "",
  });

  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash-on-delivery");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setOrderItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setOrderItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal; // No additional fees in this example

  const handleInputChange = (field: string, value: string) => {
    setBillingDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black">Checkout</h1>
          <div className="w-full h-0.5 bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-black mb-6">
              Billing Details
            </h2>

            <div className="space-y-6">
              {/* Full Name and Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="eg. John Doe"
                    value={billingDetails.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="h-12 border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="mobile"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Mobile
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="eg. 01XXXXXXXXX"
                    value={billingDetails.mobile}
                    onChange={(e) =>
                      handleInputChange("mobile", e.target.value)
                    }
                    className="h-12 border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="eg. john@example.com"
                  value={billingDetails.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 border-gray-200 rounded-lg"
                />
              </div>

              {/* District and Thana */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="district"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    District
                  </Label>
                  <Input
                    id="district"
                    type="text"
                    placeholder="eg. Dhaka"
                    value={billingDetails.district}
                    onChange={(e) =>
                      handleInputChange("district", e.target.value)
                    }
                    className="h-12 border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="thana"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Thana
                  </Label>
                  <Input
                    id="thana"
                    type="text"
                    placeholder="eg. Dhanmondi"
                    value={billingDetails.thana}
                    onChange={(e) => handleInputChange("thana", e.target.value)}
                    className="h-12 border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              {/* Area */}
              <div>
                <Label
                  htmlFor="area"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Area
                </Label>
                <Input
                  id="area"
                  type="text"
                  placeholder="eg. Road 27, House 123"
                  value={billingDetails.area}
                  onChange={(e) => handleInputChange("area", e.target.value)}
                  className="h-12 border-gray-200 rounded-lg"
                />
              </div>

              {/* Address */}
              <div>
                <Label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Full address"
                  value={billingDetails.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="h-12 border-gray-200 rounded-lg"
                />
              </div>

              {/* Notes */}
              <div>
                <Label
                  htmlFor="notes"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Order notes (optional)"
                  value={billingDetails.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="min-h-[100px] border-gray-200 rounded-lg resize-none"
                />
              </div>
            </div>
          </div>

          {/* Your Order */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-black mb-6">
              Your Order
            </h2>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-black text-sm">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600">Size: {item.size}</p>
                    <p className="text-xs text-gray-600">Color: {item.color}</p>
                    <p className="font-bold text-black text-sm">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-black">${subtotal}</span>
              </div>

              {/* Coupon */}
              <div>
                <Label
                  htmlFor="coupon"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Coupon
                </Label>
                <Input
                  id="coupon"
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="h-10 border-gray-200 rounded-lg"
                />
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-black">Total</span>
                  <span className="text-black">${total}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                Payment Methods
              </Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="mb-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="cash-on-delivery"
                    id="cash-on-delivery"
                  />
                  <Label
                    htmlFor="cash-on-delivery"
                    className="text-sm text-gray-700"
                  >
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>

              {/* Payment Icons */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">bKash</span>
                </div>
                <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">rocket</span>
                </div>
                <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">card</span>
                </div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PayPal</span>
                </div>
                <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3 mb-6">
              <CustomCheckbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={setAgreeToTerms}
                className="mt-0.5"
              />
              <Label
                htmlFor="terms"
                className="text-xs text-gray-600 leading-relaxed"
              >
                I agree to Terms & Conditions, Refund Policy and Privacy Policy
                of MSLV.
              </Label>
            </div>

            {/* Confirm Button */}
            <Button
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 text-base rounded-xl"
              disabled={!agreeToTerms}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
