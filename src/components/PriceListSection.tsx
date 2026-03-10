import priceListImg from "@/assets/price_list.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2, ZoomIn } from "lucide-react";

const PriceListSection = () => {
  return (
    <section className="py-12 sm:py-24 bg-accent/10 sm:px-4" id="pricing">
      <div className="container px-0 sm:px-8">
        <div className="text-center mb-8 px-4 sm:px-0 sm:mb-10">
          <p className="text-sm font-semibold tracking-widest text-primary mb-2">— PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold">Project Price List</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our transparent pricing plans, tailored to offer the best value for your dream home.
          </p>
        </div>

        <div className="bg-card w-full sm:rounded-xl overflow-hidden shadow-none sm:shadow-sm sm:border p-0 sm:p-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer group w-full">
                <img 
                  src={priceListImg} 
                  alt="Project Price List" 
                  className="w-full h-auto object-contain transition-opacity group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20 backdrop-blur-[1px]">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg">
                    <ZoomIn className="h-5 w-5" /> View Full Image
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] md:max-w-5xl lg:max-w-6xl p-2 bg-transparent border-none shadow-none text-white [&>button]:text-white [&>button]:bg-black/50 [&>button]:right-4 [&>button]:top-4 [&>button]:p-2 [&>button]:rounded-full">
              <div className="w-full max-h-[90vh] overflow-auto flex items-center justify-center rounded-xl bg-background shadow-2xl">
                <img 
                  src={priceListImg} 
                  alt="Project Price List" 
                  className="w-full h-auto object-contain block m-auto"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
