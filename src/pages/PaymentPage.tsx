import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, QrCode, Shield, Info, CreditCard, ArrowLeft, Phone } from "lucide-react";
import qrCodeImg from "@/assets/qrcode.png";
import { Button } from "@/components/ui/button";

const PaymentPage = () => {
  const navigate = useNavigate();
  const amount = 21000;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Government Style Header */}
          <div className="bg-white border-b-4 border-[#2c6e3b] p-4 md:p-6 rounded-t-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex h-12 w-12 rounded-full bg-green-50 items-center justify-center border border-green-100">
                  <Shield className="h-6 w-6 text-[#2c6e3b]" />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-black text-[#2c6e3b] uppercase tracking-wide leading-tight">Registration Fee Payment</h1>
                  <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1 mt-1 uppercase tracking-tighter">
                    Official Booking & Allotment Verification Portal
                  </p>
                </div>
              </div>
              <div className="bg-[#fcf8ef] px-4 py-2 md:px-5 md:py-3 rounded border border-[#e5a03e]/30 shadow-sm relative overflow-hidden text-right">
                <span className="text-[9px] md:text-[10px] font-black text-[#e5a03e] uppercase block tracking-widest relative z-10">Pay Amount</span>
                <span className="text-xl md:text-2xl font-black text-gray-800 relative z-10">₹{amount.toLocaleString("en-IN")}</span>
                <p className="text-[8px] md:text-[9px] font-bold text-[#e5a03e] uppercase mt-0.5 relative z-10">Effective: March 12, 2026</p>
                <CreditCard className="absolute -right-2 -bottom-2 h-10 w-10 md:h-12 md:w-12 opacity-5 -rotate-12" />
              </div>
            </div>
          </div>

          {/* Simple Structured Display: Bank Left, QR Right */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50/50 px-4 md:px-6 py-3 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[11px] md:text-sm font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-600 flex items-center gap-2">
                <Landmark className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#2c6e3b]" />
                Official Account Details
              </h2>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-bold text-green-600 uppercase">Verified Active</span>
              </div>
            </div>

            <div className="p-0 grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Bank Details Table */}
              <div className="p-5 md:p-8 md:border-r border-gray-100 bg-white">
                <table className="w-full text-xs md:text-sm">
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-3 md:py-4 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">Bank Name</td>
                      <td className="py-3 md:py-4 font-black text-gray-800 text-sm md:text-base">ICICI Bank</td>
                    </tr>
                    <tr>
                      <td className="py-3 md:py-4 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">A/C Name</td>
                      <td className="py-3 md:py-4 font-black text-gray-800 uppercase text-[11px] md:text-sm leading-tight">SNKV REAL ESTATE PRIVATE LIMITED</td>
                    </tr>
                    <tr>
                      <td className="py-3 md:py-4 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">A/C Number</td>
                      <td className="py-3 md:py-4 font-black text-gray-900 font-mono text-base md:text-lg tracking-tighter">165105500680</td>
                    </tr>
                    <tr>
                      <td className="py-3 md:py-4 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">IFSC Code</td>
                      <td className="py-3 md:py-4 font-black text-gray-900 font-mono text-base md:text-lg tracking-tighter">ICIC0001651</td>
                    </tr>
                    <tr>
                      <td className="py-3 md:py-4 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">Branch</td>
                      <td className="py-3 md:py-4 font-black text-gray-700 text-xs md:text-sm uppercase tracking-tight">UTT Sector 49, Gurgaon</td>
                    </tr>
                    <tr>
                      <td className="py-3 md:py-4 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">Mobile</td>
                      <td className="py-3 md:py-4 font-black text-[#2c6e3b] text-sm md:text-base flex items-center gap-2">
                        <Phone className="h-3 md:h-3.5 w-3 md:w-3.5" /> 9015634665
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right Side: QR Code Display */}
              <div className="p-6 md:p-8 bg-gray-50/30 flex flex-col items-center justify-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2c6e3b]/20 to-[#1e4d29]/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative border-4 border-white bg-white p-2 md:p-3 rounded-xl shadow-xl">
                    <img src={qrCodeImg} alt="Official QR Code" className="h-40 w-40 md:h-56 md:w-56 object-contain" />
                  </div>
                </div>
                
                <div className="mt-5 md:mt-6 space-y-1 md:space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <QrCode className="h-4 w-4 md:h-5 md:w-5 text-[#2c6e3b]" />
                    <span className="text-xs md:text-sm font-black text-gray-700 uppercase tracking-widest">Scan to Pay</span>
                  </div>
                  <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-tight max-w-[180px] md:max-w-[200px] leading-relaxed">
                    Use any UPI App (GPay, PhonePe, BHIM) to scan and pay the registration fee.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Notice Area */}
            <div className="bg-[#2c6e3b] p-4 text-center">
              <div className="flex items-center justify-center gap-3 text-white">
                <Info className="h-4 w-4 shrink-0" />
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-90">
                  Please keep a screenshot of the transaction for future reference and verification.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation/Back Link */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 px-2">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#2c6e3b] transition-colors uppercase tracking-widest group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to registration home
            </button>
            
            <div className="flex items-center gap-4">
               <Shield className="h-8 w-8 text-gray-200" />
               <div className="text-left">
                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Security Protocol</p>
                 <p className="text-xs font-bold text-gray-500">256-bit SSL encrypted verification portal</p>
               </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
