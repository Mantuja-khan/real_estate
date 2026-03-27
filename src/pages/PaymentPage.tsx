import { useNavigate, Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, QrCode, Shield, Info, CreditCard, ArrowLeft, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import qrCodeImg from "@/assets/qrcode.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const inquiryId = searchParams.get("id");
  const [loading, setLoading] = useState(false);
  const amount = 21000;

  const handlePayNow = () => {
    // Redirect to the provided static Easebuzz link
    window.location.href = "https://smartpay.easebuzz.in/268655/1ab49a1a76f044dba7ef9971be694e4c";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 py-10 px-4 font-sans">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#2c6e3b] hover:underline font-bold text-sm group mb-6 transition-all"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Registration Success Phase */}
          <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden mb-8 transform transition-all duration-500 hover:shadow-green-900/5">
            <div className="bg-gradient-to-b from-green-50 to-white p-8 md:p-12 text-center border-b border-green-50">
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-green-900/10 border border-green-100">
                  <CheckCircle2 className="h-12 w-12 text-[#2c6e3b] animate-pulse" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-3">Registration Successful!</h1>
              <p className="text-gray-600 font-semibold text-lg max-w-lg mx-auto leading-relaxed">
                Your application has been logged in our systems. To finalize your plot booking, please proceed to the secure payment gateway.
              </p>
            </div>

            <div className="p-6 md:p-12 flex flex-col items-center bg-white">
              <div className="w-full max-w-sm bg-amber-50/50 border-2 border-dashed border-amber-200 rounded-3xl p-6 md:p-8 mb-8 md:mb-10 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:rotate-12 transition-transform">
                  <CreditCard className="h-10 md:h-12 w-10 md:w-12" />
                </div>
                <p className="text-amber-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-2">Registration Fee</p>
                <div className="text-4xl md:text-6xl font-black text-gray-900 mb-2 tabular-nums">₹{amount.toLocaleString("en-IN")}</div>
                <div className="flex items-center justify-center gap-2 text-[#2c6e3b] text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-white/80 py-1.5 md:py-2 px-3 md:px-4 rounded-full w-fit mx-auto border border-green-100 shadow-sm mt-3 md:mt-4">
                  <Shield className="h-3 w-3" />
                  100% Secure Transaction
                </div>
              </div>

              <Button 
                onClick={handlePayNow} 
                disabled={loading}
                className="w-full max-w-md h-16 md:h-20 text-base md:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-[0_15px_35px_rgba(44,110,59,0.2)] md:shadow-[0_20px_50px_rgba(44,110,59,0.3)] bg-[#2c6e3b] hover:bg-[#1e4d29] text-white rounded-xl md:rounded-2xl transform transition-all active:scale-[0.98] group relative overflow-hidden px-4"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
                  Pay Now Online
                </div>
                <div className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-[-30deg]" />
              </Button>
              
              <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-8 justify-center flex-wrap opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500 scale-90 md:scale-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Visa_2021.svg/300px-Visa_2021.svg.png" alt="Visa" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/300px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo.png/600px-UPI-Logo.png" alt="UPI" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/300px-PayPal.svg.png" alt="PayPal" className="h-5" />
              </div>
            </div>
          </div>

          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t-2 border-gray-200/50"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] leading-none">OR USE MANUAL METHOD</span>
            </div>
          </div>

          {/* Fallback Manual Method */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-20">
            <div className="bg-gray-50/80 px-8 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-3">
                <Landmark className="h-4 w-4 text-[#2c6e3b]" />
                Official Bank Information
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Active</span>
              </div>
            </div>

            <div className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              <div className="p-8 lg:col-span-3 lg:border-r border-gray-100 bg-white">
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "Bank Name", value: "ICICI Bank" },
                    { label: "Account Name", value: "SNKV REAL ESTATE PRIVATE LIMITED" },
                    { label: "Account Number", value: "165105500680", mono: true },
                    { label: "IFSC Code", value: "ICIC0001651", mono: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col border-b border-gray-50 pb-4 last:border-0">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</span>
                      <span className={`text-lg font-black text-gray-800 ${item.mono ? 'font-mono tracking-tighter' : ''}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 lg:col-span-2 bg-gray-50/30 flex flex-col items-center justify-center text-center">
                <div className="relative group p-4 bg-white rounded-3xl shadow-2xl border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                  <img src={qrCodeImg} alt="Official QR Code" className="h-48 w-48 md:h-56 md:w-56 object-contain" />
                </div>
                <div className="mt-8 space-y-2">
                  <div className="flex items-center justify-center gap-3 text-gray-800">
                    <QrCode className="h-5 w-5 text-[#2c6e3b]" />
                    <span className="text-sm font-black uppercase tracking-widest">Scan with Any UPI</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight max-w-[220px] mx-auto leading-relaxed">
                    Instantly pay via Google Pay, PhonePe, or BHIM UPI
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2c6e3b] p-6 text-center">
              <div className="flex items-center justify-center gap-4 text-white">
                <Info className="h-5 w-5 shrink-0 opacity-70" />
                <p className="text-xs font-bold uppercase tracking-[0.05em] leading-relaxed">
                  Important: If using manual transfer, please email your transaction screenshot to <span className="underline">support@snkv.in</span>
                </p>
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
