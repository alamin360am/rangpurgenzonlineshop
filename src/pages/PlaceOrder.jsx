// import React, { useState } from "react";
// import { MapPin, Phone, User, Home, Building2, Landmark } from "lucide-react";

// const PlaceOrder = () => {

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     division: "",
//     district: "",
//     thana: "",
//     zip: "",
//     paymentMethod: "COD",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("✅ অর্ডার সফলভাবে সাবমিট হয়েছে!");
//   };

//   const subtotal = 2000
//   const shipping = 80;
//   const total = subtotal + shipping;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10 bg-gray-200 shadow-2xl">
//       {/* Billing Section */}
//       <form
//         onSubmit={handleSubmit}
//         className="lg:col-span-2 bg-white border border-gray-300 rounded-xl shadow-sm p-8 space-y-6"
//       >
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h2>

//         {/* Full Name */}
//         <div>
//           <label className="flex items-center text-gray-600 mb-1">
//             <User className="w-4 h-4 mr-2" />
//             Name
//           </label>
//           <input
//             name="name"
//             type="text"
//             required
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Write your fullname"
//             className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="flex items-center text-gray-600 mb-1">
//             <Phone className="w-4 h-4 mr-2" />
//             Mobile No
//           </label>
//           <input
//             name="phone"
//             type="tel"
//             required
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="01XXXXXXXXX"
//             className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="flex items-center text-gray-600 mb-1">
//             <Home className="w-4 h-4 mr-2" />
//             Address
//           </label>
//           <textarea
//             name="address"
//             rows={3}
//             required
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Your full address"
//             className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//           ></textarea>
//         </div>

//         {/* Address Form */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="flex items-center text-gray-600 mb-1">
//               <Building2 className="w-4 h-4 mr-2" />
//               Division
//             </label>
//             <input
//               name="division"
//               type="text"
//               required
//               value={form.division}
//               onChange={handleChange}
//               placeholder="Dhaka"
//               className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//           </div>

//           <div className="w-1/2">
//             <label className="flex items-center text-gray-600 mb-1">
//               <Landmark className="w-4 h-4 mr-2" />
//               District
//             </label>
//             <input
//               name="district"
//               type="text"
//               required
//               value={form.district}
//               onChange={handleChange}
//               placeholder="Dhaka"
//               className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="flex items-center text-gray-600 mb-1">
//               <Building2 className="w-4 h-4 mr-2" />
//               Thana
//             </label>
//             <input
//               name="thana"
//               type="text"
//               required
//               value={form.thana}
//               onChange={handleChange}
//               placeholder="Dhaka"
//               className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//           </div>

//           <div className="w-1/2">
//             <label className="flex items-center text-gray-600 mb-1">
//               <Landmark className="w-4 h-4 mr-2" />
//               ZIP Code
//             </label>
//             <input
//               name="zip"
//               type="text"
//               required
//               value={form.zip}
//               onChange={handleChange}
//               placeholder="1216"
//               className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div>
//           <label className="flex items-center text-gray-600 mb-1">
//             <MapPin className="w-4 h-4 mr-2" />
//             Payment Method
//           </label>
//           <select
//             name="paymentMethod"
//             value={form.paymentMethod}
//             onChange={handleChange}
//             className="w-full border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="BKash">Bkash</option>
//             <option value="Nagad">Nagad</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold py-3 rounded-full transition cursor-pointer"
//         >
//           Confirm Your Order
//         </button>
//       </form>

//       {/* Order Summary */}
//       <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 h-fit sticky top-24">
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h3>

//         <div className="space-y-3 text-sm text-gray-700">
//           <div className="flex justify-between">
//             <span>মোট পণ্য:</span>
//             <span>7 টি</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Subtotal:</span>
//             <span>৳ {subtotal}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Delivery Charge:</span>
//             <span>৳ {shipping}</span>
//           </div>
//           <hr className="my-2" />
//           <div className="flex justify-between font-semibold text-lg text-gray-800">
//             <span>মোট:</span>
//             <span>৳ {total}</span>
//           </div>
//         </div>

//         <div className="text-xs text-gray-500 mt-4">
//           <p>
//             আপনার পেমেন্ট "Cash on Delivery" হলে, ডেলিভারির সময় পেমেন্ট দিন।
//           </p>
//           <p>অর্ডার নিশ্চিতকরণের পর ৩-৫ কার্যদিবসের মধ্যে ডেলিভারি হবে।</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;


import { useState } from 'react';
import { FiShoppingCart, FiUser, FiCreditCard, FiTruck, FiLock, FiArrowLeft } from 'react-icons/fi';

const PlaceOrder = () => {
  const [activeTab, setActiveTab] = useState('shipping');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const cartItems = [
    { id: 1, name: 'নাইক এয়ার ফোর্স ১', price: 12000, quantity: 1, image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'অ্যাডিডাস টি-শার্ট', price: 1500, quantity: 2, image: 'https://via.placeholder.com/80' },
    { id: 3, name: 'অ্যাপল এয়ারপডস', price: 18000, quantity: 1, image: 'https://via.placeholder.com/80' },
  ];;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 120;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FiShoppingCart className="text-2xl text-indigo-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">শপিংকার্ট</h1>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FiUser className="text-gray-500" />
            <span className="text-gray-600">লগইন ব্যবহারকারী</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
          <div 
            className={`absolute top-1/2 left-0 h-1 bg-indigo-600 -z-10 transition-all duration-300 ${
              activeTab === 'shipping' ? 'w-1/3' : activeTab === 'payment' ? 'w-2/3' : 'w-full'
            }`}
          ></div>
          
          <div className={`flex flex-col items-center ${activeTab === 'shipping' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              activeTab === 'shipping' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}>
              1
            </div>
            <span className="text-xs font-medium">ডেলিভারি তথ্য</span>
          </div>
          
          <div className={`flex flex-col items-center ${activeTab === 'payment' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              activeTab === 'payment' || activeTab === 'review' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}>
              2
            </div>
            <span className="text-xs font-medium">পেমেন্ট</span>
          </div>
          
          <div className={`flex flex-col items-center ${activeTab === 'review' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              activeTab === 'review' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}>
              3
            </div>
            <span className="text-xs font-medium">রিভিউ অর্ডার</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="lg:w-2/3">
            {activeTab === 'shipping' && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">ডেলিভারি তথ্য</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">প্রথম নাম</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="আপনার প্রথম নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">শেষ নাম</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="আপনার শেষ নাম"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">ঠিকানা</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="রোড নং, বাড়ি নং, ফ্ল্যাট নং"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">শহর</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="আপনার শহর"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">জেলা</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                      <option>জেলা নির্বাচন করুন</option>
                      <option>ঢাকা</option>
                      <option>চট্টগ্রাম</option>
                      <option>সিলেট</option>
                      <option>রাজশাহী</option>
                      <option>খুলনা</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">পোস্ট কোড</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="আপনার পোস্ট কোড"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="০১XXXXXXXX"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="আপনার ইমেইল"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button 
                    onClick={() => setActiveTab('payment')}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    পরবর্তী: পেমেন্ট
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setActiveTab('shipping')}
                    className="mr-4 text-gray-500 hover:text-indigo-600"
                  >
                    <FiArrowLeft className="text-xl" />
                  </button>
                  <h2 className="text-xl font-semibold text-gray-800">পেমেন্ট মেথড</h2>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div 
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      paymentMethod === 'credit' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    onClick={() => setPaymentMethod('credit')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        paymentMethod === 'credit' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'credit' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex items-center">
                        <FiCreditCard className="text-xl mr-2" />
                        <span className="font-medium">ক্রেডিট/ডেবিট কার্ড</span>
                      </div>
                    </div>
                    
                    {paymentMethod === 'credit' && (
                      <div className="mt-4 pl-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">কার্ড নম্বর</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="১২৩৪ ৫৬৭৮ ৯০১২ ৩৪৫৬"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">কার্ড হোল্ডার নাম</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="কার্ডে লেখা নাম"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">মেয়াদ শেষ</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="১২৩"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex items-center">
                        <FiTruck className="text-xl mr-2" />
                        <span className="font-medium">ক্যাশ অন ডেলিভারি (COD)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      paymentMethod === 'bkash' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    onClick={() => setPaymentMethod('bkash')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        paymentMethod === 'bkash' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'bkash' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex items-center">
                        <img src="https://via.placeholder.com/20" alt="bKash" className="h-5 mr-2" />
                        <span className="font-medium">bKash</span>
                      </div>
                    </div>
                    
                    {paymentMethod === 'bkash' && (
                      <div className="mt-4 pl-8">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">bKash নম্বর</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="০১XXXXXXXX"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    onClick={() => setActiveTab('shipping')}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    পূর্ববর্তী
                  </button>
                  <button 
                    onClick={() => setActiveTab('review')}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    পরবর্তী: অর্ডার রিভিউ
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'review' && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setActiveTab('payment')}
                    className="mr-4 text-gray-500 hover:text-indigo-600"
                  >
                    <FiArrowLeft className="text-xl" />
                  </button>
                  <h2 className="text-xl font-semibold text-gray-800">অর্ডার রিভিউ</h2>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">ডেলিভারি তথ্য</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-700">জনাব মোঃ রহিম</p>
                    <p className="text-gray-700">রোড নং ১২, বাড়ি নং ৩৪, মিরপুর</p>
                    <p className="text-gray-700">ঢাকা-১২১৬, বাংলাদেশ</p>
                    <p className="text-gray-700">ফোন: ০১৭১২৩৪৫৬৭৮</p>
                    <p className="text-gray-700">ইমেইল: rahim@example.com</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">পেমেন্ট মেথড</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    {paymentMethod === 'credit' && (
                      <div className="flex items-center">
                        <FiCreditCard className="text-xl mr-2 text-gray-700" />
                        <span className="text-gray-700">ক্রেডিট/ডেবিট কার্ড (•••• •••• •••• ৩৪৫৬)</span>
                      </div>
                    )}
                    {paymentMethod === 'cod' && (
                      <div className="flex items-center">
                        <FiTruck className="text-xl mr-2 text-gray-700" />
                        <span className="text-gray-700">ক্যাশ অন ডেলিভারি (COD)</span>
                      </div>
                    )}
                    {paymentMethod === 'bkash' && (
                      <div className="flex items-center">
                        <img src="https://via.placeholder.com/20" alt="bKash" className="h-5 mr-2" />
                        <span className="text-gray-700">bKash (০১৭১২৩৪৫৬৭৮)</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center">
                    <FiLock className="mr-2" />
                    অর্ডার কনফার্ম করুন
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">আপনার অর্ডার</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">পরিমাণ: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{item.price * item.quantity} ৳</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">সাবটোটাল</span>
                  <span className="text-gray-800">{subtotal} ৳</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">ডেলিভারি চার্জ</span>
                  <span className="text-gray-800">{shipping} ৳</span>
                </div>
                <div className="flex justify-between font-medium text-lg mt-4">
                  <span className="text-gray-800">মোট</span>
                  <span className="text-indigo-600">{total} ৳</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <FiLock className="mr-2" />
                <span>আপনার তথ্য সুরক্ষিতভাবে প্রসেস করা হবে</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;