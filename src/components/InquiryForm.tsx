import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { addInquiry } from "@/lib/inquiries";
import { toast } from "sonner";
import { QrCode, Building2, CreditCard } from "lucide-react";
const areas = ["Palwal"];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit phone number"),
  area: z.string().min(1, "Please select an area"),
  aadhaar: z.string().trim().regex(/^\d{12}$/, "Enter valid 12-digit Aadhaar number"),
});

const InquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "", aadhaar: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await addInquiry(result.data as { name: string; email: string; phone: string; area: string; aadhaar: string });
      toast.success("Inquiry submitted successfully!");
      setShowBankDetails(true);
      setForm({ name: "", email: "", phone: "", area: "", aadhaar: "" }); // Reset form
    } catch {
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Property Inquiry</h2>
      <p className="text-muted-foreground text-sm sm:text-base text-center mb-4">
        Fill in your details and our team will get back to you shortly.
      </p>

      <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-lg text-sm font-medium text-center mb-8 mx-auto -mt-2">
        Registration fees fully refundable for non alotee
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:bg-card sm:border rounded-xl p-0 sm:p-6 sm:shadow-sm">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="your@email.com" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="10-digit mobile number" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={10} />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
        </div>
        <div>
          <Label>Choose Area</Label>
          <Select value={form.area} onValueChange={(v) => setForm({ ...form, area: v })}>
            <SelectTrigger><SelectValue placeholder="Select area" /></SelectTrigger>
            <SelectContent>
              {areas.map((a) => (
                <SelectItem key={a} value={a}>{a}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.area && <p className="text-sm text-destructive mt-1">{errors.area}</p>}
        </div>
        <div>
          <Label htmlFor="aadhaar">Aadhaar Number</Label>
          <Input id="aadhaar" placeholder="12-digit Aadhaar number" value={form.aadhaar}
            onChange={(e) => setForm({ ...form, aadhaar: e.target.value })} maxLength={12} />
          {errors.aadhaar && <p className="text-sm text-destructive mt-1">{errors.aadhaar}</p>}
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit Inquiry"}
        </Button>
      </form>

      <Dialog open={showBankDetails} onOpenChange={setShowBankDetails}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Registration Fee Payment</DialogTitle>
            <DialogDescription>
              Your form has been successfully submitted! Please pay the registration fee using the bank details or QR code below.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="bg-accent/50 p-4 rounded-lg flex items-start gap-4">
              <Building2 className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-sm">Bank Transfer</p>
                <p className="text-sm text-muted-foreground mt-1">Bank: <strong>HDFC Bank</strong></p>
                <p className="text-sm text-muted-foreground">Account Name: <strong>Haryana Deendayal Floors</strong></p>
                <p className="text-sm text-muted-foreground">Account Number: <strong>50200021345678</strong></p>
                <p className="text-sm text-muted-foreground">IFSC Code: <strong>HDFC0001234</strong></p>
              </div>
            </div>
            
            <div className="bg-accent/50 p-4 rounded-lg flex flex-col items-center justify-center gap-2">
              <p className="font-semibold text-sm mb-2 w-full flex items-center justify-start gap-3"><QrCode className="h-5 w-5 text-primary" /> Scan QR to Pay</p>
              {/* Replace the src with your actual QR code image URL if available */}
              <div className="w-48 h-48 bg-white p-2 rounded-lg border shadow-sm flex items-center justify-center">
                <QrCode className="w-32 h-32 text-slate-800" />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">BHIM / UPI / PhonePe / GPay</p>
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button type="button" variant="default" onClick={() => setShowBankDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InquiryForm;
