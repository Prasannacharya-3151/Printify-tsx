import React from "react";

const Feedback: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400 py-20 px-10">
      <h1 className="text-5xl font-bold text-white mb-2">What Our Customers Say</h1>
      <p className="text-gray-100 mb-8 font-semibold text-2xl">Real feedback from real users</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 text-lg italic mb-4">
            "This service was amazing! I was able to upload my documents and track my print order in real-time. The payment process was smooth, and my documents were ready on time!"
          </p>
          <h3 className="text-xl font-semibold text-blue-600">John Doe</h3>
          <p className="text-gray-500">Freelancer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 text-lg italic mb-4">
            "I loved the location feature! It helped me find the nearest printing shop so quickly. The service is fast, and the quality is top-notch!"
          </p>
          <h3 className="text-xl font-semibold text-blue-600">Jane Smith</h3>
          <p className="text-gray-500">Entrepreneur</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
