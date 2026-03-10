import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarClock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero_section.png";

const HeroSection = () => (
  <section className="bg-white w-full overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-8 items-center pt-8 pb-12 lg:py-16">
      <div className="flex flex-col justify-center">
        {/* <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-2.5 rounded-md text-base md:text-lg font-bold mb-6 shadow-md shadow-destructive/20 ring-2 ring-destructive ring-offset-2 animate-pulse w-fit border-2 border-white">
          <CalendarClock className="h-6 w-6" />
          Last date to submit: 28/03/2026
        </div> */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-tight mb-4">
          Find A House <br className="hidden md:block" />That Suits You
        </h1>
        <p className="text-primary font-semibold text-base sm:text-xl mb-2 max-w-md">
          Location: Palwal
        </p>
        <p className="text-primary text-base sm:text-lg mb-4 sm:mb-8 max-w-md font-medium">
          5 min drive from Agra Chowk & Delhi mathura Highway
        </p>
        <div className="flex flex-row gap-2 sm:gap-3 w-full">
          <Link to="/inquiry" className="flex-1 sm:flex-none">
            <Button size="lg" className="rounded-full w-full px-2 sm:px-8 text-xs sm:text-base h-10 sm:h-11">Apply Now</Button>
          </Link>
          <a
            href="https://www.google.com/maps/place//@28.1349486,77.3158657,13.39z/data=!4m6!1m5!3m4!2zMjjCsDA4JzAwLjIiTiA3N8KwMTgnMzguNCJF!8m2!3d28.1333847!4d77.3106766!5m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none"
          >
            <Button size="lg" variant="outline" className="rounded-full w-full px-2 sm:px-8 text-xs sm:text-base h-10 sm:h-11">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              View Location
            </Button>
          </a>
        </div>
      </div>
      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center pt-4 lg:pt-0 order-first lg:order-last">
        <img
          src="https://i.pinimg.com/736x/1d/af/f8/1daff8a998584f1cd7910d01c0cf42c8.jpg"
          alt="Modern luxury building"
          className="object-contain w-full h-full lg:rounded-bl-[4rem]"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
