import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";
import useTitle from "../../Hooks/useTitle";
import {Link, NavLink} from 'react-router-dom'
import { assets } from "../../assets/assets";

const Signup = () => {
  useTitle("Sign Up");
  return (
  <div>
    <nav className="fixed top-0 left-0 z-40 w-full bg-white/80 backdrop-blur shadow-sm px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between items-center gap-2">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-20 sm:w-32" />
        </Link>

        {/* Nav Items */}
        <ul className="flex gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-700">
          {["home", "collection"].map((item, idx) => (
            <NavLink
              key={idx}
              to={`/${item === "home" ? "" : item}`}
              className={({ isActive }) =>
                `relative group uppercase tracking-wide ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </ul>

        <NavLink to={'/login'} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 shadow-md">Log In</NavLink>
      </div>
    </nav>
    <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-4 sm:p-8 mb-12 mt-14 sm:mt-24 space-y-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
      <p className="text-center text-sm text-gray-500">Sign up to get started</p>

      <form className="space-y-6">

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="mt-1 relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="mt-1 relative">
          <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+8801234567890"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="mt-1 relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            placeholder="••••••••"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start text-sm text-gray-700">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="terms">
          I agree to the{" "}
          <a href="#" className="text-indigo-600 hover:underline">Terms</a> and{" "}
          <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md"
        >
          Create Account
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to={'/login'} className="text-indigo-600 hover:underline font-medium">
          Login
        </Link>
      </p>
    </form>
    </div>
  </div>
  );
};

export default Signup;
