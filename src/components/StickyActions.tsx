import { Phone, MessageCircle } from "lucide-react";

const StickyActions = () => {
  const phoneNumber = "9818513700";
  const displayPhone = "98185-13700";

  return (
    <>
      {/* Call Now Button (Bottom Left) - Sky Blue */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-4 left-4 z-[60] bg-sky-500 text-white p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-1.5"
        title="Call Now"
      >
        <div className="p-1.5 rounded-full">
          <Phone className="h-4 w-4" />
        </div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-xs px-0 group-hover:px-1.5">
          Call: {displayPhone}
        </span>
      </a>

      {/* WhatsApp Button (Bottom Right) - Green */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[60] bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-1.5"
        title="WhatsApp Us"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-xs px-0 group-hover:px-1.5">
          WhatsApp Us
        </span>
        <div className="p-1.5 rounded-full">
          <MessageCircle className="h-4 w-4" />
        </div>
      </a>
    </>
  );
};

export default StickyActions;