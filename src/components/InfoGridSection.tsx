import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, Building2, CalendarDays, CircleDot, Hourglass, Info, Factory, MapPin, FileBadge } from "lucide-react";
import priceListImg from "@/assets/price_list.png"; // Assuming this asset exists
import sitePlanImg from "@/assets/3d_image.png"; 

const InfoGridSection = () => {
  const [showPriceList, setShowPriceList] = useState(false);
  const [showSitePlan, setShowSitePlan] = useState(false);

  return (
    <section className="bg-white py-8 w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold uppercase tracking-widest rounded-sm text-sm">
              SUPPORT
            </div>
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-xs rounded-sm break-all">
              support@haryanadeendayalplot.org
            </div>
            
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm mt-6">
              Scheme Information
            </div>
            <div className="border border-gray-300 p-4 rounded-xl text-sm space-y-2 text-gray-700 font-medium">
              <ul className="list-disc pl-4 space-y-1">
                <li>HRERA-PKL-JJR-740-2025</li>
                <li>Colonizer: Chintamanis North Avenue</li>
                <li>Location: Sec-03, Badsa</li>
                <li>Last Date of Apply: 28/12/2025</li>
                <li>Allocation Date: 30/12/2025</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-4 rounded-xl text-sm space-y-2 text-gray-700 font-medium pb-8 mt-4">
              <ul className="list-disc pl-4 space-y-1">
                <li>Floor plan : – G+4</li>
                <li>Clubhouse area : 60000 sq ft</li>
                <li>Gated Township</li>
                <li>No of unit on each floor – 1</li>
                <li>Society internal road - 9m,10m,15m</li>
                <li>Internal Developments : STP, UGT, Drainage, commercial.</li>
                <li>Green area - 7.5%</li>
                <li>FAR: 2.58%</li>
                <li>Plot density: 18 people</li>
                <li>CCTV Service line Available</li>
                <li>24*7 Security</li>
              </ul>
            </div>
            
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm mt-4">
              Allotment Results -Plots
            </div>
          </div>
          
          {/* CENTER COLUMN */}
          <div className="md:col-span-6 flex flex-col gap-6 border-l border-r border-gray-200 px-2 sm:px-6">
            
            {/* Header Titles */}
            <div className="space-y-3 bg-[#30485a] text-white p-4 rounded-t-lg rounded-b-sm shadow-sm">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-200 font-medium">
                  <FileText className="h-4 w-4 mt-0.5" />
                  <p>Scheme RERA : HRERA-PKL-JJR-740-2025</p>
                </div>
                <div className="flex items-start gap-2 text-base sm:text-lg font-bold uppercase">
                  <Building2 className="h-5 w-5 mt-0.5 shrink-0" />
                  <p>PROJECT NAME : CHINTAMANIS NORTH AVENUE</p>
                </div>
            </div>

            {/* Important Dates Box */}
            <div className="bg-[#fcf8ef] border-l-4 border-[#e5a03e] p-5 rounded-r-lg shadow-sm mx-1">
              <div className="flex items-center gap-2 text-[#e5a03e] font-bold text-base sm:text-lg mb-4">
                <CalendarDays className="h-5 w-5" />
                <p>Important Dates</p>
              </div>
              <div className="space-y-4 text-gray-700 font-medium text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <CircleDot className="h-4 w-4 text-[#30485a] shrink-0 fill-current" />
                  <p><span className="text-[#e5a03e] font-bold uppercase">Application Live Now</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <Hourglass className="h-4 w-4 text-[#30485a] shrink-0 fill-current" />
                  <p><span className="text-[#e5a03e] font-bold">Last Date of Registration:</span> 28-03-2026 23:59:00</p>
                </div>
                <div className="flex items-center gap-3">
                  <CircleDot className="h-4 w-4 text-[#30485a] shrink-0 fill-current" />
                  <p><span className="text-[#e5a03e] font-bold">Result Date:</span> 30-03-2026 00:00:00</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-[#30485a] flex-shrink-0" />
                  <p><span className="text-[#e5a03e] font-bold">Allotment Date:</span> 31-03-2026 16:00:00</p>
                </div>
              </div>
            </div>

            {/* Project Details Box */}
            <div className="mx-1 mt-2">
              <div className="flex items-center gap-2 text-[#30485a] font-bold text-base sm:text-lg mb-2">
                <Info className="h-5 w-5 fill-current text-white bg-[#30485a] rounded-full p-0.5" />
                <p>Project Details</p>
              </div>
              <hr className="border-gray-800 mb-6 border-[1.5px]" />
              
              <div className="space-y-5 text-xs sm:text-sm">
                <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                  <div className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px] text-[#e5a03e] font-bold">
                    <div className="bg-[#30485a] p-1.5 rounded-full"><Factory className="h-3 w-3 text-white" /></div>
                    Colonizer:
                  </div>
                  <p className="text-gray-700 font-bold mt-1 max-w-[200px] leading-tight break-words">SNKV REAL ESTATE PRIVATE LIMITED</p>
                </div>
                
                <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                  <div className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px] text-[#e5a03e] font-bold">
                    <div className="bg-[#30485a] p-1.5 rounded-full"><MapPin className="h-3 w-3 text-white" /></div>
                    Location:
                  </div>
                  <p className="text-gray-700 font-bold mt-1">Sector 3, Badsa, HARYANA</p>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                  <div className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px] text-[#e5a03e] font-bold">
                    <div className="bg-[#30485a] p-1.5 rounded-full"><FileBadge className="h-3 w-3 text-white" /></div>
                    RERA Status:
                  </div>
                  <p className="text-gray-700 font-bold mt-1">Registered & Approved</p>
                </div>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col space-y-4 font-semibold text-blue-500 underline text-lg pt-4 mx-2">
              <button 
                onClick={() => setShowPriceList(true)} 
                className="text-left hover:text-blue-700 underline flex w-fit"
              >
                Price List
              </button>
              <a href="#" className="hover:text-blue-700 underline flex w-fit">
                Scheme Brochure
              </a>
              <a href="#" className="hover:text-blue-700 underline flex w-fit">
                Scheme Certificate
              </a>
              <button 
                onClick={() => setShowSitePlan(true)} 
                className="text-left hover:text-blue-700 underline flex w-fit"
              >
                Scheme Site Plan
              </button>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold uppercase tracking-widest rounded-sm text-sm">
              SUPPORT
            </div>
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm rounded-sm">
              96 43 16 27 69
            </div>
            
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-xs tracking-wider rounded-sm mt-6">
              REGISTRATION SECTION
            </div>
            <div className="text-center font-bold text-gray-800 py-2">
              <p className="text-sm">Registration Amount -</p>
              <p className="text-xl">₹21,000/-</p>
            </div>
            
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm mt-2">
              Location Benefits
            </div>
            <div className="border border-gray-300 p-4 rounded-xl text-sm space-y-3 text-gray-700 font-medium">
              <ul className="list-disc pl-4 space-y-2">
                <li>Arogyadham AIIMS 2 Hospital 5 km</li>
                <li>SGT University 8 km</li>
                <li>Ashok Singhal university of vaidik sciences and technology in 68 acres distance 1.5 km from site</li>
                <li>Reliance Met city has received a licensed of 2153 acres of which 1350 acres is for industrial acres</li>
                <li>Just opposite to KMP Expressway</li>
                <li>warehouses of Toyota , Tata, Mahindra, Hyundai near to site location approx 4 km.</li>
                <li>New railway orbital corridor has been operated opposite to KMP Expressway</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <Dialog open={showPriceList} onOpenChange={setShowPriceList}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-1 bg-transparent border-none shadow-none">
          <img 
            src={priceListImg} 
            alt="Price List" 
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              // Fallback if the image doesn't load because we're using a generic name
              (e.target as HTMLImageElement).src = 'https://i.pinimg.com/736x/87/00/6f/87006f15714f494921ea02cc829ccadd.jpg';
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={showSitePlan} onOpenChange={setShowSitePlan}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-1 bg-transparent border-none shadow-none">
          <img 
            src={sitePlanImg} 
            alt="Scheme Site Plan" 
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              // Fallback
              (e.target as HTMLImageElement).src = 'https://i.pinimg.com/736x/87/00/6f/87006f15714f494921ea02cc829ccadd.jpg';
            }}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InfoGridSection;
