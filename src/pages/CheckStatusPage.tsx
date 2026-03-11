import { useState, useEffect } from "react";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, CheckCircle2, Clock, AlertCircle } from "lucide-react";

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
  const [resultDate, setResultDate] = useState("30 March 2026");
  
  // Date protection for March 30, 2026
  const isBeforeResultDate = new Date() < new Date("2026-03-30T00:00:00+05:30");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await apiFetch("/settings?keys=results_declared,result_date");
        if (data && Array.isArray(data)) {
          for (const row of data) {
            if (row.key === "results_declared") setResultsDeclared(row.value === "true");
            if (row.key === "result_date") setResultDate(row.value);
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
        setResult(data[0] as SlotResult);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-center">Check Your Slot Status</h1>
          <p className="text-muted-foreground text-center mb-8">
            Enter your Aadhaar number to check if your slot has been confirmed.
          </p>

          {isBeforeResultDate ? (
            <div className="border border-red-600 bg-[#fff5f5] p-6 text-center shadow-md w-full max-w-2xl mx-auto">
              <h2 className="text-lg md:text-xl font-bold text-red-700 uppercase tracking-wider mb-2">Important Notice</h2>
              <div className="h-0.5 w-full bg-red-200 mb-4 mx-auto max-w-[200px]"></div>
              <p className="text-red-800 text-base md:text-lg font-semibold leading-relaxed">
                Result will declare on 30 March 2026 , please come at 30 March 2026.
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
              {!resultsDeclared ? (
                <div className="text-center p-6 bg-accent/20 border rounded-xl mb-6 shadow-sm">
                  <p className="font-bold text-lg text-foreground mb-2">Results Not Declared Yet</p>
                  <p className="text-muted-foreground text-sm">
                    Please visit again on <strong className="text-foreground">{resultDate}</strong>.
                  </p>
                </div>
              ) : (
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
              )}

              <div className="bg-card border rounded-xl p-5 shadow-sm">
                <h3 className="font-bold mb-4 border-b pb-2">Customer Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Applicant Name</p>
                    <p className="font-semibold text-base">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Selected Area</p>
                    <p className="font-semibold text-base">{result.area}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Payment Status</p>
                    <p className="font-semibold text-base capitalize flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${result.payment_status === 'paid' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                      {result.payment_status}
                    </p>
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
