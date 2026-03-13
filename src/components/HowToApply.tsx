import React, { useState } from 'react';
import priceListNewImg from "@/assets/price_listnew.png";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const HowToApply = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-12 w-full border-t border-gray-200 mt-8">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center tracking-wide">
          HOW TO APPLY
        </h2>
        <div className="w-full text-sm md:text-base text-gray-900  space-y-3 px-4 mb-12">
          <p>1. <span className="text-black">Fill out your details in the form.</span></p>
          <p>2. <span className="text-black">Click on the 'Submit Enquiry' button.</span></p>
          <p>3. <span className="text-black">After that, complete the payment process.</span></p>
        </div>
        <div className="w-full mt-8 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#2c6e3b] mb-6 uppercase tracking-wider">Project Price List</h3>
          
          <div className="w-full bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 p-2">
            <img
              src={priceListNewImg}
              alt="Project Price List"
              className="w-full h-auto object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://i.pinimg.com/736x/1d/af/f8/1daff8a998584f1cd7910d01c0cf42c8.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
