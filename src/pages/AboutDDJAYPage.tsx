import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.jpeg";
import govnLogo from "@/assets/govn.png";
import { Info, ShieldCheck, Landmark, CheckCircle2, AlertCircle, Maximize } from "lucide-react";

const AboutDDJAYPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />



      <main className="flex-grow">
        {/* Banner Section */}
        <div className="bg-[#2c6e3b] text-white py-12 md:py-20 shadow-inner">
          <div className="container mx-auto px-4 text-center max-w-4x1">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
              Deen Dayal Jan  Awas Yojna (DDJAY)
            </h1>
            <div className="w-24 h-1.5 bg-white mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-sm md:text-lg font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
              Empowering middle and lower-income groups with planned urbanization and affordable high-quality housing solutions across Haryana.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">

            {/* Policy Overview Section */}
            <section className="flex flex-col md:flex-row gap-8 items-start py-8">
              <div className="bg-green-100 p-4 rounded-full text-[#2c6e3b] flex-shrink-0">
                <Info className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Policy Overview</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p>
                    Launched in <span className="text-[#2c6e3b]">2016</span>, the Deen Dayal Jan Awas Yojna (DDJAY) is a flagship affordable housing policy of the <span className="text-gray-800 underline decoration-green-200 underline-offset-4">Government of Haryana</span>. It was envisioned to encourage the development of high-density plotted colonies in low and medium potential towns.
                  </p>
                  <p>
                    Under this scheme, developers can build residential colonies on land ranging from 5 to 15 acres. The initiative bridges the gap between urban demand and affordable supply, ensuring <span className="text-gray-800">planned growth</span> instead of haphazard construction.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Pillars Section - Points */}
            <section className="py-8 space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide border-l-4 border-[#2c6e3b] pl-4">Core Pillars</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="bg-green-100 p-2 rounded-lg text-[#2c6e3b] flex-shrink-0 mt-1">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg uppercase tracking-wider mb-1">Verified Titles</h4>
                    <p className="text-gray-600 leading-relaxed">Government-backed regulatory support ensuring 100% clear and transparent land titles for every individual plot.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0 mt-1">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg uppercase tracking-wider mb-1">Civic Amenities</h4>
                    <p className="text-gray-600 leading-relaxed">Compulsory high-end infrastructure including wide blacktop roads, integrated drainage, lush parks, and dedicated community facilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-500 flex-shrink-0 mt-1">
                    <Maximize className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg uppercase tracking-wider mb-1">Strategic Regional Growth</h4>
                    <p className="text-gray-600 leading-relaxed">Designed strategic development aimed at uplifting smaller towns, balancing urban distribution, and ensuring long-term appreciation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Benefits List */}
            <section className="py-12 border-y border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-gray-800 italic">Key Policy Provisions</h3>
                <div className="w-20 h-1 bg-[#2c6e3b] mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#2c6e3b] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">Affordable residential plots in prime locations of Haryana.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#2c6e3b] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">Simplified development norms and faster approval cycles.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#2c6e3b] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">Transparency through RERA and government monitoring.</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#2c6e3b] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">Excellent long-term investment and appreciation potential.</p>
                </div>
              </div>
            </section>

            {/* Compliance Note */}
            <div className="py-10 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs font-bold uppercase tracking-widest">
                <AlertCircle className="h-4 w-4" /> Official Notice
              </div>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
                All allotments, availability, and project specifications are strictly governed by the <span className="text-[#2c6e3b] font-medium">DDJAY-2016</span> policy norms and Town and Country Planning Department, Haryana.
              </p>
            </div>

            {/* Disclaimer & Footer Info - Re-added with Darker Font */}
            <div className="pt-12 border-t border-gray-200 text-center space-y-6">
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xs text-gray-900 font-bold leading-relaxed italic px-4">
                  <strong>DISCLAIMER:</strong> This is an informational platform for residential plotted projects under DDJAY. Marketing and facilitation are handled by a private real estate entity (SNKV Real Estate Pvt Ltd). It is NOT an official government portal.
                </p>
                <div className="flex justify-center flex-wrap gap-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#2c6e3b]">Official Policy</a>
                  <span className="opacity-20">|</span>
                  <a href="#" className="hover:text-[#2c6e3b]">RERA Haryana</a>
                  <span className="opacity-20">|</span>
                  <a href="#" className="hover:text-[#2c6e3b]">Terms of Use</a>
                  <span className="opacity-20">|</span>
                  <a href="#" className="hover:text-[#2c6e3b]">Privacy Policy</a>
                </div>
                <p className="text-[10px] text-gray-400">© Copyright 2025. Town & Country Planning (DDJAY Guidelines). All Rights Reserved.</p>
              </div>
            </div>



          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutDDJAYPage;
