import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import useTitle from "../../Hooks/useTitle";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

const Signup = () => {
  useTitle("Sign Up");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const {signup, isSigningUp, authMessage} = useAuthStore();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (!formdata.name.trim()) newErrors.name = 'Full name is required';
    else if (formdata.name.length < 3) newErrors.name = 'Name must be at least 3 characters';

    if (!formdata.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formdata.email)) newErrors.email = 'Please enter a valid email';

    if (!formdata.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formdata.phone)) newErrors.phone = 'Please enter a valid phone number';

    if (!formdata.password) newErrors.password = 'Password is required';

    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formdata.password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (!terms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formdata,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      signup(formdata);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
           
      <div className="pt-24 pb-12 px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 space-y-6 w-full max-w-lg mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <p className="text-sm text-gray-500 mt-1">Sign up to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="name"
                  onChange={handleChange}
                  name="name"
                  type="text"
                  value={formdata.name}
                  placeholder="John Doe"
                  className={`pl-10 pr-4 py-2 w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  value={formdata.email}
                  placeholder="you@example.com"
                  className={`pl-10 pr-4 py-2 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="phone"
                  onChange={handleChange}
                  name="phone"
                  type="tel"
                  value={formdata.phone}
                  placeholder="+8801234567890"
                  className={`pl-10 pr-4 py-2 w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formdata.password}
                  placeholder="••••••••"
                  className={`pl-10 pr-10 py-2 w-full rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
              <p className="mt-1 text-xs text-gray-500">Minimum 8 characters with at least one letter and one number</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  placeholder="••••••••"
                  className={`pl-10 pr-10 py-2 w-full rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  onChange={(e) => setTerms(e.target.checked)}
                  name="terms"
                  type="checkbox"
                  checked={terms}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">Terms</a> and{" "}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
              </label>
            </div>
            {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}

            {/* Submit Button */}
            <div className="pt-2">
              <p className="text-xs text-red-500 mb-4">{authMessage}</p>
              <button
                type="submit"
                disabled={isSigningUp}
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md ${isSigningUp ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSigningUp ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Create Account'}
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
    </div>
  );
};

export default Signup;