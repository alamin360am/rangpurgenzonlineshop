import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">আমাদের সম্পর্কে</h3>
          <p className="text-gray-400 text-sm">
            আমরা একটি প্রযুক্তি-ভিত্তিক প্ল্যাটফর্ম যা ব্যবহারকারীদের উন্নত পরিষেবা প্রদান করে।
            আমাদের লক্ষ্য হলো সহজলভ্য এবং কার্যকর সমাধান তৈরি করা।
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">দ্রুত লিংক</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-300">হোম</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">পরিষেবা</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">পোর্টফোলিও</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">ব্লগ</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">যোগাযোগ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">আমাদের পরিষেবা</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-300">ওয়েব ডেভেলপমেন্ট</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">মোবাইল অ্যাপ ডেভেলপমেন্ট</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">UI/UX ডিজাইন</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">ডিজিটাল মার্কেটিং</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">যোগাযোগ</h3>
          <p className="text-gray-400 text-sm">
            ১২৩ মেইন স্ট্রিট, ঢাকা, বাংলাদেশ
          </p>
          <p className="text-gray-400 text-sm mt-2">
            ইমেইল: <a href="mailto:info@example.com" className="hover:text-white transition-colors duration-300">info@example.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            ফোন: <a href="tel:+8801234567890" className="hover:text-white transition-colors duration-300">+880 1234 567890</a>
          </p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-300 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} আপনার কোম্পানির নাম। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;