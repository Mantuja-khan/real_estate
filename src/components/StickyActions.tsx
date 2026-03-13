import { Phone, MessageSquare } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";
import { Link } from "react-router-dom";

const StickyActions = () => {
  const phoneNumber = "9818513700";

  return (
    <div className="fixed md:relative bottom-0 left-0 right-0 z-[60] bg-[#2c6e3b] px-4 py-3 flex items-center justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.2)] border-t border-white/10 md:justify-center md:gap-12 lg:gap-24">
      {/* Call Now Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 text-white hover:scale-110 transition-all duration-300 group"
        title="Call Now"
      >
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 border border-white/20 shadow-inner group-hover:bg-white/25">
          <Phone className="h-6 w-6 fill-current" />
        </div>
        <div className="hidden md:flex flex-col h-10 justify-center">
            <span className="text-[10px] uppercase font-bold text-white/70 leading-none">Call Now</span>
            <span className="text-sm font-black tracking-tight leading-normal">9818513700</span>
        </div>
      </a>

      {/* Enquire Now Button */}
      <Link
        to="/enquire-now"
        className="bg-white text-[#2c6e3b] px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 hover:scale-110 transition-all duration-300 active:scale-95 group border-2 border-[#2c6e3b]"
        title="Enquire Now"
      >
        <MessageSquare className="h-5 w-5 fill-current" />
        <span className="font-black text-xs uppercase tracking-tighter">ENQUIRE NOW</span>
      </Link>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:scale-110 transition-all duration-300 group"
        title="WhatsApp Us"
      >
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 border border-white/20 shadow-inner group-hover:bg-white/25">
          <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7 object-contain" />
        </div>
        <div className="hidden md:flex flex-col h-10 justify-center">
            <span className="text-[10px] uppercase font-bold text-white/70 leading-none">WhatsApp</span>
            <span className="text-sm font-black tracking-tight leading-normal">Online</span>
        </div>
      </a>
    </div>
  );
};

export default StickyActions;