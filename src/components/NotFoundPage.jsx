import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Animated 404 Text */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-800 opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-600 mb-4">পৃষ্ঠাটি পাওয়া যায়নি</h2>
          </div>
        </div>
        
        {/* Error Message */}
        <p className="text-lg text-gray-600 mb-4">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে।
        </p>
        
        {/* Illustration */}
        <div className="mb-4">
          <svg className="w-64 h-64 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 9L9 15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9L15 15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-300"
          >
            পূর্বের পৃষ্ঠায় ফিরে যান
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium border border-indigo-600 rounded-lg shadow-md transition duration-300"
          >
            হোমপেজে যান
          </button>
        </div>
        
        {/* Additional Help */}
        <p className="mt-8 text-gray-500 text-sm">
          সমস্যা সমাধানে সাহায্য প্রয়োজন? <a href="/contact" className="text-indigo-600 hover:underline">যোগাযোগ করুন</a>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;