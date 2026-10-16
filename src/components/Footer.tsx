import { Link } from "react-router-dom";
import { Phone, Mail, Map } from "lucide-react";

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
            <div className="flex items-center gap-3 mb-1">
              <Mail className="h-5 w-5 text-gray-700" />
              <h3 className="text-xs sm:text-sm text-gray-700 font-bold">
                EMAIL
              </h3>
            </div>

            <a
              href="mailto:Sandeepchoudharydm@gmail.com"
              className="text-xs sm:text-sm font-medium text-gray-600 pl-1 hover:text-[#2c6e3b] transition-colors"
            >
              Sandeepchoudharydm@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3 mb-1">
              <Phone className="h-5 w-5 text-gray-700" />
              <h3 className="text-xs sm:text-sm text-gray-700 font-bold">
                TOLL FREE HELPLINE
              </h3>
            </div>

            <a
              href="tel:8199072758"
              className="text-xs sm:text-sm font-medium text-gray-800 hover:text-[#2c6e3b] pl-1 transition-colors"
            >
              81990 72758
            </a>
          </div>

          {/* Registered Office */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3 mb-1 text-gray-700">
              <Map className="h-5 w-5" />
              <h3 className="text-xs sm:text-sm font-bold">
                REGISTERED OFFICE
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-gray-700 md:pl-1 leading-relaxed max-w-xs text-center md:text-left">
              <span className="font-bold">
                SNKV REAL ESTATE PRIVATE LIMITED
              </span>
              <br />
              H.NO.- 746 P, SECTOR-38,
              <br />
              Gurgaon-122001, Haryana
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Green Banner */}
    <div className="bg-[#2c6e3b] w-full pt-8 pb-8 px-4">
      <div className="container mx-auto max-w-5xl text-left sm:text-center text-white text-xs sm:text-sm">
        {/* Disclaimer & Privacy */}
        <div className="mb-6 space-y-4">
          <p className="flex flex-wrap items-center justify-start sm:justify-center gap-x-3 gap-y-2 font-medium tracking-wide mb-6">
            Disclaimer: This website is an informational platform for
            residential plotted projects offered under the Deen Dayal Jan Awas
            Yojana (DDJAY) policy of the Haryana Government. Marketing and
            customer facilitation services are provided by a privately
            operated real estate promotion entity. This is not an official
            government website.
          </p>

          <p className="flex flex-wrap items-center justify-start sm:justify-center gap-x-3 gap-y-2 font-medium tracking-wide mb-6">
            Your privacy is important to us. Any information you share with us
            is kept secure and used only to provide you with better services
            and support.
          </p>
        </div>

        {/* Copyright */}
        <div className="mb-6">
          <p className="tracking-wide mb-4 opacity-90">
            © Copyright 2025. All Rights Reserved
          </p>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-x-3 gap-y-2 tracking-wide">
            <Link
              to="/about-ddjay"
              className="hover:text-gray-200 transition-colors"
            >
              About Us
            </Link>

            <span className="opacity-30">|</span>

            <Link
              to="/contact"
              className="hover:text-gray-200 transition-colors"
            >
              Contact Us
            </Link>

            <span className="opacity-30">|</span>

            <Link
              to="/privacy-policy"
              className="hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="opacity-30">|</span>

            <Link
              to="/terms"
              className="hover:text-gray-200 transition-colors"
            >
              Terms & Conditions
            </Link>

            <span className="opacity-30">|</span>

            <Link
              to="/refund-policy"
              className="hover:text-gray-200 transition-colors"
            >
              Refund & Cancellation
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-white/80 tracking-wide">
            Designed &amp; Developed by{" "}
            <a
              href="https://metawebkit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline underline-offset-4 decoration-white/70 hover:text-yellow-300 hover:decoration-yellow-300 transition-colors duration-300"
            >
              Meta Webkit
            </a>
          </p>
        </div>
        {/* Cookie Notice */}
        <div className="pt-6 border-t border-white/10 mt-6">
          <p className="text-[10px] sm:text-xs text-white/70 font-normal leading-relaxed text-center max-w-4xl mx-auto">
            By continuing to use this website, you consent to the use of
            cookies and agree to abide by our terms and conditions. Users agree
            not to initiate unnecessary legal disputes related to the use of
            this website.
          </p>
        </div>

        {/* Designed & Developed By */}

      </div>
    </div>


  </footer>
);

export default Footer;
