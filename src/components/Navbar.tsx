import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import govnLogo from "@/assets/govn.png";

const Navbar = () => {
  return (
    <>
      <div className="container bg-white py-2 md:py-4 flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left Side: Logo and Title */}
        <Link to="/" className="flex flex-col items-center justify-center pt-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Haryana Deen Dayal Awaas Yojna" className="h-16 md:h-20 w-auto object-contain" />
            <img src={govnLogo} alt="Government" className="h-12 md:h-16 w-auto object-contain" />

          </div>
        </Link>

        {/* Middle: Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-xs text-gray-500 font-medium mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link>
          <Link to="/contact" className="hover:text-black transition-colors uppercase">CONTACT US</Link>
          <Link to="/refund-policy" className="hover:text-black transition-colors">Refunds & Cancellation Policy</Link>
        </div>

        {/* Right Side: Contact Info & Check Result */}
        <div className="flex flex-col items-end gap-1 mt-4 md:mt-0 text-xs md:text-sm font-semibold text-gray-700">
          <span className="flex items-center gap-2"><Phone className="h-3 w-3 sm:h-4 sm:w-4" /> 98185-13700</span>
          <span className="flex items-center gap-2 text-xs"><Mail className="h-3 w-3 sm:h-4 sm:w-4" /> support@haryanadeendayalplot.org.in</span>
          <span className="flex items-center gap-2 text-xs mb-2">RERA : RERA-PKL-1587-2024</span>
          <Link
            to="/inquiry"
            className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white px-6 py-2 rounded-sm font-bold tracking-wide transition-colors text-xs md:text-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Main Green Bar Title */}
      <div className="bg-[#00c853] text-white w-full py-2 text-center border-b-2 border-white">
        <h1 className="font-bold text-sm md:text-lg tracking-widest uppercase">HARYANA DEEN DAYAL PLOT</h1>
      </div>

      {/* Check Result Bar underneath */}
      <Link to="/check-status" className="block bg-[#00c853] hover:bg-[#00a644] transition-colors text-white w-full py-1 text-center text-xs md:text-sm font-bold border-b border-gray-300">
        Check Result
      </Link>

      {/* Announcement Marquee */}
      <div className="bg-white text-black border-y border-gray-300 overflow-hidden py-1.5 md:py-2 flex whitespace-nowrap shadow-sm">
        <div className="animate-marquee font-bold text-xs md:text-sm tracking-wide text-gray-800">
          योजना में अपना प्लाट बुक करें *** 33% कोटा महिलाओं एवं सरकारी कर्मचारियों के लिए आरक्षित है *** REGISTRATION LAST DATE 28 MARCH 2026 ***
        </div>
      </div>
    </>
  );
};

export default Navbar;
