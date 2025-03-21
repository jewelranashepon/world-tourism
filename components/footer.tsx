import Link from "next/link"
import { Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0B1724] text-gray-300 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#123047] to-[#0E2233] px-8 py-12 rounded-2xl md:flex items-center justify-between shadow-lg">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-white">
              Keep up to date with World Tourism News
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Subscribe for articles, events, and exclusive travel offers.
            </p>
          </div>
          <form className="w-full max-w-2xl flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 p-3 rounded-lg bg-[#0E2233] text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border-none"
              required
            />
            
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:flex-1 p-3 rounded-lg bg-[#0E2233] text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-all"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="bg-[#101B2D] p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-500 pb-2">
              Expertise
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Luxury Travel</Link></li>
              <li><Link href="#" className="hover:text-white">Adventure Tours</Link></li>
              <li><Link href="#" className="hover:text-white">Eco Tourism</Link></li>
              <li><Link href="#" className="hover:text-white">Cultural Trips</Link></li>
            </ul>
          </div>

          <div className="bg-[#101B2D] p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-500 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="bg-[#101B2D] p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-500 pb-2">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Finance</Link></li>
              <li><Link href="#" className="hover:text-white">Government</Link></li>
              <li><Link href="#" className="hover:text-white">Technology</Link></li>
              <li><Link href="#" className="hover:text-white">Healthcare</Link></li>
            </ul>
          </div>

          <div className="bg-[#101B2D] p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-500 pb-2">
              Learn & Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Travel Guides</Link></li>
              <li><Link href="#" className="hover:text-white">Customer Support</Link></li>
              <li><Link href="#" className="hover:text-white">Events</Link></li>
            </ul>
            <div className="mt-4">
              <img src="/images/certifi.png" alt="Certification" className="w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-sm mt-10">
        <p className="text-white">
          © {new Date().getFullYear()} World Tourism. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></Link>
          <Link href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></Link>
          <Link href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></Link>
          <Link href="#" className="hover:text-white"><Youtube className="h-5 w-5" /></Link>
        </div>
      </div>
    </footer>
  )
}
