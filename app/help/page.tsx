import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  ArrowLeft,
  Search,
  BookOpen,
  CreditCard,
  User,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  HelpCircle,
  Video,
  Download,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const categories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn how to navigate and use our platform",
      articles: 12,
      color: "bg-blue-500",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Billing & Payments",
      description: "Questions about pricing, refunds, and billing",
      articles: 8,
      color: "bg-green-500",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Course Access",
      description: "How to access and watch your courses",
      articles: 15,
      color: "bg-purple-500",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Downloads & Resources",
      description: "Downloading course materials and resources",
      articles: 6,
      color: "bg-orange-500",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Account Management",
      description: "Managing your profile and account settings",
      articles: 10,
      color: "bg-indigo-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Technical Issues",
      description: "Troubleshooting and technical support",
      articles: 9,
      color: "bg-red-500",
    },
  ];

  const popularArticles = [
    {
      title: "How to access my purchased courses",
      category: "Course Access",
      views: "15.2k views",
    },
    {
      title: "Downloading course materials and videos",
      category: "Downloads & Resources",
      views: "12.8k views",
    },
    {
      title: "How to request a refund",
      category: "Billing & Payments",
      views: "9.5k views",
    },
    {
      title: "Troubleshooting video playback issues",
      category: "Technical Issues",
      views: "8.1k views",
    },
    {
      title: "How to update my profile information",
      category: "Account Management",
      views: "7.3k views",
    },
    {
      title: "Getting started with your first course",
      category: "Getting Started",
      views: "6.9k views",
    },
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      color: "bg-green-500",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak with our team directly",
      availability: "Mon-Fri, 9AM-6PM PST",
      action: "Call Now",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Play className="h-5 w-5 text-black" />
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
              {/* <Link href="/courses" className="text-gray-600 hover:text-gray-900 transition-colors">
                Courses
                </Link> */}
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
              {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Get Started</Button> */}
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Contact
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600 mb-4">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Can We
            <span className="block text-yellow-600">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions, browse our knowledge base, or get
            in touch with our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, guides, and more..."
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-yellow-400"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black">
              Search
            </Button>
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Find the help you need organized by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {category.articles} articles
                        </Badge>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        {/* <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Popular Articles</h2>
                        <p className="text-xl text-gray-600">Most viewed help articles this month</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-0">
                                {popularArticles.map((article, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                                                {article.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span>{article.category}</span>
                                                <span>•</span>
                                                <span>{article.views}</span>
                                            </div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div> */}

        {/* Contact Support */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">
              Our support team is here to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 ${option.color} rounded-xl flex items-center justify-center mx-auto text-white`}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {option.availability}
                    </p>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full">
                      {option.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle>Quick Links</CardTitle>
                            <CardDescription>Frequently accessed resources</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                "System Requirements",
                                "Supported Browsers",
                                "Mobile App Download",
                                "Keyboard Shortcuts",
                                "Privacy Policy",
                                "Terms of Service",
                            ].map((link, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                                >
                                    <span className="text-gray-900 group-hover:text-yellow-600 transition-colors">{link}</span>
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                Support Hours
                            </CardTitle>
                            <CardDescription>When our team is available to help</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Live Chat</span>
                                    <span className="font-medium text-green-600">24/7 Available</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Email Support</span>
                                    <span className="font-medium">24 hour response</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Phone Support</span>
                                    <span className="font-medium">Mon-Fri, 9AM-6PM PST</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t">
                                <p className="text-sm text-gray-600">
                                    <strong>Emergency Support:</strong> Critical issues are handled 24/7 regardless of business hours.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div> */}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Play className="h-5 w-5 text-black" />
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
              <h4 className="font-semibold text-lg">Courses</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Backend Development</li>
                <li>DevOps & Cloud</li>
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
                {/* <li>
                                    <Link href="/team" className="hover:text-white transition-colors">
                                        Our Team
                                    </Link>
                                </li> */}
                {/* <li>
                                    <Link href="/careers" className="hover:text-white transition-colors">
                                        Careers
                                    </Link>
                                </li> */}
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
              © 2024 DevCourses. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
