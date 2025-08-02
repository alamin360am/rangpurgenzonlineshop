import useTitle from "../../Hooks/useTitle";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
  useTitle("Log In");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        const response = await axiosInstance.post('/user/signin', {email: formData.email, password: formData.password});
        if(response.data) {
          if(response.data.user.verified) {
            setIsSubmitting(false); 
            toast.success("Log in successfully")
            navigate(from);
          } else {
            toast.error("Please verify your email first");
            navigate('/verify-otp')
          }
          
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-12 px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 space-y-6 w-full max-w-lg mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-sm text-gray-500 mt-1">Login to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
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
                  value={formData.email}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`pl-10 pr-4 py-2 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          
            {/* Password Input */}
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
                  value={formData.password}
                  autoComplete="current-password"
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
            </div>
      
            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                Remember me
              </label>
              <Link to="/forget-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
                Forgot password?
              </Link>
            </div>
          
            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : 'Sign in'}
              </button>
            </div>
          
            {/* Create Account */}
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to={'/signup'} className="text-indigo-600 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;