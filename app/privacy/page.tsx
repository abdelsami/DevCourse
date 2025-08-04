import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Shield,
  Lock,
  Database,
  CreditCard,
  User,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const policySections = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Data Collection",
      description: "What information we collect and why",
      color: "bg-blue-500",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Data Protection",
      description: "How we keep your information secure",
      color: "bg-green-500",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Payment Processing",
      description: "How Stripe handles your payment data",
      color: "bg-purple-500",
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "Your Rights",
      description: "Control over your personal information",
      color: "bg-indigo-500",
    },
  ];

  const quickLinks = [
    "Information We Collect",
    "How We Use Your Data",
    "Cookies & Tracking",
    "Third-Party Services",
    "Data Retention",
    "Children's Privacy",
    "Policy Updates",
    "Contact Us",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DevCourses</h1>
                <p className="text-xs text-gray-500">Learn. Build. Succeed.</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600 mb-4">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Privacy & Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy
            <span className="block text-yellow-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Policy Overview */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Our Commitment to Your Privacy
              </CardTitle>
              <CardDescription>
                DevCourses is committed to protecting your personal information
                and being transparent about what data we collect and how we use
                it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {policySections.map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div
                      className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center text-white mb-4`}
                    >
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Policy Content */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-600" />
                  1. Introduction
                </h2>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy describes how DevCourses ("we", "us", or
                  "our") collects, uses, and discloses your personal information
                  when you use our IT courses platform ("Service") and through
                  the use of Stripe for payment processing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect several types of information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Account Information:</strong> When you register on our site, 
                    we collect information such as your name, email address, 
                    and login credentials.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Payments are securely processed through Stripe.
                     We do not store your full payment card details. However, 
                     we may collect your billing address and transaction history for order tracking and support.
                  </li>
                  <li>
                    <strong>Course Activity:</strong> We monitor your engagement with the platform, 
                    including course progress, completed lessons, and interaction with learning materials.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> We collect technical information such as your IP address, 
                    browser type, device data, 
                    and usage patterns via cookies and similar technologies to enhance your experience and ensure platform security.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the collected information to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Provide, maintain, and improve our Service</li>
                      <li>Process transactions and send payment receipts</li>
                      <li>Personalize your learning experience</li>
                      <li>
                        Communicate with you about courses, updates, and offers
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Detect and prevent fraud and security issues</li>
                      <li>Analyze usage patterns to improve our services</li>
                      <li>Comply with legal obligations</li>
                      <li>Respond to your inquiries and support requests</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  4. Stripe Payment Processing
                </h2>
                <p className="text-gray-700 mb-4">
                  For payment processing, we use Stripe, a third-party payment
                  processor. When you make payments through our Service:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    Your payment card details are processed directly by Stripe
                    and are not stored on our servers
                  </li>
                  <li>
                    Stripe collects and processes your payment information in
                    accordance with their Privacy Policy
                  </li>
                  <li>
                    We receive information about the transaction (amount, date,
                    etc.) but not your full payment details
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                >
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Stripe's Privacy Policy
                  </a>
                </Button>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Technical Measures
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        Encryption of sensitive data in transit and at rest
                      </li>
                      <li>Regular security audits and vulnerability testing</li>
                      <li>Secure authentication protocols</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Organizational Measures
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        Limited access to personal data on a need-to-know basis
                      </li>
                      <li>Employee training on data protection</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  However, no method of transmission over the Internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or your
                  personal data, please contact our Data Protection Officer:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-yellow-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">privacy@devcourses.com</p>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>
                Navigate to specific sections of our Privacy Policy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start text-left h-auto py-3 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {link}
                    <ChevronRight className="ml-auto h-4 w-4 text-gray-400" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">DevCourses</h3>
                  <p className="text-xs text-gray-400">
                    Learn. Build. Succeed.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering developers worldwide with high-quality courses and
                hands-on projects.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} DevCourses. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
