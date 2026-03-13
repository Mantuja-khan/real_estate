import { Phone, MessageSquare } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";
import { Link } from "react-router-dom";

const StickyActions = () => {
  const phoneNumber = "9818513700";
  const displayPhone = "98185-13700";

  return (
    <>
      {/* Call Now Button (Bottom Left) */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-4 left-4 z-[60] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        title="Call Now"
      >
        <div className="flex items-center gap-1.5 p-2">
          <div className="flex items-center justify-center h-12 w-12 rounded-full border border-sky-500/30 bg-white/10 backdrop-blur-sm shadow-sm">
            <Phone className="h-6 w-6 text-sky-500" />
          </div>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-xs text-sky-600 px-0 group-hover:px-2">
            Call: {displayPhone}
          </span>
        </div>
      </a>

      {/* Enquire Now Button (Bottom Center) */}
      <Link
        to="/inquiry"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        title="Enquire Now"
      >
        <div className="flex flex-col items-center">
          <div className="animate-pulse bg-[#2c6e3b] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border-2 border-white/20">
            <MessageSquare className="h-5 w-5 fill-current" />
            <span className="font-black text-xs uppercase tracking-tighter">ENQUIRE NOW</span>
          </div>
        </div>
      </Link>

      {/* WhatsApp Button (Bottom Right) */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[60] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        title="WhatsApp Us"
      >
        <div className="flex items-center gap-1.5 p-2">
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-xs text-green-600 px-0 group-hover:px-2 order-first">
            WhatsApp Us
          </span>
          <div className="flex items-center justify-center h-12 w-12 rounded-full border border-green-500/30 bg-white/10 backdrop-blur-sm shadow-sm">
            <img src={whatsappIcon} alt="WhatsApp" className="h-8 w-8 object-contain filter drop-shadow-sm" />
          </div>
        </div>
      </a>
    </>
  );
};

export default StickyActions;