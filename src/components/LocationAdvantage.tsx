import { MapPin, Plane, Navigation, GraduationCap, Hospital, ShoppingBag } from "lucide-react";

const LocationAdvantage = () => {
  return (
    <section className="py-12 sm:py-20 bg-accent/30 px-0 sm:px-4" id="location">
      <div className="container px-0 sm:px-8">
        <div className="text-center mb-8 px-4 sm:px-0 sm:mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary mb-2">— STRATEGIC LOCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold">Location Advantage</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Perfectly positioned with excellent connectivity to major landmarks and essential services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 sm:gap-8 bg-card sm:bg-transparent">
          {/* Infrastructure */}
          <div className="p-6 sm:bg-card sm:rounded-2xl shadow-none sm:shadow-sm border-b sm:border border-border/50 hover:shadow-none sm:hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary">
              <Navigation className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>On Palwal Hathin Highway Road</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Connected with Delhi Mathura Highway NH-44 - <strong>04 mins</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Palwal Bus Station Railway Station - <strong>05 mins</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Palwal District Court Proposed Metro Station - <strong>05 mins</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Navigation className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Kundli-Manesar-Palwal (KMP) Expressway - <strong>10 mins</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Navigation className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Delhi-Mumbai Expressway - <strong>15 mins</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Connected to IMT Sohna (1600 acres industrial township) - <strong>30 mins</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Plane className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>60 minutes</strong> drive to International Airport</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Gurugram Faridabad Mathura Jawar Airport - <strong>40 mins</strong></span>
              </li>
            </ul>
          </div>

          {/* Education & Healthcare */}
          <div className="p-6 sm:bg-card sm:rounded-2xl shadow-none sm:shadow-sm border-0 sm:border border-border/50 hover:shadow-none sm:hover:shadow-md transition-shadow">
            <div className="flex gap-4 mb-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                <Hospital className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Education & Healthcare</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Well reputed educational institutions:</h4>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Andvacend Educational Institutions</li>
                  <li>BR Ambedkar Govt. PG College</li>
                  <li>Maharani Kishori Devi College of Education</li>
                  <li>Hindustan ITI College</li>
                  <li>MVN University</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hospitals & Clinics:</h4>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Palwal Civil Hospital</li>
                  <li>Atlas</li>
                  <li>Cosmos Hospital</li>
                  <li>Galaxy</li>
                  <li>Guru Nanak</li>
                  <li>Prabha Eye</li>
                  <li>Tula Hospital</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Entertainment */}
          <div className="p-6 sm:bg-card sm:rounded-2xl shadow-none sm:shadow-sm border-0 sm:border border-border/50 hover:shadow-none sm:hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Entertainment</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Dumdama Lake</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Sohna Natural Hot Springs</span>
              </li>
              <li className="flex items-start gap-2">
                <ShoppingBag className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Malls & Multiplexes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
