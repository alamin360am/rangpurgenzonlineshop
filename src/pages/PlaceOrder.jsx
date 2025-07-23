import { useState } from 'react';
import {
  FiShoppingCart,
  FiCreditCard,
  FiTruck,
  FiLock,
  FiArrowLeft,
} from 'react-icons/fi';
import useTitle from '../hooks/useTitle';
import Title from '../components/Title';

const PlaceOrder = () => {
  useTitle('Place Order');
  const [activeTab, setActiveTab] = useState('shipping');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [errorMessage, setErrorMessage] = useState('');
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    division: '',
    district: '',
    postCode: '',
    phone: '',
    email: '',
    paymentMethod
  });

  const isShippingValid = () => {
    const { firstName, address, division, district, postCode, phone } = shippingData;
    return (
      firstName.trim() !== '' &&
      address.trim() !== '' &&
      division.trim() !== '' &&
      district.trim() !== '' &&
      postCode.trim() !== '' &&
      phone.trim() !== ''
    );
  };

  const steps = ['shipping', 'payment', 'review'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FiShoppingCart className="text-2xl text-indigo-600 mr-2" />
            <Title text1="Shopping" text2="Cart" />
          </div>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full -z-10"></div>
          <div
            className={`absolute top-1/2 left-0 h-1 bg-indigo-600 rounded-full -z-10 transition-all duration-500 ${
              activeTab === 'shipping' ? 'w-1/3' : activeTab === 'payment' ? 'w-2/3' : 'w-full'
            }`}
          ></div>

          {steps.map((tab, index) => {
            const isStepActive =
              (tab === 'shipping' && (activeTab === 'shipping' || activeTab === 'payment' || activeTab === 'review')) ||
              (tab === 'payment' && (activeTab === 'payment' || activeTab === 'review')) ||
              (tab === 'review' && activeTab === 'review');

            return (
              <div key={tab} className="flex flex-col items-center text-center w-1/3">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 transition-all duration-300 ${
                    isStepActive ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-xs font-semibold ${
                    isStepActive ? 'text-indigo-600' : 'text-gray-500'
                  }`}
                >
                  {tab === 'shipping' && 'Delivery Information'}
                  {tab === 'payment' && 'Payment'}
                  {tab === 'review' && 'Review Order'}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Shipping Form */}
            {activeTab === 'shipping' && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Delivery Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input"
                    value={shippingData.firstName}
                    onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Last Name (Optional)"
                    className="input"
                    value={shippingData.lastName}
                    onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="input mb-4"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Division"
                    className="input mb-4"
                    value={shippingData.division}
                    onChange={(e) => setShippingData({ ...shippingData, division: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="District"
                    className="input mb-4"
                    value={shippingData.district}
                    onChange={(e) => setShippingData({ ...shippingData, district: e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Post Code"
                    className="input mb-4"
                    value={shippingData.postCode}
                    onChange={(e) => setShippingData({ ...shippingData, postCode: e.target.value })}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="input mb-4"
                  value={shippingData.phone}
                  onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  className="input mb-4"
                  value={shippingData.email}
                  onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                />
                <div className="text-right">
                  <button
                    onClick={() => {
                      if (isShippingValid()) {
                        setErrorMessage('');
                        setActiveTab('payment');
                      } else {
                        setErrorMessage('Please fill in all the shipping information.');
                      }
                    }}
                    className="btn-primary"
                  >
                    Next: Payment
                  </button>
                  {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                </div>
              </div>
            )}

            {/* Payment Method */}
            {activeTab === 'payment' && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className="mr-4 text-gray-500 hover:text-indigo-600"
                  >
                    <FiArrowLeft className="text-xl cursor-pointer" />
                  </button>
                  <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>
                </div>

                {/* Payment Options */}
                {['credit', 'cod', 'bkash'].map(method => (
                  <div
                    key={method}
                    className={`border rounded-md p-4 mb-4 cursor-pointer transition-all ${
                      paymentMethod === method
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    onClick={() => setPaymentMethod(method)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                          paymentMethod === method ? 'bg-indigo-600 border-indigo-600' : 'border-gray-400'
                        }`}
                      >
                        {paymentMethod === method && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <div className="flex items-center gap-2">
                        {method === 'credit' && <FiCreditCard className="text-xl" />}
                        {method === 'cod' && <FiTruck className="text-xl" />}
                        {method === 'bkash' && <img src="/assets/bkash-logo.png" alt="bKash" className="h-5" />}
                        <span className="font-medium">
                          {method === 'credit' && 'Credit Card'}
                          {method === 'cod' && 'Cash On Delivery'}
                          {method === 'bkash' && 'bKash'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className="btn-secondary"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (paymentMethod) {
                        setActiveTab('review');
                      } else {
                        alert('Please select a payment method.');
                      }
                    }}
                    className="btn-primary"
                  >
                    Next: Order Review
                  </button>
                </div>
              </div>
            )}

            {/* Review Order */}
            {activeTab === 'review' && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setActiveTab('payment')}
                    className="mr-4 text-gray-500 hover:text-indigo-600"
                  >
                    <FiArrowLeft className="text-xl cursor-pointer" />
                  </button>
                  <h2 className="text-xl font-semibold text-gray-800">Order Review</h2>
                </div>

                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <p className="text-gray-700">Name: {shippingData.firstName +" "+ shippingData.lastName}</p>
                  <p className="text-gray-700">Address: {shippingData.address}</p>
                  <p className="text-gray-700">Division: {shippingData.division}</p>
                  <p className="text-gray-700">District: {shippingData.district}</p>
                  <p className="text-gray-700">Postal Code: {shippingData.postCode}</p>
                  <p className="text-gray-700">Email: {shippingData.email}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <p className="text-gray-700 font-medium">
                    Payment Method: {paymentMethod === 'credit' ? 'Credit Card' : paymentMethod === 'cod' ? 'COD' : 'bKash'}
                  </p>
                </div>

                <div className="text-right">
                  <button className="btn-primary flex items-center gap-2">
                    <FiLock /> Confirm Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Order</h2>
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2 text-sm text-gray-700">
                  <span>Subtotal</span>
                  <span> ৳</span>
                </div>
                <div className="flex justify-between mb-2 text-sm text-gray-700">
                  <span>Delivery Charge</span>
                  <span> ৳</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-indigo-600"> ৳</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FiLock className="mr-2" />
                <span>Your information is processed securely</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
