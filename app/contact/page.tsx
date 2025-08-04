import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Play,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
  Briefcase,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "support@devcourses.com",
      action: "Send Email",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "Austin",
      address: "456 Innovation Blvd, Floor 5",
      zipCode: "Austin, TX 78701",
      phone: "+1 (555) 987-6543",
    },
    {
      city: "Remote",
      address: "We're a remote-first company",
      zipCode: "Work from anywhere",
      phone: "Same great support",
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
              <Link href="/contact" className="text-yellow-600 font-medium">
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
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600 mb-4">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We'd Love to
            <span className="block text-yellow-600">Hear From You</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our courses? Need help with your account? Want
            to partner with us? We're here to help and would love to connect
            with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="partnership">
                        Partnership Opportunity
                      </SelectItem>
                      <SelectItem value="careers">Career Inquiry</SelectItem>
                      <SelectItem value="feedback">Course Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-6 text-lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-yellow-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
                <CardDescription>
                  Choose the method that works best for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-black flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {method.contact}
                      </p>
                      {/* <Button variant="link" className="p-0 h-auto text-yellow-600 hover:text-yellow-700">
                                                {method.action}
                                            </Button> */}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Support:</strong> Available 24/7 for
                    critical issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Find us around the world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto text-black">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {location.city}
                    </h3>
                    <p className="text-gray-600 mt-2">{location.address}</p>
                    <p className="text-gray-600">{location.zipCode}</p>
                    <p className="text-gray-900 font-medium mt-2">
                      {location.phone}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I access my courses after purchase?",
                answer:
                  "Once you complete your purchase, you'll receive an email with login credentials. You can access all your courses through your student dashboard.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes! We offer a 30-day money-back guarantee on all courses. If you're not satisfied, contact us for a full refund.",
              },
              {
                question: "Can I download course materials?",
                answer:
                  "Yes, most course materials including videos, code samples, and resources are available for download with lifetime access.",
              },
              {
                question: "Do you offer corporate training?",
                answer:
                  "We provide custom corporate training solutions. Contact our business team to discuss your organization's needs.",
              },
              {
                question: "Are certificates provided?",
                answer:
                  "Yes, you'll receive a certificate of completion for each course you finish. These can be shared on LinkedIn and other platforms.",
              },
              {
                question: "How do I become an instructor?",
                answer:
                  "We're always looking for expert instructors! Send us your proposal and teaching experience through our careers page.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <Link href="/help">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
              >
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div>

        {/* Partnership CTA */}
        {/* <div className="text-center bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-12">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto text-black">
                            <Briefcase className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold">
                            Interested in
                            <span className="block text-yellow-400">Partnership Opportunities?</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            We're always looking for strategic partnerships, corporate training opportunities, and collaboration with
                            educational institutions.
                        </p>
                        <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg">
                            Explore Partnerships
                        </Button>
                    </div>
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
                                </li>
                                <li>
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
