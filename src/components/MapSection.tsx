import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background px-0 sm:px-4" id="map">
      <div className="container px-0 sm:px-8">
        <div className="text-center mb-8 sm:mb-10 px-4 sm:px-0">
          <p className="text-sm font-semibold tracking-widest text-primary mb-2">— OUR LOCATION</p>
          <h2 className="text-3xl font-bold">Find Us Here</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Conveniently located in Palwal, easily accessible from major highways and landmarks.
          </p>
        </div>

        <div className="bg-card sm:border rounded-none sm:rounded-2xl overflow-hidden shadow-none sm:shadow-sm">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14064.093416041132!2d77.3150!3d28.1487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb6819ba8ba5%3A0xe5a3c9aef6317bc2!2sAgra%20Chowk%2C%20Palwal%2C%20Haryana%20121102!5e0!3m2!1sen!2sin!4v1703648000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location - Agra Chowk, Palwal"
            ></iframe>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-accent/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Haryana Deen Dayal Awaas Yojna</h3>
                <p className="text-muted-foreground">
                  NKV Emerald Avenue, 5 min from Agra Chowk, Palwal
                </p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/wS78zHnQYQzqPxb27"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button size="lg" className="w-full md:w-auto">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
