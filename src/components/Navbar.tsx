import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Home } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";
import govnLogo from "@/assets/govn.png";
import CountdownTimer from "./CountdownTimer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const targetDate = "2026-03-29T23:59:59";
  const now = new Date();
  const isExpired = now > new Date(targetDate);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Mobile-only Contact Top Bar - NOT STICKY */}
      <div className="md:hidden bg-gray-50 border-b border-gray-100 py-1 px-2 pb-1.5 flex justify-between items-center text-[9px] font-bold text-gray-600 sm:text-[10px]">
        <a href="tel:9818513700" className="flex items-center gap-1 hover:text-[#2c6e3b]">
          <Phone className="h-2.5 w-2.5 text-[#2c6e3b] stroke-[3px]" /> 98185-13700
        </a>
        <a href="mailto:support@haryanadeendayalplot.org.in" className="flex items-center gap-1 hover:text-[#2c6e3b]">
          <Mail className="h-2.5 w-2.5 text-[#2c6e3b] stroke-[3px]" /> support@haryanadeendayalplot.org.in
        </a>
      </div>

      {/* Main Green Bar Title - NOT STICKY */}
      <div className="bg-[#2c6e3b] text-white w-full py-2 flex flex-col items-center justify-center border-b-2 border-white">
        <h1 className="font-bold text-sm md:text-lg tracking-widest uppercase">HARYANA DEEN DAYAL JAN awas YOJNA</h1>
      </div>

      {/* Announcement Marquee - NOT STICKY */}
      <div className="bg-white text-black border-b border-gray-300 overflow-hidden py-1.5 md:py-2 flex whitespace-nowrap">
        <div className="animate-marquee font-bold text-xs md:text-sm tracking-wide text-gray-800">
          हरियाणा दीन दयाल जन आवास योजना में अपना प्लॉट बुक करे *** 33% कोटा महिलाओं एवं सरकारी कर्मचारियों के लिए आरक्षित है *** REGISTRATION LAST DATE 29 MARCH 2026 ***
        </div>
      </div>

      {/* PERMANENTLY STICKY CONTAINER: ONLY Logo Navbar + Apply Bar */}
      <header className="sticky top-0 z-[100] w-full bg-white shadow-md">
        <div className="relative bg-white border-b border-gray-100">
          <div className="container py-2 md:py-4 flex items-center justify-between w-full">
            {/* Left Side: Logos (Visible on both) */}
            <div className="flex items-center gap-1 sm:gap-4 md:gap-2">
              <Link to="/" className="flex items-center gap-2 sm:gap-2">
                <img src={logo} alt="Haryana Deen Dayal awas Yojna" className="h-14 sm:h-16 md:h-16 w-auto object-contain" />
                <img src={govnLogo} alt="Government" className="h-11 sm:h-12 md:h-14 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Middle: Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">
              <Link to="/about-ddjay" className="hover:text-black transition-colors">About Us</Link>
              <Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link>
              <Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link>
              <Link to="/refund-policy" className="hover:text-black transition-colors hidden lg:block">Refunds & Cancellation</Link>
            </div>

            {/* Desktop Right: Contact & Button */}
            <div className="hidden md:flex flex-col items-end gap-1 text-[10px] md:text-xs font-bold text-gray-700">
              <a href="tel:9818513700" className="flex items-center gap-2 hover:text-[#2c6e3b] transition-colors">
                <Phone className="h-3 w-3" />  9818513700
              </a>
              <a href="mailto:support@haryanadeendayalplot.org.in" className="flex items-center gap-2 hover:text-[#2c6e3b] transition-colors">
                <Mail className="h-3 w-3" /> support@haryanadeendayalplot.org.in
              </a>
              <span className="text-[9px] mb-1 opacity-60">RERA-PKL-1587-2024</span>
              {isExpired ? (
                <Link
                  to="/check-status"
                  className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white px-5 py-1.5 rounded-sm font-black tracking-widest text-[10px] uppercase shadow-sm"
                >
                  Check Result
                </Link>
              ) : (
                <Link
                  to="/inquiry"
                  className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white px-5 py-1.5 rounded-sm font-black tracking-widest text-[10px] uppercase shadow-sm"
                >
                  Apply Now
                </Link>
              )}
            </div>

            {/* Mobile Right Edge: Toggle */}
            <div className="md:hidden flex items-center">
              <button
                className="p-2 text-gray-600 hover:text-[#2c6e3b] transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay/Drawer */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="p-6 space-y-6">
                {/* Mobile Links */}
                <div className="flex flex-col gap-3">
                  <Link to="/" onClick={toggleMenu} className="w-full text-center py-4 rounded-md font-bold text-gray-700 uppercase tracking-widest bg-gray-50 border border-gray-100 shadow-sm text-xs transition-all hover:bg-green-50 hover:text-[#2c6e3b]">Home</Link>
                  <Link to="/about-ddjay" onClick={toggleMenu} className="w-full text-center py-4 rounded-md font-bold text-gray-700 uppercase tracking-widest bg-gray-50 border border-gray-100 shadow-sm text-xs transition-all hover:bg-green-50 hover:text-[#2c6e3b]">About DDJAY</Link>
                  <Link to="/terms" onClick={toggleMenu} className="w-full text-center py-4 rounded-md font-bold text-gray-700 uppercase tracking-widest bg-gray-50 border border-gray-100 shadow-sm text-xs transition-all hover:bg-green-50 hover:text-[#2c6e3b]">Terms & Conditions</Link>
                  <Link to="/contact" onClick={toggleMenu} className="w-full text-center py-4 rounded-md font-bold text-gray-700 uppercase tracking-widest bg-gray-50 border border-gray-100 shadow-sm text-xs transition-all hover:bg-green-50 hover:text-[#2c6e3b]">Contact Us</Link>
                  <Link to="/refund-policy" onClick={toggleMenu} className="w-full text-center py-4 rounded-md font-bold text-gray-700 uppercase tracking-widest bg-gray-50 border border-gray-100 shadow-sm text-xs transition-all hover:bg-green-50 hover:text-[#2c6e3b]">Refunds & Cancellation</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Blinking Apply Now Bar underneath - FIXED AT TOP */}
        {isExpired ? (
          <Link
            to="/check-status"
            className="bg-[#2c6e3b] hover:bg-[#2c6e3b] text-white w-full py-2 flex flex-col items-center justify-center text-sm font-black border-b border-white transition-all uppercase tracking-[0.2em] relative overflow-hidden"
          >
            <span>Check Result Here</span>
          </Link>
        ) : (
          <>
            <Link
              to="/inquiry"
              className="bg-[#2c6e3b] hover:bg-[#2c6e3b] text-white w-full py-2 flex flex-col items-center justify-center text-sm font-black border-b border-white animate-premium-pulse transition-all uppercase tracking-[0.2em] relative overflow-hidden"
            >
              <span className="animate-text-blink">Click Here To Apply Now</span>
            </Link>
            <div className="bg-[#2c6e3b] text-white w-full py-1.5 flex items-center justify-center text-sm font-bold border-b border-white">
              <CountdownTimer targetDate={targetDate} className="text-white" />
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
