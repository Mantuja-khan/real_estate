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

        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 sm:w-full h-[250px] sm:h-[500px] rounded-none sm:rounded-xl overflow-hidden shadow-md border-y sm:border bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9103!2d77.308488!3d28.133389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA4JzAwLjIiTiA3N8KwMTgnMzguNCJF!5e0!3m2!1sen!2sin!4v1710250000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Project Location"
          ></iframe>
        </div>

        <div className="mt-8 text-center flex justify-center">
          <a
            href="https://www.google.com/maps/place/28%C2%B008'00.2%22N+77%C2%B018'38.4%22E/@28.1356769,77.3008991,14.23z/data=!4m4!3m3!8m2!3d28.1333847!4d77.3106766?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-[#2c6e3b] hover:bg-[#1e4d29] text-white py-6 px-10 text-lg shadow-md hover:shadow-lg transition-all ">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </a>
        </div>

        {/* 3D Project Image */}
        <div className="mt-16 w-full flex flex-col items-center">
          <h3 className="text-xl md:text-3xl font-bold text-[#2c6e3b] mb-8 uppercase tracking-widest">— Project View</h3>
          
          <div className="w-full bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100 p-1 sm:p-2">
            <img 
              src={project3dImg} 
              alt="Project 3D View" 
              className="w-full h-auto object-contain rounded-lg"
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
