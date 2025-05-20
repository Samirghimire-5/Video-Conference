import Link from "next/link"
import { Video } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Video className="h-6 w-6 text-[#0070f3]" />
              <span className="font-bold text-xl">YapYap</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Connect with anyone, anywhere, anytime with high-quality video conferencing.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} YapYap. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
