import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, MessageSquare } from "lucide-react";
import { addGeneralEnquiry } from "@/lib/inquiries";
import { toast } from "sonner";

interface EnquireNowDialogProps {
  children: React.ReactNode;
}

const EnquireNowDialog = ({ children }: EnquireNowDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

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

    setLoading(true);
    try {
      await addGeneralEnquiry(form);
      toast.success("Thank you! Your enquiry has been sent.");
      setForm({ name: "", phone: "", message: "" });
      setOpen(false);
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 uppercase tracking-wide">
            Enquire Now
          </DialogTitle>
          <div className="w-12 h-1 bg-[#2c6e3b] mx-auto mb-2"></div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="enq-name" className="text-black font-bold flex items-center gap-2">
              <User className="h-4 w-4 stroke-[3px]" /> Your Name
            </Label>
            <Input
              id="enq-name"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="text-black border-gray-300"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enq-phone" className="text-black font-bold flex items-center gap-2">
              <Phone className="h-4 w-4 stroke-[3px]" /> Phone Number
            </Label>
            <Input
              id="enq-phone"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="text-black border-gray-300"
              maxLength={10}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enq-message" className="text-black font-bold flex items-center gap-2">
              <MessageSquare className="h-4 w-4 stroke-[3px]" /> Message
            </Label>
            <Textarea
              id="enq-message"
              placeholder="What would you like to know?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="text-black border-gray-300 min-h-[100px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-black uppercase tracking-widest shadow-lg py-6"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquireNowDialog;
