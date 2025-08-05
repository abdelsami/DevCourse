import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Users, Star, Target, Heart, Zap, Award, Globe, Code, BookOpen, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    const stats = [
        { label: "Students Worldwide", value: "50K+", icon: <Users className="h-6 w-6" /> },
        { label: "Expert Instructors", value: "100+", icon: <Award className="h-6 w-6" /> },
        { label: "Courses Available", value: "500+", icon: <BookOpen className="h-6 w-6" /> },
        { label: "Countries Reached", value: "80+", icon: <Globe className="h-6 w-6" /> },
    ]

    const values = [
        {
            icon: <Target className="h-8 w-8" />,
            title: "Excellence",
            description:
                "We strive for the highest quality in every course, ensuring our students receive world-class education.",
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: "Community",
            description: "Building a supportive learning community where developers help each other grow and succeed.",
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Innovation",
            description: "Staying ahead of technology trends to provide cutting-edge curriculum and learning experiences.",
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Trust",
            description:
                "Maintaining transparency and integrity in everything we do, earning the trust of our global community.",
        },
    ]

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
                            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Home
                            </Link>
                            {/* <Link href="/courses" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Courses
                            </Link> */}
                            <Link href="/about" className="text-yellow-600 font-medium">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </Link>
                            {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Get Started</Button> */}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80">
                                <Heart className="h-4 w-4 text-yellow-400" />
                                <span className="text-sm font-medium">Our Story</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold">
                                Empowering Developers
                                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                    Worldwide
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                We believe that quality education should be accessible to everyone. Our mission is to provide
                                world-class development courses that help you build the skills needed for a successful tech career.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <div className="text-yellow-400">{stat.icon}</div>
                                    </div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-gray-300 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600 mb-4">
                                <Target className="h-4 w-4" />
                                <span className="text-sm font-medium">Our Mission</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Making Quality Education
                                <span className="block text-yellow-600">Accessible to All</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We started DevCourses with a simple belief: everyone deserves access to high-quality, practical
                                education that can transform their career and life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Our Journey</h3>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        Founded in 2020 by a team of passionate developers and educators, DevCourses emerged from the
                                        recognition that traditional education wasn`t keeping pace with the rapidly evolving tech industry.
                                    </p>
                                    <p>
                                        We saw talented individuals struggling to break into tech or advance their careers due to lack of
                                        access to practical, up-to-date training. That`s when we decided to bridge this gap.
                                    </p>
                                    <p>
                                        Today, we`re proud to have helped thousands of students worldwide achieve their career goals through
                                        our comprehensive, hands-on courses taught by industry experts.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <Code className="h-16 w-16 text-white" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-xl flex items-center justify-center">
                                    <TrendingUp className="h-12 w-12 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600 mb-4">
                                <Star className="h-4 w-4" />
                                <span className="text-sm font-medium">Our Values</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our core values shape everything we do, from course creation to student support.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6 text-center space-y-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto text-white">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Preview */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 text-yellow-600 mb-4">
                            <Users className="h-4 w-4" />
                            <span className="text-sm font-medium">Our Team</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the People Behind DevCourses</h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Our diverse team of educators, developers, and industry experts work together to create exceptional
                            learning experiences.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    name: "spervnos",
                                    role: "CTO",
                                    image: "/placeholder.svg?height=200&width=200",
                                    bio: "Formal Software developer and open-source contributor",
                                },
                                {
                                    name: "Sami",
                                    role: "CIO",
                                    image: "/placeholder.svg?height=200&width=200",
                                    bio: "Formal Full-stack developer and open-source contributor",
                                },
                                {
                                    name: "Matador",
                                    role: "Head Manager",
                                    image: "/placeholder.svg?height=200&width=200",
                                    bio: "Educational technology specialist with 15+ years experience",
                                },
                            ].map((member, index) => (
                                <Card key={index} className="border-0 shadow-lg">
                                    <CardContent className="p-6 text-center space-y-4">
                                        <Avatar className="w-24 h-24 mx-auto">
                                            <AvatarImage src={member.image || "/placeholder.svg"} />
                                            <AvatarFallback className="bg-yellow-400 text-black text-2xl">
                                                {member.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                            <p className="text-yellow-600 font-medium">{member.role}</p>
                                            <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* <Link href="/team">
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Meet Our Full Team</Button>
                        </Link> */}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your
                            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Learning Journey?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Join thousands of developers who have transformed their careers with our comprehensive courses.
                        </p>
                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button
                                    size="lg"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black border-0 px-8 py-6 text-lg font-semibold"
                                >
                                    Browse Courses
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                                    <Play className="h-5 w-5 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">DevCourses</h3>
                                    <p className="text-xs text-gray-400">Learn. Build. Succeed.</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Empowering developers worldwide with high-quality courses and hands-on projects.
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
                                    <Link href="/about" className="hover:text-white transition-colors">
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
                                    <Link href="/contact" className="hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Support</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>
                                    <Link href="/help" className="hover:text-white transition-colors">
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <div className="text-sm text-gray-400">© 2024 DevCourses. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
