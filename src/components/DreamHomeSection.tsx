import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dreamHomeImg from "@/assets/heroimage.jpg";

const DreamHomeSection = () => (
  <section className="py-20 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-sm font-semibold tracking-widest text-primary mb-2">— YOUR DREAM AWAITS</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
          Complete Your Dream<br />Of Owning A Home
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-md">
          Step into a life of comfort and elegance. Our thoughtfully crafted 3BHK residences bring your
          vision of a perfect home to life — with world-class amenities and prime locations.
        </p>
        <Link to="/inquiry">
          <Button size="lg" className="rounded-full px-8">Book Your Home</Button>
        </Link>
      </div>
      <div className="w-full">
        <img
          src={dreamHomeImg}
          alt="Luxury apartment with swimming pool and gardens"
          className="rounded-2xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
        />
      </div>
    </div>
  </section>
);

export default DreamHomeSection;
