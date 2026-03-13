import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info, ShieldCheck, Landmark, CheckCircle2, AlertCircle, Maximize, Home, ArrowLeft } from "lucide-react";

const AboutDDJAYPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />



      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-6">
          <Link to="/" className="inline-flex items-center gap-1 text-[#2c6e3b] hover:underline font-bold text-sm mb-4 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
          </Link>
        </div>
        {/* Banner Section */}
        <div className="bg-[#2c6e3b] text-white py-12 md:py-20 shadow-inner">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
              Deen Dayal Jan  Awas Yojna (DDJAY)
            </h1>
            <div className="w-24 h-1.5 bg-white mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-sm md:text-lg font-medium opacity-90 mx-auto leading-relaxed">
              Empowering middle and lower-income groups with planned urbanization and affordable high-quality housing solutions across Haryana.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="mx-auto space-y-8 text-gray-800 leading-relaxed text-base md:text-lg font-sans">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c6e3b] mb-6">About Deen Dayal Jan Awas Yojna (DDJAY)</h2>
            <p>
              Deen Dayal Jan Awas Yojna (DDJAY) is an affordable housing policy launched by the Government of Haryana in 2016 to encourage the development of plotted colonies in low and medium potential towns across the state. The initiative aims to provide affordable and high-quality housing solutions for all sections of society, especially middle-income and lower-income groups.
            </p>
            <p>
              Under DDJAY, private developers can develop residential plotted colonies on land ranging between 5 acres and 15 acres. The policy ensures planned urbanization by mandating proper infrastructure such as roads, drainage systems, parks, and community facilities. This leads to balanced regional development and makes homeownership more attainable for common citizens.
            </p>
            <p>
              The scheme promotes transparency, faster approval processes, and simplified development norms. Homebuyers benefit from government-backed regulatory support, clear land titles, and better connectivity. Overall, DDJAY projects offer excellent investment potential due to affordability, strong infrastructure, and long-term growth prospects.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-[#2c6e3b]">Key Benefits of DDJAY:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Affordable residential plots with verified clear titles.</li>
                <li>Planned infrastructure with essential civic amenities.</li>
                <li>Transparent, government-supported policy framework.</li>
                <li>Faster approval and simplified norms for developers.</li>
                <li>Boosts urban development in smaller towns and cities.</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-[#2c6e3b]">Why Consider Plots Under DDJAY?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Policy-based plotted development</li>
                <li>Designed for residential end-use</li>
                <li>Regulated planning framework</li>
                <li>Suitable for long-term living and investment</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200 mt-8 pb-12">
              <h3 className="text-xl font-bold text-red-700">Important Note</h3>
              <p>
                All project details, availability, and allotments are subject to approvals, policy norms, and authority permissions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutDDJAYPage;
