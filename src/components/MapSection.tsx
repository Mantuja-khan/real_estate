import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import mapImg from "@/assets/deendaya;.jpg";
import project3dImg from "@/assets/3d_image.png";

const MapSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-12 sm:py-24 bg-gray-50 px-4" id="location">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2c6e3b] mb-2 uppercase">— Location</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Find Us Here</h2>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl mx-auto">
            Visit our prime location and explore the neighborhood of your future dream home.
          </p>
        </div>

        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 sm:w-full h-[300px] sm:h-[600px] rounded-none sm:rounded-xl overflow-hidden shadow-2xl border-y sm:border bg-gray-200 group/map">
          <a
            href="https://www.google.com/maps/place/Enclave/@28.1347909,77.311643,17.86z/data=!4m12!1m5!3m4!2zMjjCsDA4JzAwLjIiTiA3N8KwMTgnMzguNCJF!8m2!3d28.1333889!4d77.3106667!3m5!1s0x390cd30050c6589d:0xbc4f1c92e623a9ec!8m2!3d28.1341622!4d77.3110804!16s%2Fg%2F11xd9vx94r?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer"
            title="Open in Google Maps"
          >
            {/* Transparent overlay to capture clicks and prevent iframe interaction */}
            <div className="absolute inset-0 bg-transparent"></div>
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.2!2d77.3110804!3d28.1341622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd30050c6589d%3A0xbc4f1c92e623a9ec!2zRW5jbGF2ZQ!5e0!3m2!1sen!2sin!4v1710335200000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Project Location"
            className="grayscale-[20%] group-hover/map:grayscale-0 transition-all duration-500 scale-[1.4] -translate-y-[8%] -translate-x-[2%]"
          ></iframe>
        </div>

        <div className="mt-8 text-center flex justify-center">
          <a
            href="https://www.google.com/maps/place/Enclave/@28.1347909,77.311643,17.86z/data=!4m12!1m5!3m4!2zMjjCsDA4JzAwLjIiTiA3N8KwMTgnMzguNCJF!8m2!3d28.1333889!4d77.3106667!3m5!1s0x390cd30050c6589d:0xbc4f1c92e623a9ec!8m2!3d28.1341622!4d77.3110804!16s%2Fg%2F11xd9vx94r?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#2c6e3b] hover:bg-[#1e4d29] text-white py-6 px-10 text-lg shadow-md hover:shadow-lg transition-all ">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </a>
        </div>

        <div className="mt-16 w-full flex flex-col items-center">
          <h3 className="text-xl md:text-3xl font-bold text-[#2c6e3b] mb-8 uppercase tracking-widest">— Project View</h3>

          <div className="w-full xl:max-w-7xl xl:-mx-24 bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100 p-1 sm:p-2 transition-all duration-300 hover:shadow-green-900/10">
            <img
              src={project3dImg}
              alt="Project 3D View"
              className="w-full h-auto object-cover rounded-lg min-h-[300px] sm:min-h-[500px]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://i.pinimg.com/736x/1d/af/f8/1daff8a998584f1cd7910d01c0cf42c8.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
