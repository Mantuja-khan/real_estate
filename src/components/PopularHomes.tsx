import { MapPin, BedDouble, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

const properties = [
  { img: prop1, location: "Andheri West, Mumbai", beds: 4, size: "1600 sqft", price: "₹1,20,00,000" },
  { img: prop2, location: "Bandra, Mumbai", beds: 5, size: "2200 sqft", price: "₹2,50,00,000" },
  { img: prop3, location: "Powai, Mumbai", beds: 3, size: "1200 sqft", price: "₹95,00,000" },
];

const PopularHomes = () => (
  <section id="properties" className="py-20">
    <div className="container">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground mb-1">— POPULAR</p>
          <h2 className="text-3xl font-bold">Our Popular Homes</h2>
        </div>
        <Link to="/inquiry" className="text-sm font-medium hover:underline hidden sm:block">
          Explore All →
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p.location} className="bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
            <img src={p.img} alt={p.location} className="w-full h-56 object-cover" />
            <div className="p-5">
              <div className="flex items-center gap-1 text-sm mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{p.location}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" />{p.beds} Bed</span>
                <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" />{p.size}</span>
              </div>
              <div className="flex items-center justify-between">
                <Link to="/inquiry">
                  <Button size="sm" variant="outline">Book Now</Button>
                </Link>
                <span className="font-bold text-lg">{p.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularHomes;
