import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, PhoneCall, Mail } from "lucide-react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">CONTACT US</h1>
          <div className="w-16 h-1 bg-red-600"></div>
        </div>

        {/* Full-width Map */}
        <div className="w-full h-[400px] bg-gray-100 mb-12 shadow-sm border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.488667597148!2d77.02705359265749!3d28.42312674251219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1875e52cbe9b%3A0xb3fc6f6db6a2b8e3!2sSector%2038%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1709971234567!5m2!1sen!2sin"
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
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-6">REACH US THROUGH</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-[#d9a05b] mt-0.5 shrink-0 fill-current" />
              <div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  <span className="font-bold">SNKV REAL ESTATE PRIVATE LIMITED</span><br />
                  H.NO.- 746 P,SECTOR-38<br />Gurgaon-122001,Haryana<br />
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <PhoneCall className="h-5 w-5 text-[#d9a05b] shrink-0 fill-current" />
              <div>
                <p className="text-gray-800 font-medium">98185-13700</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-[#d9a05b] shrink-0 fill-current" />
              <div>
                <p className="text-gray-800 font-medium">support@haryanadeendayalplot.org.in</p>
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
