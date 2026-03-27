import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, Building2, CalendarDays, CircleDot, Hourglass, Info, Factory, MapPin, FileBadge } from "lucide-react";
import priceListPdf from "@/assets/pricelist.pdf";
import brochurePdf from "@/assets/brochure.pdf";
import sitePlanImg from "@/assets/3d_image.png";
import licenceCertificatePdf from "@/assets/licence_certificate.pdf";
import reracertificate from "../assets/rera_certificate.pdf"

const InfoGridSection = () => {
  const [showSitePlan, setShowSitePlan] = useState(false);

  return (
    <section className="bg-white pb-8 w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* LEFT COLUMN */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm mt-6">
              Scheme Information
            </div>
            <div className="sm:border border-gray-300 p-4 sm:rounded-xl rounded-none text-sm space-y-2 text-gray-700 font-medium border-0">
              <ul className="list-disc pl-4 space-y-1">
                <li>HRERA-PKL-PWL-659-2025</li>
                <li>Colonizer: NKV Emerald Avenue</li>
                <li>Location : Sector-9, Palwal</li>
                <li>Last Date of Apply: 29/03/2026</li>
                <li>Allotment Date: 31/03/2026</li>
              </ul>
            </div>

            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm mt-6 ">
              Important Details
            </div>
            <div className="sm:border border-gray-300 p-4 sm:rounded-xl rounded-none text-sm space-y-4 text-gray-700 font-medium border-0">
              <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2">
                <span>Payment Plan</span>
                <span className="text-[#2c6e3b] font-bold text-sm">40 : 60</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>Bank Loan</span>
                <span className="text-[#2c6e3b] font-bold text-sm">Available</span>
              </div>
            </div>

            <div className="sm:border border-gray-300 p-4 sm:rounded-xl rounded-none text-sm space-y-2 text-gray-700 font-medium pb-8 mt-4 border-0">
              <ul className="list-disc pl-4 space-y-1">
                <li>Gated Township</li>
                <li>Society Internal Road - 9 Meter</li>
                <li>Internal Developments : STP, UGT, Drainage, commercial.</li>
                <li>Green area</li>
                <li>24x7 CCTV Surveillance</li>
                <li>24*7 Security</li>
                <li>Play School</li>
              </ul>
            </div>
          </div>
          {/* CENTER COLUMN */}
          <div className="md:col-span-6 flex flex-col gap-6 sm:border-l sm:border-r border-gray-200 px-0 sm:px-6 border-0">

            {/* Header Titles */}
            <div className="space-y-3 bg-[#2c6e3b] text-white p-4 sm:rounded-t-lg sm:rounded-b-sm sm:shadow-sm rounded-none shadow-none">
              <div className="flex items-start gap-2 text-base sm:text-lg font-bold ">
                <FileText className="h-5 w-5 mt-0.5" />
                <p>Scheme Rera : HRERA-PKL-PWL-659-2025</p>
              </div>
              <div className="flex items-start gap-2 text-base sm:text-lg font-bold ">
                <Building2 className="h-5 w-5 mt-0.5 shrink-0" />
                <p>Project Name : NKV Emerald Avenue </p>
              </div>
            </div>
            {/* Merged Info Box */}
            <div className="sm:border border-gray-300 p-5 sm:rounded-xl rounded-none sm:shadow-sm mx-0 sm:mx-2 space-y-8 border-0 shadow-none">
              {/* Important Dates Segment */}
              <div>
                <div className="flex items-center gap-2 text-[#30485a] font-bold text-base sm:text-lg mb-4">
                  <p>Important Dates</p>
                </div>
                <div className="space-y-4 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <p>
                      <span className="text-green-600 font-bold ">
                        Application Live Now
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p><span className="text-gray-900 ">Last Date of Registration:</span> 29-03-2026</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p><span className="text-gray-900 ">Result Date:</span> 30-03-2026</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p><span className="text-gray-900 ">Allotment Date:</span> 31-03-2026</p>
                  </div>
                </div>
              </div>

              {/* Project Details Segment */}
              <div>
                <div className="flex items-center gap-2 text-[#30485a] font-bold text-base sm:text-lg mb-4">
                  <p>Project Details</p>
                </div>

                <div className="space-y-4 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <p>
                      <span className="text-gray-900">Colonizer:</span> Snkv Real Estate Private Limited
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <p>
                      <span className="text-gray-900">Location:</span> Sector 09, Palwal, Haryana
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <p>
                      <span className="text-gray-900">RERA Status:</span> Registered & Approved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col space-y-4 pt-4 mx-0 sm:mx-2">

              <a
                href={priceListPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm w-full transition-colors block"
              >
                Price List
              </a>
              <a
                href={brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm w-full transition-colors block"
              >
                Scheme Brochure
              </a>
              <a
                href="https://drive.google.com/file/d/1Zua6d3vEpyrLWJIW9AmwmUzB6-XuVTED/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm w-full transition-colors block"
              >
                License Certificate
              </a>
              <a
                href={reracertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm w-full transition-colors block"
              >
                Rera Certificate
              </a>
              <button
                onClick={() => setShowSitePlan(true)}
                className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm w-full transition-colors"
              >
                Scheme Site Plan
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-3 space-y-6">

            <a href="tel:9818513700" className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm rounded-sm hover:bg-[#1e4d29] transition-colors block">
              9818513700
            </a>

            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-xs tracking-wider rounded-sm mt-6">
              Registration Section
            </div>
            <div className="text-center font-bold text-gray-800 py-2">
              <p className="text-sm">Registration Amount -</p>
              <p className="text-xl">₹21,000/-</p>
            </div>

            <div className="bg-[#2c6e3b] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm mt-2">
              Location Benefits
            </div>
            <div className="sm:border border-gray-300 p-4 sm:rounded-xl rounded-none text-sm space-y-4 text-gray-700 font-medium border-0">
              <ul className="list-disc pl-4 space-y-1">
                <li>Proposed Metro Station - 5 Min</li>
                <li>Education and health care</li>
                <li>Bang on Palwal Hathin Highway</li>
                <li>Delhi-Mumbai Expressway - 15 mins.</li>
                <li>60 minutes drive to International Airport.</li>
                <li>Palwal Bus Station, Railway Station - 5 mins</li>
              </ul>
              <Link
                to="/location-benefits"
                className="bg-[#2c6e3b] hover:bg-[#1e4d29] text-white p-2 text-center font-bold text-sm tracking-wider rounded-sm  w-full transition-colors block"
              >
                View More
              </Link>
            </div>
          </div>

        </div>
      </div>

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
