import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addGeneralEnquiry } from "@/lib/inquiries";
import { toast } from "sonner";
import { User, Phone, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EnquiryPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);
    try {
      await addGeneralEnquiry(form);
      toast.success("Enquiry submitted successfully!");
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => navigate("/"), 2000);
    } catch {
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 shadow-sm my-8 border border-gray-100 rounded-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-gray-800 mb-2">Enquire Now</h2>
            <div className="w-16 h-1 bg-[#2c6e3b] mx-auto mb-4"></div>
            <p className="text-[#d9a05b] font-bold text-sm mt-2 uppercase tracking-widest">
              Please feel free to ask anything
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-black font-bold flex items-center gap-2 text-sm md:text-base">
                <User className="h-4 w-4 stroke-[3px] text-[#2c6e3b]" /> Your Name
              </Label>
              <Input id="name" placeholder="Enter your full name" 
                value={form.name}
                className="text-black placeholder:text-gray-400 bg-white border-gray-300 h-12 text-sm md:text-base focus:border-[#2c6e3b] focus:ring-[#2c6e3b]/20"
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-black font-bold flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4 stroke-[3px] text-[#2c6e3b]" /> Phone Number
              </Label>
              <Input id="phone" placeholder="10-digit mobile number" 
                value={form.phone}
                className="text-black placeholder:text-gray-400 bg-white border-gray-300 h-12 text-sm md:text-base focus:border-[#2c6e3b] focus:ring-[#2c6e3b]/20"
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                maxLength={10}
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-black font-bold flex items-center gap-2 text-sm md:text-base">
                <MessageSquare className="h-4 w-4 stroke-[3px] text-[#2c6e3b]" /> Message
              </Label>
              <Textarea 
                id="message" 
                placeholder="What would you like to know?" 
                value={form.message}
                className="text-black placeholder:text-gray-400 bg-white border-gray-300 min-h-[120px] text-sm md:text-base focus:border-[#2c6e3b] focus:ring-[#2c6e3b]/20"
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
                required
              />
            </div>

            <Button type="submit" 
              className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-black uppercase tracking-[0.2em] shadow-lg h-12 text-sm md:text-base transition-all active:scale-[0.98]" 
              disabled={submitting}
            >
              {submitting ? "Submitting…" : "Submit enquiry"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnquiryPage;
