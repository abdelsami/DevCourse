"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Lock, Loader2 } from "lucide-react";
import Link from "next/link";
import { createOrder } from "@/app/actions/checkout";
import { useRouter } from "next/navigation";

interface CheckoutPageProps {
  course: {
    id: string;
    title: string;
    description: string;
    price: number;
  };
}

export default function CheckoutPageClient({ course }: CheckoutPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedPayment, setSelectedPayment] = useState("stripe");
  //   console.log(course);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    notes: "",
    paymentMethod: "stripe",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Full name can only contain letters and spaces";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-$$$$]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Notes validation (optional but limit length)
    if (formData.notes.length > 500) {
      newErrors.notes = "Notes must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await createOrder({
        courseId: course.id,
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim().toLowerCase(),
        notes: formData.notes.trim(),
        paymentMethod: selectedPayment,
        amount: 99.99,
      });

      if (result.success) {
        // Show success message instead of redirecting
        alert(
          "Order submitted successfully! You will be redirected to complete payment."
        );
        // You can redirect to your external payment server here
        // window.location.href = `https://your-payment-server.com/checkout/${result.orderId}`
      } else {
        setErrors({
          submit: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setErrors({
        submit: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Confirm Your Order
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Order Summary */}
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-white">
                      PREMIUM
                    </span>
                  </div>

                  <h3 className="text-xl text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Premium Development Course
                  </p>

                  <Badge className="bg-yellow-400 text-black font-medium mb-8">
                    Most Popular
                  </Badge>

                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-bold text-white">
                        Total
                      </span>
                      <span className="text-3xl font-bold text-yellow-400">
                        ${course.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        <span>SSL Secured</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-green-400" />
                        <span>256-bit Encryption</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Customer Details */}
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Customer Details
                  </h3>

                  {errors.submit && (
                    <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6">
                      <p className="text-red-400 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="fullName"
                          className="text-white mb-2 block"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          placeholder="Enter your full name"
                          className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
                            errors.fullName ? "border-red-500" : ""
                          }`}
                          disabled={isLoading}
                        />
                        {errors.fullName && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-white mb-2 block"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+212 123 456 789"
                          className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                          disabled={isLoading}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="example@devcourses.com"
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-white mb-2 block">
                        Additional Notes (Optional)
                      </Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) =>
                          handleInputChange("notes", e.target.value)
                        }
                        placeholder="Any special requirements or notes..."
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px] ${
                          errors.notes ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      {errors.notes && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.notes}
                        </p>
                      )}
                      <p className="text-gray-500 text-xs mt-1">
                        {formData.notes.length}/500 characters
                      </p>
                    </div>

                    <div>
                      <Label className="text-white mb-4 block">
                        Choose your payment method
                      </Label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "card", label: "💳", name: "Credit Card" },
                          {
                            id: "payoneer",
                            label: "Payoneer",
                            name: "Payoneer",
                          },
                          { id: "wise", label: "Wise", name: "Wise" },
                          { id: "paypal", label: "Paypal", name: "PayPal" },
                          { id: "stripe", label: "Stripe", name: "Stripe" },
                          { id: "crypto", label: "💎", name: "Crypto" },
                        ].map((method) => (
                          <div
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={`bg-gray-700 border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                              selectedPayment === method.id
                                ? "border-yellow-400"
                                : "border-gray-600 hover:border-yellow-400"
                            } ${
                              isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                          >
                            <div
                              className={`font-bold ${
                                selectedPayment === method.id
                                  ? "text-yellow-400"
                                  : "text-white"
                              }`}
                            >
                              {method.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Button */}
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>🛒 Complete My Purchase</>
                  )}
                </Button>
                <p className="text-gray-400 text-sm text-center mt-4">
                  By proceeding, you agree to our{" "}
                  <span className="text-yellow-400 hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-yellow-400 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
