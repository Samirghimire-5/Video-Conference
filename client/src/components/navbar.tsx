import Link from "next/link";
import { Video } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Video className="h-6 w-6 text-[#0070f3]" />
          <span className="font-bold text-xl">YapYap</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium bg-[#0070f3] hover:bg-[#0060d3] text-white px-4 py-2 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
