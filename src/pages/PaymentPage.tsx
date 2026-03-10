import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { areaPricing, type Inquiry } from "@/lib/inquiries";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, CreditCard, Shield } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inquiry = location.state?.inquiry as Inquiry | undefined;
  const [paying, setPaying] = useState(false);
  const [done, setDone] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  if (!inquiry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">No inquiry found. Please submit an inquiry first.</p>
            <Button onClick={() => navigate("/inquiry")}>Go to Inquiry Form</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const amount = areaPricing[inquiry.area] ?? 10000;

  const handlePay = async () => {
    setPaying(true);
    try {
      // Create Razorpay order via backend
      const data = await apiFetch("/payments/create-order", {
        method: "POST",
        body: JSON.stringify({
          amount,
          inquiryId: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          area: inquiry.area,
        }),
      });

      if (!data?.orderId) {
        toast.error("Failed to create payment order. Please try again.");
        setPaying(false);
        return;
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Haryana Deen Dayal Awaas Yojna",
        description: `Booking for ${inquiry.area}`,
        order_id: data.orderId,
        prefill: {
          name: inquiry.name,
          email: inquiry.email,
          contact: inquiry.phone,
        },
        theme: { color: "#1a1a2e" },
        handler: async (response: any) => {
          // Verify payment
          try {
            await apiFetch("/payments/verify", {
              method: "POST",
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                inquiryId: inquiry.id,
                email: inquiry.email,
                name: inquiry.name,
                area: inquiry.area,
                amount,
              }),
            });

            setPaymentId(response.razorpay_payment_id);
            setDone(true);
            toast.success("Payment successful! Confirmation email sent.");
          } catch (err: any) {
            toast.error(err.message || "Payment verification failed.");
          }
        },
        modal: {
          ondismiss: () => {
            setPaying(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        toast.error(`Payment failed: ${response.error.description}`);
        setPaying(false);
      });
      rzp.open();
    } catch {
      toast.error("Something went wrong. Please try again.");
      setPaying(false);
    }
  };

  if (done) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Slot Confirmed!</h1>
            <p className="text-muted-foreground mb-2">
              Your slot for <strong>{inquiry.area}</strong> has been successfully allocated.
            </p>
            <p className="text-muted-foreground mb-6">
              A confirmation email has been sent to <strong>{inquiry.email}</strong>.
            </p>
            {paymentId && (
              <p className="text-xs text-muted-foreground mb-6 font-mono">Payment ID: {paymentId}</p>
            )}
            <Button onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-2 text-center">Complete Payment</h1>
          <p className="text-muted-foreground text-center mb-4">
            Pay securely via Razorpay to confirm your slot for <strong>{inquiry.area}</strong>.
          </p>
          
          <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-lg text-sm font-medium text-center mb-8 mx-auto -mt-2">
            Registration fees fully refundable for non alotee
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
            {/* Amount */}
            <div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="font-medium">Booking Amount</span>
              </div>
              <span className="text-2xl font-bold">₹{amount.toLocaleString("en-IN")}</span>
            </div>

            {/* Applicant Info */}
            <div className="bg-secondary rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Applicant</span>
                <span className="font-medium">{inquiry.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Area</span>
                <span className="font-medium">{inquiry.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">{inquiry.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone</span>
                <span className="font-medium">{inquiry.phone}</span>
              </div>
            </div>

            {/* Pay Button */}
            <Button onClick={handlePay} className="w-full" size="lg" disabled={paying}>
              {paying ? "Processing…" : `Pay ₹${amount.toLocaleString("en-IN")}`}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5" />
              <span>Secured by Razorpay • 256-bit encryption</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
