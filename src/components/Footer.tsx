import { Link } from "react-router-dom";
import { Mail, Phone, Map } from "lucide-react";

const Footer = () => (
  <footer className="w-full bg-white flex flex-col mt-8 border-t border-gray-200">
    {/* Contact Us Top Section */}
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-center text-xl md:text-2xl font-bold text-[#2c6e3b] mb-10 tracking-wide">
        CONTACT US
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-gray-800">
        
        {/* Email */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-10 w-10 text-gray-700" />
            <h3 className="text-3xl md:text-4xl font-light text-gray-700 uppercase">EMAIL</h3>
          </div>
          <p className="text-base md:text-lg text-gray-600 font-medium pl-1">
            support@haryanadeendayalplot.org.in
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-8 w-8 text-gray-700" /> {/* Using mail to match user's screenshot where the icon looked strangely like an envelope */}
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wider">TOLL FREE HELPLINE</span>
              <span className="text-lg md:text-2xl font-medium text-gray-800">98185-13700</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3 mb-2">
            <Map className="h-8 w-8 text-gray-700" />
            <h3 className="text-xl md:text-3xl font-light text-gray-700 uppercase">REGISTERED OFFICE</h3>
          </div>
          <div className="text-sm md:text-base text-gray-700 font-medium md:pl-0 leading-relaxed max-w-xs text-center md:text-left">
            <span className="font-bold">SNKV REAL ESTATE PRIVATE LIMITED</span><br />
            H.NO.- 746 P,SECTOR-38,Gurgaon,Sadar Bazar,<br />
            Gurgaon-122001,Haryana<br />
            <span className="text-xs italic text-gray-500 mt-1 block">*as issued by Income tax Department</span>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Green Banner */}
    <div className="bg-[#2c6e3b] w-full py-6 px-4">
      <div className="container mx-auto max-w-6xl text-white text-xs md:text-sm">
        <p className="mb-1">Copyright © 2023 Haryana Deen Dayal Plots – All rights reserved.</p>
        <p className="mb-6 opacity-90 max-w-4xl leading-relaxed">
          Disclaimer: Prices mentioned are subject to change without notice and properties mentioned are subject to availability. This is the official website for Haryana Deen Dayal Plots.
        </p>
        
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-medium tracking-wide">
          <span>Haryana Deen Dayal Plot</span>
          <span className="opacity-50">|</span>
          <Link to="/inquiry" className="hover:text-gray-200 transition-colors">Apply Now</Link>
          <span className="opacity-50">|</span>
          <Link to="/terms" className="hover:text-gray-200 transition-colors">Terms & Condition</Link>
          <span className="opacity-50">|</span>
          <Link to="/privacy-policy" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
          <span className="opacity-50">|</span>
          <Link to="/refund-policy" className="hover:text-gray-200 transition-colors">Refund Policy</Link>
          <span className="opacity-50">|</span>
          <Link to="/contact" className="hover:text-gray-200 transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
