import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapImg from "@/assets/deendaya;.jpg";

const MapSection = () => {
  return (
    <section className="py-12 sm:py-24 bg-gray-50 px-4" id="location">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2c6e3b] mb-2 uppercase">— Location</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Find Us Here</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit our prime location and explore the neighborhood of your future dream home.
          </p>
        </div>

        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 sm:w-full h-[250px] sm:h-[500px] rounded-none sm:rounded-xl overflow-hidden shadow-md border-y sm:border bg-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=28.1333847,77.3106766&hl=en&z=12&output=embed"
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
            href="https://maps.app.goo.gl/wS78zHnQYQzqPxb27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#2c6e3b] hover:bg-[#1e4d29] text-white py-6 px-10 text-lg font-bold shadow-md hover:shadow-lg transition-all ">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
