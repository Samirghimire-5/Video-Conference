import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe, Shield, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import BackgroundAnimation from "@/components/background-animation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface TestimonialCard {
  quote: string
  author: string
  role: string
}


export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundAnimation />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Connect Instantly with <span className="text-[#0070f3]">YapYap</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              High-quality video conferencing, screen sharing, and more. Connect with anyone, anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0070f3] hover:bg-[#0060d3] text-white">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Video conference illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose YapYap?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform is designed to make video conferencing simple, secure, and seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <FeatureCard
            icon={<Video className="h-10 w-10 text-[#0070f3]" />}
            title="Crystal Clear Video"
            description="Experience high-definition video and audio quality that makes virtual meetings feel like in-person conversations."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-[#0070f3]" />}
            title="Connect Globally"
            description="Connect with teammates, clients, or friends from anywhere in the world with our reliable global infrastructure."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-[#0070f3]" />}
            title="Enterprise Security"
            description="Your conversations stay private with end-to-end encryption and advanced security features."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their communication with YapYap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="YapYap has revolutionized how our remote team collaborates. The video quality is unmatched."
            author="Sarah Johnson"
            role="Product Manager"
          />
          <TestimonialCard
            quote="I've tried many video conferencing tools, but YapYap's simplicity and reliability keep me coming back."
            author="Michael Chen"
            role="Software Engineer"
          />
          <TestimonialCard
            quote="The security features give us peace of mind when discussing sensitive business matters."
            author="Emma Rodriguez"
            role="CEO"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#0070f3]/20 to-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your virtual meetings?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join YapYap today and experience the future of video conferencing.
          </p>
          <Button asChild size="lg" className="bg-[#0070f3] hover:bg-[#0060d3] text-white">
            <Link href="/register" className="flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:translate-y-[-4px]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }: TestimonialCard) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10">
      <div className="mb-4 text-[#0070f3]">"</div>
      <p className="text-gray-200 mb-6 italic">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  )
}
