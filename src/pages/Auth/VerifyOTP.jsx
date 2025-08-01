import { FiKey } from "react-icons/fi";
import { Link } from 'react-router-dom';
import useTitle from "../../Hooks/useTitle";
import { useState } from "react";

const VerifyOTP = () => {
  useTitle("Verify OTP");
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!otp) {
      setError('OTP is required');
      return;
    }

    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('OTP verified:', otp);
      setIsSubmitting(false);
      setIsVerified(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-12 px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 space-y-6 w-full max-w-lg mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Verify OTP</h2>
            <p className="text-sm text-gray-500 mt-1">
              {isVerified 
                ? "OTP verified successfully!"
                : "Enter the 6-digit OTP sent to your email"}
            </p>
          </div>

          {isVerified ? (
            <div className="text-center">
              <Link 
                to="/reset-password" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md inline-block"
              >
                Reset Password
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  6-Digit OTP
                </label>
                <div className="relative">
                  <FiKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    type="text"
                    inputMode="numeric"
                    pattern="\d{6}"
                    maxLength="6"
                    placeholder="123456"
                    className={`pl-10 pr-4 py-2 w-full rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm`}
                  />
                </div>
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
              </div>

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
                      Verifying...
                    </span>
                  ) : 'Verify OTP'}
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                Didn't receive OTP?{" "}
                <button type="button" className="text-indigo-600 hover:underline font-medium">
                  Resend OTP
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;