import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DreamHomeSection from "@/components/DreamHomeSection";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import LocationAdvantage from "@/components/LocationAdvantage";
import MapSection from "@/components/MapSection";
import dreamhome from "@/assets/dreamhome.jpg"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PriceListSection from "@/components/PriceListSection";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection />
    <div className="py-12 sm:py-20 px-0 sm:px-4 bg-background" id="inquiry">
      <div className="container px-4 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <InquiryForm />
        </div>
        <div className="w-full bg-accent/20 border shadow-sm p-6 sm:p-8 rounded-2xl flex flex-col justify-center h-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Refunds & Cancellation Policy</h3>
          <p className="text-sm text-muted-foreground mb-4">Last Updated: March 10, 2026</p>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
            This Refunds & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for applications submitted through our platform.
          </p>
          <div className="space-y-4 mb-6">
            <h4 className="font-semibold text-lg">Key Policy Points:</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm sm:text-base">
              <li><strong className="text-foreground">Refund Processing:</strong> All unsuccessful applications will be refunded within 60 Days of the Allotment Date.</li>
              <li><strong className="text-foreground">Refund Method:</strong> Refunds will be processed on the same account that which user has provided us.</li>
              <li><strong className="text-foreground">100% Refund Policy:</strong> There is 100% Refund policy with no charges if Allotment is not confirmed.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="font-semibold text-lg mb-2">For Cancellation and More Information</h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              Please contact us at:<br/>
              <a href="mailto:support@haryanadeendayalfloors.org" className="text-primary font-medium hover:underline">
                support@haryanadeendayalfloors.org
              </a>
            </p>
          </div>
          <Link to="/refund-policy">
            <Button size="lg" className="w-full sm:w-auto">Go to Refundable Page</Button>
          </Link>
        </div>
      </div>
    </div>
    <DreamHomeSection />
    <PriceListSection />
    <LocationAdvantage />
    <MapSection />
    <Footer />
  </div>
);

export default Index;
