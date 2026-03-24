import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, PhoneCall, Mail, Home, ArrowLeft } from "lucide-react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-1 text-[#2c6e3b] hover:underline font-bold text-sm mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">CONTACT US</h1>
          <div className="w-16 h-1 bg-red-600"></div>
        </div>

        {/* Full-width Map */}
        <div className="w-full h-[400px] bg-gray-100 mb-12 shadow-sm border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=28.1333847,77.3106766&hl=en&z=12&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SNKV Real Estate Office Map"
          ></iframe>
        </div>

        {/* Reach Us Through Details */}
        <div className="max-w-2xl px-4">
          <h2 className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase mb-6 font-bold">REACH US THROUGH</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-[#d9a05b] mt-0.5 shrink-0 fill-current" />
              <div>
                <p className="text-gray-800 font-medium leading-relaxed text-xs sm:text-sm">
                  <span className="font-bold">SNKV REAL ESTATE PRIVATE LIMITED</span><br />
                  H.NO.- 746 P,SECTOR-38<br />Gurgaon-122001,Haryana<br />
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <PhoneCall className="h-5 w-5 text-[#d9a05b] shrink-0 fill-current" />
              <div>
                <p className="text-gray-800 font-medium text-xs sm:text-sm">9818513700</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-[#d9a05b] shrink-0 fill-current" />
              <div>
                <p className="text-gray-800 font-medium text-xs sm:text-sm">support@haryanadeendayalplot.org.in</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
