import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";
import govnLogo from "@/assets/govn.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="relative bg-white border-b border-gray-100">
        <div className="container py-2 md:py-4 flex items-center justify-between w-full">
          {/* Left Side: Logos (Visible on both) */}
          <Link to="/" className="flex items-center gap-2 pt-1">
            <img src={logo} alt="Haryana Deen Dayal awas Yojna" className="h-12 md:h-16 w-auto object-contain" />
            <img src={govnLogo} alt="Government" className="h-10 md:h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Middle: Links */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">
            <Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
            <Link to="/refund-policy" className="hover:text-black transition-colors">Refunds and policy</Link>
          </div>

          {/* Desktop Right: Contact & Button */}
          <div className="hidden md:flex flex-col items-end gap-1 text-[10px] md:text-xs font-bold text-gray-700">
            <a href="tel:9818513700" className="flex items-center gap-2 hover:text-[#2c6e3b] transition-colors">
              <Phone className="h-3 w-3" /> 98185-13700
            </a>
            <a href="mailto:support@haryanadeendayalplot.org.in" className="flex items-center gap-2 hover:text-[#2c6e3b] transition-colors">
              <Mail className="h-3 w-3" /> support@haryanadeendayalplot.org.in
            </a>
            <span className="text-[9px] mb-1 opacity-60">RERA-PKL-1587-2024</span>
            <Link
              to="/inquiry"
              className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white px-5 py-1.5 rounded-sm font-black tracking-widest text-[10px] uppercase shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-[#2c6e3b] transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay/Drawer */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-6 space-y-6">
              {/* Mobile Links */}
              <div className="flex flex-col gap-3">
                <Link to="/terms" onClick={toggleMenu} className="text-[11px] font-bold text-gray-700 uppercase tracking-widest border-b border-gray-50 pb-2">Terms & Conditions</Link>
                <Link to="/contact" onClick={toggleMenu} className="text-[11px] font-bold text-gray-700 uppercase tracking-widest border-b border-gray-50 pb-2">Contact Us</Link>
                <Link to="/refund-policy" onClick={toggleMenu} className="text-[11px] font-bold text-gray-700 uppercase tracking-widest border-b border-gray-50 pb-2">Refunds & Cancellation</Link>
              </div>

              {/* Mobile Contacts */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <a href="tel:9818513700" className="flex items-center gap-3 text-xs font-bold text-[#2c6e3b]">
                  <Phone className="h-3.5 w-3.5" /> 98185-13700
                </a>
                <a href="mailto:support@haryanadeendayalplot.org.in" className="flex items-center gap-3 text-[10px] font-bold text-gray-600">
                  <Mail className="h-3.5 w-3.5" /> support@haryanadeendayalplot.org.in
                </a>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest pt-1">RERA : RERA-PKL-1587-2024</p>
              </div>

              {/* Mobile Action */}
              <Link
                to="/inquiry"
                onClick={toggleMenu}
                className="block w-full bg-[#2c6e3b] text-white text-center py-3.5 rounded-md font-black uppercase text-xs tracking-[0.2em] shadow-lg animate-premium-pulse overflow-hidden"
              >
                <span className="animate-text-blink">Apply Now</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Main Green Bar Title */}
      <div className="bg-[#2c6e3b] text-white w-full py-2 text-center border-b-2 border-white">
        <h1 className="font-bold text-sm md:text-lg tracking-widest uppercase">HARYANA DEEN DAYAL JAN awas YOJNA</h1>
      </div>

      {/* Blinking Apply Now Bar underneath */}
      <Link
        to="/inquiry"
        className="block bg-green-600 hover:bg-green-700 text-white w-full py-2 text-center text-xs md:text-sm font-black border-b border-white animate-premium-pulse transition-all uppercase tracking-[0.2em] relative overflow-hidden"
      >
        <span className="animate-text-blink">Click Here To Apply Now</span>
      </Link>
      {/* Announcement Marquee */}
      <div className="bg-white text-black border-y border-gray-300 overflow-hidden py-1.5 md:py-2 flex whitespace-nowrap shadow-sm">
        <div className="animate-marquee font-bold text-xs md:text-sm tracking-wide text-gray-800">
          हरियाणा दीन दयाल जन आवास योजना में अपना प्लॉट बुक करे *** 33% कोटा महिलाओं एवं सरकारी कर्मचारियों के लिए आरक्षित है *** REGISTRATION LAST DATE 29 MARCH 2026 ***
        </div>
      </div>
    </>
  );
};

export default Navbar;
