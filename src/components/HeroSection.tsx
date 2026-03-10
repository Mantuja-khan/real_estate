import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarClock, MapPin } from "lucide-react";
import entryImg from "@/assets/entry.jpeg";

const HeroSection = () => (
  <section className="bg-white w-full">
    <div className="w-full h-auto flex items-center justify-center">
      <img
        src={entryImg}
        alt="Chintamani's Park Villas Front Gate"
        className="w-full h-auto object-cover max-h-[500px]"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://i.pinimg.com/736x/1d/af/f8/1daff8a998584f1cd7910d01c0cf42c8.jpg';
        }}
      />
    </div>
  </section>
);

export default HeroSection;
