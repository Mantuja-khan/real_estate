import React from 'react';

const HowToApply = () => {
  return (
    <section className="bg-white py-12 w-full border-t border-gray-200 mt-8">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center tracking-wide">
          HOW TO APPLY
        </h2>

        <div className="w-full text-sm md:text-base text-gray-900 font-bold space-y-3 px-4">
          <p>1. <span className="text-black">Fill out your details in the form.</span></p>
          <p>2. <span className="text-black">Click on the 'Submit Enquiry' button.</span></p>
          <p>3. <span className="text-black">After that, complete the payment process.</span></p>
          <div className="w-48 h-1 bg-gray-400 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
