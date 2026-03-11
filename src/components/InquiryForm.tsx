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
import qrCodeImg from "@/assets/qrcode.png";

const quotas = ["Govt Employee Quota", "Female Quota", "General Quota", "Management Quota"];
const plotSizes = [
  "100.10 sq/yard (83.69 sq/mtr)",
  "122.55 sq/yard (102.46 sq/mtr)",
  "125.54 sq/yard (104.96 sq/mtr)"
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  fatherName: z.string().trim().min(2, "Father/Husband Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit phone number"),
  address: z.string().trim().min(5, "Full Address is required").max(500),
  aadhaar: z.string().trim().regex(/^\d{12}$/, "Enter valid 12-digit Aadhaar number"),
  city: z.string().trim().min(2, "City is required"),
  state: z.string().trim().min(2, "State is required"),
  pinCode: z.string().trim().regex(/^\d{6}$/, "Enter valid 6-digit PIN code"),
  quota: z.string().min(1, "Quota is required"),
  plotSize: z.string().min(1, "Plot size is required"),
});

const InquiryForm = () => {
  const [form, setForm] = useState({ name: "", fatherName: "", email: "", phone: "", address: "", aadhaar: "", city: "", state: "", pinCode: "", quota: "", plotSize: "" });
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
      await addInquiry(result.data as any);
      toast.success("Inquiry submitted successfully!");
      setShowBankDetails(true);
      setForm({ name: "", fatherName: "", email: "", phone: "", address: "", aadhaar: "", city: "", state: "", pinCode: "", quota: "", plotSize: "" }); // Reset form
    } catch {
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-gray-800 mb-2">Registration Form </h2>
        <div className="w-16 h-1 bg-[#2c6e3b] mx-auto mb-4"></div>

        <p className="text-[#d9a05b] font-bold text-sm mt-2">
          Registration fees fully refundable for non alotee
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="fatherName">Father/Husband's Name</Label>
          <Input id="fatherName" placeholder="Enter Father's or Husband's name" value={form.fatherName}
            onChange={(e) => setForm({ ...form, fatherName: e.target.value })} />
          {errors.fatherName && <p className="text-sm text-destructive mt-1">{errors.fatherName}</p>}
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
          <Label htmlFor="address">Full Address</Label>
          <Input id="address" placeholder="Enter your full residential address" value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })} />
          {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
        </div>


        <div>
          <Label htmlFor="aadhaar">Aadhaar Number</Label>
          <Input id="aadhaar" placeholder="12-digit Aadhaar number" value={form.aadhaar}
            onChange={(e) => setForm({ ...form, aadhaar: e.target.value })} maxLength={12} />
          {errors.aadhaar && <p className="text-sm text-destructive mt-1">{errors.aadhaar}</p>}
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter your city" value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })} />
          {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
        </div>

        <div>
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter your state" value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })} />
          {errors.state && <p className="text-sm text-destructive mt-1">{errors.state}</p>}
        </div>

        <div>
          <Label htmlFor="pinCode">PIN Code</Label>
          <Input id="pinCode" placeholder="6-digit PIN code" value={form.pinCode}
            onChange={(e) => setForm({ ...form, pinCode: e.target.value })} maxLength={6} />
          {errors.pinCode && <p className="text-sm text-destructive mt-1">{errors.pinCode}</p>}
        </div>

        <div>
          <Label>Quota</Label>
          <Select value={form.quota} onValueChange={(v) => setForm({ ...form, quota: v })}>
            <SelectTrigger><SelectValue placeholder="Select quota" /></SelectTrigger>
            <SelectContent>
              {quotas.map((q) => (
                <SelectItem key={q} value={q}>{q}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.quota && <p className="text-sm text-destructive mt-1">{errors.quota}</p>}
        </div>

        <div>
          <Label>Plot Size</Label>
          <Select value={form.plotSize} onValueChange={(v) => setForm({ ...form, plotSize: v })}>
            <SelectTrigger><SelectValue placeholder="Select plot size" /></SelectTrigger>
            <SelectContent>
              {plotSizes.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.plotSize && <p className="text-sm text-destructive mt-1">{errors.plotSize}</p>}
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
                <p className="text-sm text-muted-foreground mt-1">Bank: <strong>ICICI Bank</strong></p>
                <p className="text-sm text-muted-foreground">Account Name: <strong>SNKV REAL ESTATE PRIVATE LIMITED</strong></p>
                <p className="text-sm text-muted-foreground">Account Number: <strong>165105500680</strong></p>
                <p className="text-sm text-muted-foreground">IFSC Code: <strong>ICIC0001651</strong></p>
                <p className="text-sm text-muted-foreground">Mob: <strong>9015634665</strong></p>
                <p className="text-sm text-muted-foreground">Branch: <strong>UTT Sector 49, Gurgaon</strong></p>
              </div>
            </div>

            <div className="bg-accent/50 p-4 rounded-lg flex flex-col items-center justify-center gap-2">
              <p className="font-semibold text-sm mb-2 w-full flex items-center justify-start gap-3"><QrCode className="h-5 w-5 text-primary" /> Scan QR to Pay</p>
              <div className="w-48 h-48 bg-white p-2 rounded-lg border shadow-sm flex items-center justify-center">
                <img src={qrCodeImg} alt="QR Code for Payment" className="w-full h-full object-contain" />
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
