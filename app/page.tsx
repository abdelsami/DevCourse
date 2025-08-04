import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  Zap,
  Play,
  Code,
  Laptop,
  Smartphone,
  Database,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  // Get all courses from your database
  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Mock data for each course (you can customize this per course later)
  const getCourseData = (courseId: string) => ({
    price: 99,
    originalPrice: 149,
    discount: 34,
    duration: "12 hours",
    level: "Intermediate",
    category: "Web Development",
    enrollmentCount: Math.floor(Math.random() * 2000) + 500, // Random for demo
    averageRating: 4.7,
    reviewCount: Math.floor(Math.random() * 100) + 20,
    instructor: {
      name: ["Sarah Johnson", "Michael Chen", "Emily Rodriguez", "David Thompson,"][Math.floor(Math.random() * 4)],
      title: "Senior Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    
    image: "/course-images/tware-developer.jpg",
    isPopular: Math.random() > 0.7, // 30% chance to be popular
    isBestseller: Math.random() > 0.8, // 20% chance to be bestseller
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Icons Animation */}
          <div className="absolute top-20 left-10 animate-bounce delay-100">
            <Code className="h-8 w-8 text-yellow-300 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-300">
            <Laptop className="h-10 w-10 text-yellow-300 opacity-60" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-500">
            <Smartphone className="h-6 w-6 text-yellow-300 opacity-60" />
          </div>
          <div className="absolute top-60 left-1/3 animate-bounce delay-700">
            <Database className="h-7 w-7 text-yellow-300 opacity-60" />
          </div>
          <div className="absolute bottom-60 right-1/4 animate-bounce delay-1000">
            <Globe className="h-9 w-9 text-yellow-300 opacity-60" />
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Play className="h-6 w-6 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">DevCourses</h1>
                <p className="text-xs text-yellow-200">
                  Learn. Build. Succeed.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white/80">
            <Link
              href="#courses"
              className="hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Get Started</Button> */}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium">
                    New courses every week
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Master
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Development
                  </span>
                  Skills
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Learn from industry experts and build real-world projects that
                  advance your career. Join thousands of developers who trust
                  our platform.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black border-0 px-8 py-6 text-lg font-semibold"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </div> */}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {courses.length}+
                  </div>
                  <div className="text-gray-300 text-sm">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15K+</div>
                  <div className="text-gray-300 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.9</div>
                  <div className="text-gray-300 text-sm">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Scrolling Course Cards */}
            <div className="relative">
              <div className="space-y-4 max-h-96 overflow-hidden">
                {/* Scrolling Animation Container */}
                <div className="animate-scroll space-y-4">
                  {/* Course Preview Cards */}
                  {[
                    {
                      title: "React Masterclass",
                      tech: "React",
                      color: "from-yellow-500 to-orange-500",
                      icon: <Code className="h-5 w-5" />,
                    },
                    {
                      title: "Node.js Backend",
                      tech: "Node.js",
                      color: "from-green-500 to-emerald-500",
                      icon: <Database className="h-5 w-5" />,
                    },
                    {
                      title: "Full-Stack App",
                      tech: "MERN",
                      color: "from-orange-500 to-red-500",
                      icon: <Laptop className="h-5 w-5" />,
                    },
                    {
                      title: "Mobile Development",
                      tech: "React Native",
                      color: "from-blue-500 to-purple-500",
                      icon: <Smartphone className="h-5 w-5" />,
                    },
                    {
                      title: "DevOps Essentials",
                      tech: "Docker",
                      color: "from-purple-500 to-pink-500",
                      icon: <Globe className="h-5 w-5" />,
                    },
                    {
                      title: "TypeScript Pro",
                      tech: "TypeScript",
                      color: "from-indigo-500 to-blue-500",
                      icon: <Code className="h-5 w-5" />,
                    },
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center text-white`}
                        >
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">
                            {course.title}
                          </h3>
                          <p className="text-gray-300 text-sm">{course.tech}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white text-sm">4.8</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Featured Courses Section */}
      <div id="courses" className="relative bg-ca py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-100 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Courses</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured
              <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular and highly-rated courses, carefully
              crafted by industry experts to accelerate your development journey
            </p>

            {/* Course Stats */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {courses.length}+
                </div>
                <div className="text-sm text-gray-500">Active Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-500">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">4.9★</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All Courses"].map((category) => (
              <Button
                key={category}
                variant={category === "All Courses" ? "default" : "outline"}
                className={`rounded-full ${
                  category === "All Courses"
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "hover:bg-yellow-50 border-gray-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {courses.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                No courses available yet
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                We're working hard to bring you amazing courses. Check back
                soon!
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Get Notified When Available
              </Button>
            </div>
          ) : (
            <>
              {/* Courses Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {courses.slice(0, 12).map((course, index) => {
                  const courseData = getCourseData(course.id);

                  return (
                    <Card
                      key={course.id}
                      className="borderr group transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden"
                      >
                      <CardHeader className="p-0">
                        {/* Course Image with Overlay */}
                        <div className="relative aspect-video ">
                          {/* Animated Background Pattern */}
                          <img
                            src={course.image || "/course-images/tware-developer.jpg"}
                            alt={course.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-pulse"></div>
                            <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
                            <div className="absolute bottom-6 left-8 w-6 h-6 border border-white rotate-45 animate-spin"></div>
                          </div>

                          {/* Course Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <BookOpen className="h-8 w-8 text-white" />
                            </div>
                          </div>

                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex gap-2">
                            {courseData.isBestseller && (
                              <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0">
                                <Star className="h-3 w-3 mr-1" />
                                Bestseller
                              </Badge>
                            )}
                            {courseData.isPopular && (
                              <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                                <Zap className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>

                          {/* Discount Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 animate-pulse">
                              {courseData.discount}% OFF
                            </Badge>
                          </div>

                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/0 group-hover:bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <Play className="h-6 w-6 text-yellow-600 ml-1" />
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          {/* Category and Level */}
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="text-yellow-600 border-yellow-200"
                            >
                              {courseData.category}
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-100">
                              {courseData.level}
                            </Badge>
                          </div>

                          {/* Course Title */}
                          <CardTitle className="text-xl leading-tight group-hover:text-yellow-600 transition-colors line-clamp-2">
                            {course.title}
                          </CardTitle>

                          {/* Course Description */}
                          <CardDescription className="line-clamp-2 text-base">
                            {course.description}
                          </CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent className="px-6 pb-6 space-y-4">
                        {/* Instructor */}
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 ring-2 ring-yellow-100">
                            <AvatarImage
                              src={
                                courseData.instructor.avatar ||
                                "/placeholder.svg"
                              }
                            />
                            <AvatarFallback className="bg-yellow-400 text-black">
                              {courseData.instructor.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">
                              {courseData.instructor.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {courseData.instructor.title}
                            </p>
                          </div>
                        </div>

                        {/* Course Stats */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-yellow-500" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-orange-500" />
                            <span>
                              {courseData.enrollmentCount.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(courseData.averageRating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-medium">
                            {courseData.averageRating}
                          </span>
                          <span className="text-gray-500">
                            ({courseData.reviewCount} reviews)
                          </span>
                        </div>

                        {/* Progress Bar (Mock) */}
                        {/* <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Course Progress</span>
                            <span className="font-medium">0%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-0"></div>
                          </div>
                        </div> */}

                        {/* Pricing */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-green-600">
                              ${course.price}
                            </span>
                            <span className="text-lg line-through text-gray-400">
                              ${course.originalPrice}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-green-600 font-medium">
                              Save $
                              {(course.originalPrice - course.price).toFixed(2)}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link href={`/checkout/${course.id}`} className="block">
                          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black border-0 py-6 text-lg font-medium group-hover:shadow-lg transition-all duration-300">
                            <span>Enroll Now</span>
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>

                        {/* Additional Info */}
                        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
                          {/* <span>Created {new Date(course.createdAt).toLocaleDateString()}</span> */}
                          <span className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            English
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Load More Section */}
              {/* <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Showing 6 of {courses.length} courses
                </p>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:bg-yellow-50 border-gray-300">
                  Load More Courses
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div> */}
            </>
          )}

          {/* Course Categories Preview */}
          <div className="mt-20 pt-16 border-t">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Explore by Category</h3>
              <p className="text-gray-600 text-lg">
                Find the perfect course for your learning goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Web Development",
                  count: "25+ courses",
                  icon: <Code className="h-8 w-8" />,
                  color: "from-yellow-500 to-orange-500",
                  description: "Frontend, Backend, Full-stack",
                },
                {
                  name: "Mobile Development",
                  count: "18+ courses",
                  icon: <Smartphone className="h-8 w-8" />,
                  color: "from-orange-500 to-red-500",
                  description: "iOS, Android, React Native",
                },
                {
                  name: "DevOps & Cloud",
                  count: "15+ courses",
                  icon: <Database className="h-8 w-8" />,
                  color: "from-green-500 to-emerald-500",
                  description: "AWS, Docker, Kubernetes",
                },
                {
                  name: "Data Science",
                  count: "12+ courses",
                  icon: <Globe className="h-8 w-8" />,
                  color: "from-blue-500 to-purple-500",
                  description: "Python, ML, Analytics",
                },
                {
                  name: "UI/UX Design",
                  count: "10+ courses",
                  icon: <Laptop className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500",
                  description: "Figma, Design Systems",
                },
                {
                  name: "Cybersecurity",
                  count: "8+ courses",
                  icon: <BookOpen className="h-8 w-8" />,
                  color: "from-red-500 to-pink-500",
                  description: "Ethical Hacking, Security",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {category.name}
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {category.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Start Your
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Coding Journey?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of developers who have advanced their careers
                with our comprehensive courses. Start building real projects
                today!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Lifetime Access</h3>
                <p className="text-sm text-gray-300 text-center">
                  Learn at your own pace with unlimited access to all course
                  materials
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Expert Instructors</h3>
                <p className="text-sm text-gray-300 text-center">
                  Learn from industry professionals with years of real-world
                  experience
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">4.9★ Rating</h3>
                <p className="text-sm text-gray-300 text-center">
                  Highly rated by students worldwide for quality and
                  effectiveness
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black border-0 px-8 py-6 text-lg font-semibold"
              >
                <Play className="h-5 w-5 mr-2" />
                Browse All Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Start Free Trial
              </Button>
            </div> */}

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Trusted by:</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="text-2xl font-bold">Udemy</div>
                <div className="text-2xl font-bold">Coursera</div>
                <div className="text-2xl font-bold">Codecademy</div>
                <div className="text-2xl font-bold">Khan Academy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
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
                hands-on projects. Start your coding journey with us today.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Users className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Star className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Courses</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <p className="hover:text-white transition-colors">
                    Web Development
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Mobile Development
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Backend Development
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    DevOps & Cloud
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Data Science
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Machine Learning
                  </p>
                </li>
              </ul>
            </div>

            {/* Company */}
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
                  <Link href="#/" className="hover:text-white transition-colors">
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

            {/* Support */}
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
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div id="contact" className="border-t border-gray-800 mt-12 pt-8">
            <div className="max-w-md mx-auto text-center space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <p className="text-sm text-gray-300">
                Get the latest courses and updates delivered to your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          {/* <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© 2024 DevCourses. All rights reserved.</div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
