import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, CheckCircle2, Clock, AlertCircle, Home, ArrowLeft } from "lucide-react";

interface SlotResult {
  name: string;
  area: string;
  payment_status: string;
  slot_status: string;
  created_at: string;
}

const CheckStatusPage = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [result, setResult] = useState<SlotResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultsDeclared, setResultsDeclared] = useState(false);

  const targetDate = "2026-03-29T23:59:59";
  const isTimeUp = new Date() > new Date(targetDate);
  const showResults = resultsDeclared || isTimeUp;

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await apiFetch("/settings?keys=results_declared,result_date");
        if (data && Array.isArray(data)) {
          for (const row of data) {
            if (row.key === "results_declared") setResultsDeclared(row.value === "true");
          }
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      }
    };
    fetchSettings();
  }, []);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = aadhaar.trim();
    if (!/^\d{12}$/.test(cleaned)) {
      setError("Please enter a valid 12-digit Aadhaar number");
      return;
    }
    setError("");
    setResult(null);
    setNotFound(false);
    setLoading(true);

    // Wait 3 seconds to show the loading animation
    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const data = await apiFetch(`/inquiries/check/${cleaned}`);

      if (!data || data.length === 0) {
        setNotFound(true);
      } else {
        setResult(data[0] as SlotResult);}
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md mb-8 text-center sm:text-left">
          <Link to="/" className="inline-flex items-center gap-1 text-[#2c6e3b] hover:underline font-bold text-sm group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
          </Link>
        </div>
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-center">Check Your Slot Status</h1>
          <p className="text-muted-foreground text-center mb-8">
            Enter your Aadhaar number to check if your slot has been confirmed.
          </p>

          {!showResults ? (
            <div className="border border-red-600 bg-[#fff5f5] p-6 text-center shadow-md w-full max-w-2xl mx-auto rounded-2xl">
              <h2 className="text-lg md:text-xl font-bold text-red-700 uppercase tracking-wider mb-2">Important Notice</h2>
              <div className="h-0.5 w-full bg-red-200 mb-4 mx-auto max-w-[200px] rounded-full"></div>
              <p className="text-red-800 text-base md:text-lg font-semibold leading-relaxed">
                Results have not been declared yet. Please check back later.
              </p>
            </div>
          ) : (
            <form onSubmit={handleCheck} className="space-y-4 bg-card border rounded-xl p-6 shadow-sm">
              <div>
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input
                  id="aadhaar"
                  placeholder="Enter 12-digit Aadhaar number"
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value)}
                  maxLength={12}
                />
                {error && <p className="text-sm text-destructive mt-1">{error}</p>}
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Checking…
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Check Status
                  </>
                )}
              </Button>
            </form>
          )}



          {/* Not found */}
          {notFound && (
            <div className="mt-6 bg-card border rounded-xl p-6 text-center">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-semibold text-lg">No Record Found</p>
              <p className="text-muted-foreground text-sm mt-1">
                No inquiry found with this Aadhaar number. Please submit an inquiry first.
              </p>
            </div>
          )}

          {result && (
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl border bg-card shadow-sm">
                {result.slot_status === "completed" ? (
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                ) : (
                  <Clock className="h-10 w-10 text-amber-500" />
                )}
                <div>
                  <p className="font-bold text-lg">
                    {result.slot_status === "completed"
                      ? "Slot Confirmed! 🎉"
                      : "Slot Pending"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {result.slot_status === "completed"
                      ? "Your slot has been successfully delivered."
                      : "Your application is being processed."}
                  </p>
                </div>
              </div>
              <div className="bg-card border rounded-xl p-5 shadow-sm">
                <h3 className="font-bold mb-4 border-b pb-2">Customer Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Applicant Name</p>
                    <p className="font-semibold text-base">{result.name}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckStatusPage;
