import useTitle from "../../Hooks/useTitle";
import {Link, NavLink} from 'react-router-dom'
import { FiMail, FiLock } from "react-icons/fi";
import { assets } from "../../assets/assets";

const Login = () => {
  useTitle("Log In");

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

        <NavLink to={'/signup'} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 shadow-md">Sign Up</NavLink>
      </div>
    </nav>
    <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-4 sm:p-8 mb-12 mt-14 sm:mt-24 space-y-6 w-full max-w-lg mx-auto">
    
      <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
      <p className="text-center text-sm text-gray-500">Login to your account</p>

      <form className="space-y-6">      
        {/* Email Input */}
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
              autoComplete="email"
              required
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
              placeholder="you@example.com"
            />
          </div>
        </div>
      
        {/* Password Input */}
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
              autoComplete="current-password"
              required
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>
  
        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
            Forgot password?
          </a>
        </div>
      
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md cursor-pointer"
          >
            Sign in
          </button>
        </div>
      
            {/* Optional: Create Account */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              
              <Link to={'/signup'} className="text-indigo-600 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </form>

    </div>
  </div>
  );
};

export default Login;
