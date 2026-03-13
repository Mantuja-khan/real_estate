import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const LocationBenefitsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-1 text-[#2c6e3b] hover:underline font-bold text-sm group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
          </Link>
        </div>

        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wide">LOCATION BENEFITS</h1>
          <div className="w-16 h-1 bg-[#2c6e3b]"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800 font-medium text-sm sm:text-base">
            <li className="list-none -ml-6 pb-2 border-b border-gray-100 mb-2">
              <span className="font-bold text-[#2c6e3b] text-base sm:text-xl uppercase tracking-wider">Infrastructure</span>
            </li>
            <li>On Palwal Hathin Highway Road.</li>
            <li>Connected with Delhi Mathura Highway NH-44 - 04 mins.</li>
            <li>Palwal Bus Station, Railway Station - 05 mins.</li>
            <li>Palwal District Court, Proposed Metro Station - 05 mins.</li>
            <li>Kundli-Manesar-Palwal (KMP) Expressway - 10 mins.</li>
            <li>Delhi-Mumbai Expressway - 15 mins.</li>
            <li>Delhi-Mumbai Expressway - 15 mins.</li>
            <li>Connected to IMT Sohna (1600 acres industrial township) - 30 mins</li>
            <li>Gurugram, Faridabad, Mathura, Jawar Airport - 40 mins.</li>
            <li>60 minutes drive to International Airport.</li>

            <li className="list-none pt-6 -ml-6 pb-2 border-b border-gray-100 mb-2">
              <span className="font-bold text-[#2c6e3b] text-base sm:text-xl uppercase tracking-wider">Education and health care</span>
            </li>
            <li>Well reputed educational institutions</li>
            <li>Andvacend Educational Institutions</li>
            <li>BR Ambedkar Govt. PG College</li>
            <li>Maharani Kishori Devi College of Education</li>
            <li>Hindustan ITI College, MVN University</li>
            <li>Palwal Civil Hospital, Atlas, Cosmos Hospital</li>
            <li>Galaxy, Guru Nanak, Prabha Eye, Tula Hospital</li>

            <li className="list-none pt-6 -ml-6 pb-2 border-b border-gray-100 mb-2">
              <span className="font-bold text-[#2c6e3b] text-base sm:text-xl uppercase tracking-wider">Entertainment</span>
            </li>
            <li>Dumdama Lake, Sohna Natural Hot Springs.</li>
            <li>Malls & Multiplexes</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationBenefitsPage;
