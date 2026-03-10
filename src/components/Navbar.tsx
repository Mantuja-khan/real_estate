import { Link } from "react-router-dom";
import { Home, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/deen_logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-destructive text-destructive-foreground py-1 px-2 md:py-1.5 md:px-4 text-[10px] sm:text-xs font-semibold md:text-sm tracking-wide">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-center gap-1 sm:gap-0">
          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3 md:h-3.5 md:w-3.5" /> 9818513700</span>
            <span className="flex items-center gap-1"><Mail className="h-3 w-3 md:h-3.5 md:w-3.5" /> info@haryanadeeendayal.com</span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex flex-col items-center justify-center">
          <img src={logo} alt="NKV Emerald Avenue Logo" className="h-8 md:h-10 lg:h-14 w-auto object-contain" />
          <span className="text-green-600 font-bold text-xs md:text-sm tracking-wider mt-0.5">NKV EMERALD AVENUE</span>
        </Link>

        {/* Mobile: show Check Results directly */}
        <div className="flex xl:hidden items-center gap-2">
          <Link to="/check-status">
            <Button variant="outline" size="sm">Check Results</Button>
          </Link>
          <button onClick={() => setOpen(!open)} className="ml-1">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-muted-foreground transition-colors whitespace-nowrap">Home</Link>
          <Link to="/terms" className="hover:text-muted-foreground transition-colors whitespace-nowrap">Terms & Conditions</Link>
          <Link to="/check-status" className="whitespace-nowrap">
            <Button variant="outline" size="sm">Check Results</Button>
          </Link>
          <Link to="/inquiry" className="whitespace-nowrap">
            <Button size="sm">Apply Now</Button>
          </Link>
        </div>
      </div>

      {/* Mobile dropdown — other links */}
      {open && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
          <Link to="/terms" onClick={() => setOpen(false)} className="py-2">Terms & Conditions</Link>
        </div>
      )}
    </nav>
    <div className="bg-destructive text-destructive-foreground overflow-hidden py-1.5 md:py-2 flex whitespace-nowrap">
      <div className="animate-marquee font-bold text-xs md:text-sm tracking-wider">
        ATTENTION REGISTRATION OPEN !!!! दीन दयाल जन आवास योजना (DDJAY) में अपना फ्लोर बुक करवाए *** LAST DATE OF REGISTRATION: 29 MARCH 2026 *** RESULT DATE: 30 MARCH 2026 *** ALLOTMENT DATE: 31 MARCH 2026 *** Registration Amount is Fully Refundable for Unsuccessful Applicants Within 60 Days
      </div>
    </div>
    </>
  );
};

export default Navbar;
