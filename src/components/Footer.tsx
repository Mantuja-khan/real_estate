import { Link } from "react-router-dom";
import { Phone, Mail, Map, MessageCircle, PhoneCall } from "lucide-react";

const Footer = () => (
  <footer className="w-full">
    {/* Contact Us Top Section */}
    <div className="bg-white border-t border-gray-200">
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
            <a href="mailto:support@haryanadeendayalplot.org.in" className="text-base md:text-lg text-gray-600 font-medium pl-1 hover:text-[#2c6e3b]">
              support@haryanadeendayalplot.org.in
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-8 w-8 text-gray-700" />
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wider">TOLL FREE HELPLINE</span>
                <a href="tel:9818513700" className="text-lg md:text-2xl font-medium text-gray-800 hover:text-[#2c6e3b]">
                  98185-13700
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3 mb-2 text-gray-700">
              <Map className="h-8 w-8" />
              <h3 className="text-xl md:text-3xl font-light uppercase">REGISTERED OFFICE</h3>
            </div>
            <div className="text-sm md:text-base text-gray-700 font-medium md:pl-0 leading-relaxed max-w-xs text-center md:text-left">
              <span className="font-bold">SNKV REAL ESTATE PRIVATE LIMITED</span><br />
              H.NO.- 746 P,SECTOR-38,<br />
              Gurgaon-122001,Haryana<br />
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom Green Banner */}
    <div className="bg-[#2c6e3b] w-full py-8 px-4">
      <div className="container mx-auto max-w-5xl text-left sm:text-center text-white text-xs md:text-sm">
        <div className="mb-6 space-y-4">
          <p className="font-normal text-sm md:text-base opacity-100 uppercase tracking-tight">
            Disclaimer: This website is an informational platform for residential plotted projects offered under the Haryana Deen Dayal Jan Awaas Yojna (DDJAY) policy of the Haryana Government. Marketing and customer facilitation services are provided by a privately operated real estate promotion entity. This is not an official government website.
          </p>

        </div>

        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-x-3 gap-y-2 font-medium tracking-wide mb-6">
          <span className="hidden md:inline text-white/30">|</span>
          <Link to="/about" className="hover:text-gray-200 transition-colors uppercase">About</Link>
          <span className="opacity-30">|</span>
          <Link to="/contact" className="hover:text-gray-200 transition-colors uppercase">Contact</Link>
          <span className="opacity-30">|</span>
          <Link to="/privacy-policy" className="hover:text-gray-200 transition-colors uppercase">Privacy Policy</Link>
          <span className="opacity-30">|</span>
          <Link to="/terms" className="hover:text-gray-200 transition-colors uppercase">Terms & Conditions</Link>
        </div>


      </div>
    </div>
  </footer>
);

export default Footer;
