import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addInquiry } from "@/lib/inquiries";
import { toast } from "sonner";
import {
  User,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Building,
  Globe,
  Hash,
  Layers,
  Maximize
} from "lucide-react";

const quotas = ["Govt Employee Quota", "Female Quota", "General Quota", "Management Quota"];
const plotSizes = [
  "100.10 sq/yard (83.69 sq/mtr)",
  "122.55 sq/yard (102.46 sq/mtr)",
  "125.54 sq/yard (104.96 sq/mtr)"
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  fatherName: z.string().trim().min(2, "Father is required").max(100),
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
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", fatherName: "", email: "", phone: "", address: "", aadhaar: "", city: "", state: "", pinCode: "", quota: "", plotSize: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

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
      const newInquiry = await addInquiry(result.data as any);
      toast.success("Inquiry submitted successfully!");
      // Redirect to Payment Page with the new inquiry details
      navigate("/payment", { state: { inquiry: newInquiry } });
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
          Registration fees fully refundable for Non-Allottee
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black font-bold flex items-center gap-2">
            <User className="h-4 w-4 stroke-[3px]" /> Your name
          </Label>
          <Input id="name" placeholder="Enter your full name" value={form.name}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="fatherName" className="text-black font-bold flex items-center gap-2">
            <UserPlus className="h-4 w-4 stroke-[3px]" /> Father's Name
          </Label>
          <Input id="fatherName" placeholder="Enter Father's or Husband's name" value={form.fatherName}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, fatherName: e.target.value })} />
          {errors.fatherName && <p className="text-sm text-destructive mt-1">{errors.fatherName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-black font-bold flex items-center gap-2">
            <Mail className="h-4 w-4 stroke-[3px]" /> Email Address
          </Label>
          <Input id="email" type="email" placeholder="your@email.com" value={form.email}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-black font-bold flex items-center gap-2">
            <Phone className="h-4 w-4 stroke-[3px]" /> Phone Number
          </Label>
          <Input id="phone" placeholder="10-digit mobile number" value={form.phone}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={10} />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-black font-bold flex items-center gap-2">
            <MapPin className="h-4 w-4 stroke-[3px]" /> Full Address
          </Label>
          <Input id="address" placeholder="Enter your full residential address" value={form.address}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, address: e.target.value })} />
          {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="aadhaar" className="text-black font-bold flex items-center gap-2">
            <CreditCard className="h-4 w-4 stroke-[3px]" /> Aadhaar Number
          </Label>
          <Input id="aadhaar" placeholder="12-digit Aadhaar number" value={form.aadhaar}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, aadhaar: e.target.value })} maxLength={12} />
          {errors.aadhaar && <p className="text-sm text-destructive mt-1">{errors.aadhaar}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="text-black font-bold flex items-center gap-2">
            <Building className="h-4 w-4 stroke-[3px]" /> City
          </Label>
          <Input id="city" placeholder="Enter your city" value={form.city}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, city: e.target.value })} />
          {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state" className="text-black font-bold flex items-center gap-2">
            <Globe className="h-4 w-4 stroke-[3px]" /> State
          </Label>
          <Input id="state" placeholder="Enter your state" value={form.state}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, state: e.target.value })} />
          {errors.state && <p className="text-sm text-destructive mt-1">{errors.state}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pinCode" className="text-black font-bold flex items-center gap-2">
            <Hash className="h-4 w-4 stroke-[3px]" /> PIN Code
          </Label>
          <Input id="pinCode" placeholder="6-digit PIN code" value={form.pinCode}
            className="text-black placeholder:text-gray-400 backdrop-blur-sm bg-white/50 border-gray-300"
            onChange={(e) => setForm({ ...form, pinCode: e.target.value })} maxLength={6} />
          {errors.pinCode && <p className="text-sm text-destructive mt-1">{errors.pinCode}</p>}
        </div>

        <div className="space-y-2">
          <Label className="text-black font-bold flex items-center gap-2">
            <Layers className="h-4 w-4 stroke-[3px]" /> Quota
          </Label>
          <Select value={form.quota} onValueChange={(v) => setForm({ ...form, quota: v })}>
            <SelectTrigger className="text-black backdrop-blur-sm bg-white/50 border-gray-300"><SelectValue placeholder="Select quota" /></SelectTrigger>
            <SelectContent>
              {quotas.map((q) => (
                <SelectItem key={q} value={q}>{q}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.quota && <p className="text-sm text-destructive mt-1">{errors.quota}</p>}
        </div>

        <div className="space-y-2">
          <Label className="text-black font-bold flex items-center gap-2">
            <Maximize className="h-4 w-4 stroke-[3px]" /> Plot Sizes
          </Label>
          <Select value={form.plotSize} onValueChange={(v) => setForm({ ...form, plotSize: v })}>
            <SelectTrigger className="text-black backdrop-blur-sm bg-white/50 border-gray-300"><SelectValue placeholder=" Select Plot size" /></SelectTrigger>
            <SelectContent>
              {plotSizes.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.plotSize && <p className="text-sm text-destructive mt-1">{errors.plotSize}</p>}
        </div>

        <Button type="submit" className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-black uppercase tracking-[0.2em] shadow-lg" size="lg" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default InquiryForm;
