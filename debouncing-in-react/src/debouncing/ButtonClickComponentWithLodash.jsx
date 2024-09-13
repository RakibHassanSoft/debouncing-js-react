import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const ButtonClickComponentWithLodash = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState('');

  // Define the payment processing function
  const handlePayment = async () => {
    if (isProcessing || response) return; // Prevent further clicks if already processing or response is set

    setIsProcessing(true);
    try {
      // Simulate payment processing
      console.log('Processing payment...');
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      setResponse('Payment is done');
      console.log('Payment processed!');
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Use the custom debounced hook
  const debouncedHandlePayment = useDebounce(handlePayment, 2000); // 2000ms debounce delay

  const handleClick = () => {
    debouncedHandlePayment(); // Trigger the debounced payment handler
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={handleClick}
        disabled={isProcessing || Boolean(response)} // Disable button while processing or if response is set
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-300 ${isProcessing || response ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      <h1 className={`text-center text-3xl mt-10 ${response ? 'text-green-500 font-bold' : 'text-green-500'}`}>
        {response ? response : 'Pay first'}
      </h1>
    </div>
  );
};

export default ButtonClickComponentWithLodash;
