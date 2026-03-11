import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LocationBenefitsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center uppercase tracking-wide">LOCATION BENEFITS</h1>
          <div className="w-16 h-1 bg-[#2c6e3b]"></div>
        </div>

        <div className="bg-gray-50 p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm max-w-3xl mx-auto mb-10">
          <ul className="list-disc pl-6 space-y-4 text-gray-800 font-medium text-lg">
            <li className="list-none -ml-6 pb-1"><span className="font-bold text-[#2c6e3b] text-xl uppercase tracking-wider">Infrastructure</span></li>
            <li>On Palwal Hathin Highway Road.</li>
            <li>Connected with Delhi Mathura Highway NH-44 - 04 mins.</li>
            <li>Connected to IMT Sohna (1600 acres industrial township) - 30 mins</li>
            <li>60 minutes drive to International Airport.</li>
            <li>Delhi-Mumbai Expressway - 15 mins.</li>
            <li>Kundli-Manesar-Palwal (KMP) Expressway - 10 mins.</li>
            <li>Palwal Bus Station, Railway Station - 5 mins.</li>
            <li>Palwal District Court, Proposed Metro Station - 05 mins.</li>
            <li>Gurugram, Faridabad, Mathura, Jawar Airport - 40 mins.</li>
            
            <li className="list-none pt-4 -ml-6 pb-1"><span className="font-bold text-[#2c6e3b] text-xl uppercase tracking-wider">Education and health care</span></li>
            <li>Well reputed educational institutions</li>
            <li>Andvacend Educational Institutions,</li>
            <li>BR Ambedkar Govt. PG College,</li>
            <li>Maharani Kishori Devi College of Education,</li>
            <li>Hindustan ITI College, MVN University.</li>
            <li>Palwal Civil Hospital, Atlas, Cosmos Hospital,</li>
            <li>Galaxy, Guru Nanak, Prabha Eye, Tula Hospital</li>
            
            <li className="list-none pt-4 -ml-6 pb-1"><span className="font-bold text-[#2c6e3b] text-xl uppercase tracking-wider">Entertainment</span></li>
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
