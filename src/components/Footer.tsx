import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import logo from "@/assets/deen_logo.png";
import footerImg from "@/assets/footer.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <img src={logo} alt="NKV Emerald Avenue Logo" className="h-16 w-auto object-contain bg-white rounded-md p-1" />
          </div>
          <div className="flex items-center gap-2 font-display text-xl font-bold mb-3 justify-center md:justify-start">
            <Home className="h-5 w-5" />
            Haryana Deen Dayal Awaas Yojna
          </div>
          <p className="text-sm opacity-70 max-w-xs mx-auto md:mx-0">
            Our business is built on close relationships. We help you find your dream home.
          </p>
        </div>

        <div className="flex justify-center items-center py-4 md:py-0 w-full h-full border-y border-white/10 my-4 md:border-none md:my-0">
          <img 
            src={footerImg} 
            alt="Partners and Affiliations" 
            className="w-full max-w-[280px] h-full object-contain mix-blend-screen px-4" 
          />
        </div>

        <div className="flex flex-col gap-2 text-sm items-center md:items-end w-full">
          <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/terms" className="opacity-70 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          <Link to="/privacy-policy" className="opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link to="/refund-policy" className="opacity-70 hover:opacity-100 transition-opacity">Refund & Cancellation Policy</Link>
          <Link to="/check-status" className="opacity-70 hover:opacity-100 transition-opacity">Check Results</Link>
          <Link to="/inquiry" className="opacity-70 hover:opacity-100 transition-opacity">Apply Now</Link>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-sm opacity-70 text-center flex flex-col items-center justify-center gap-2">
        <p>© 2026 Shree Deen Dayal Jaan Awaas Yojna. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
