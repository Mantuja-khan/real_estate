import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getInquiries, deleteInquiry, type Inquiry } from "@/lib/inquiries";
import { apiFetch, removeAuthToken } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, RefreshCw, LayoutDashboard, Users, FileText, LogOut, CheckCircle, CalendarDays, Megaphone } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const AdminPage = () => {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [delivering, setDelivering] = useState(false);
  const [declaring, setDeclaring] = useState(false);
  const [resultsDeclared, setResultsDeclared] = useState(false);

  const load = async () => {
    try {
      const data = await getInquiries();
      setInquiries(data);
      setSelected(new Set());
    } catch {
      toast.error("Failed to load inquiries");
    } finally {
      setLoading(false);
    }
  };

  const loadSettings = async () => {
    try {
      const data = await apiFetch("/settings?keys=results_declared,result_date");
      if (data && Array.isArray(data)) {
        for (const row of data) {
          if (row.key === "results_declared") setResultsDeclared(row.value === "true");
        }
      }
    } catch (error) {
       console.error("Failed to load settings", error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await apiFetch("/auth/me", { requireAuth: true });
        load();
        loadSettings();
      } catch (error) {
        navigate("/admin/login", { replace: true });
      }
    };
    checkAuth();
  }, [navigate]);

  const handleDelete = async (id: string) => {
    try {
      await deleteInquiry(id);
      setInquiries((prev) => prev.filter((i) => i.id !== id));
      setSelected((prev) => { const n = new Set(prev); n.delete(id); return n; });
      toast.success("Inquiry deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  const handleLogout = async () => {
    removeAuthToken();
    toast.success("Logged out");
    navigate("/admin/login");
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };

  const toggleAll = () => {
    if (selected.size === inquiries.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(inquiries.map((i) => i.id)));
    }
  };

  // Mark selected inquiries' slots as completed
  const handleDeliver = async () => {
    if (selected.size === 0) { toast.error("Select at least one inquiry"); return; }
    setDelivering(true);
    try {
      const ids = Array.from(selected);
      await apiFetch("/inquiries/update-batch", {
        method: "PATCH",
        body: JSON.stringify({ ids, slot_status: "completed" }),
        requireAuth: true
      });
      setInquiries((prev) => prev.map((i) => ids.includes(i.id) ? { ...i, slot_status: "completed" } : i));
      setSelected(new Set());
      toast.success(`${ids.length} slot(s) marked as completed`);
    } catch {
      toast.error("Failed to update");
    } finally {
      setDelivering(false);
    }
  };

  // Declare results — make them visible to users
  const handleDeclareResults = async () => {
    setDeclaring(true);
    try {
      await apiFetch("/settings", {
        method: "PATCH",
        body: JSON.stringify({ key: "results_declared", value: "true" }),
        requireAuth: true
      });
      setResultsDeclared(true);
      toast.success("Results declared — users can now see their slot status");
    } catch {
      toast.error("Failed to declare results");
    } finally {
      setDeclaring(false);
    }
  };

  const handleHideResults = async () => {
    try {
      if (inquiries.length > 0) {
        const allIds = inquiries.map((i) => i.id);
        await apiFetch("/inquiries/update-batch", {
          method: "PATCH",
          body: JSON.stringify({ ids: allIds, slot_status: "pending" }),
          requireAuth: true
        });
        setInquiries((prev) => prev.map((i) => ({ ...i, slot_status: "pending" })));
      }

      await apiFetch("/settings", {
        method: "PATCH",
        body: JSON.stringify({ key: "results_declared", value: "false" }),
        requireAuth: true
      });
      setResultsDeclared(false);
      toast.success("Results hidden and all slots reset to pending");
    } catch {
      toast.error("Failed to hide results or reset slots");
    }
  };

  const completedCount = inquiries.filter(i => i.slot_status === "completed").length;
  const pendingPaymentCount = inquiries.filter(i => !i.payment_status || i.payment_status === "pending").length;
  const completedPaymentCount = inquiries.filter(i => i.payment_status === "completed" || i.payment_status === "success").length;

  return (
    <div className="min-h-screen flex flex-col bg-secondary/50 pb-20 md:pb-24">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container flex items-center justify-between h-16">
          <h1 className="font-display text-xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-10">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border rounded-xl p-5 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{inquiries.length}</p>
              <p className="text-sm text-muted-foreground">Total Inquiries</p>
            </div>
          </div>
          <div className="bg-card border rounded-xl p-5 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{completedPaymentCount}</p>
              <p className="text-sm text-muted-foreground">Payments Completed</p>
            </div>
          </div>
          <div className="bg-card border rounded-xl p-5 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <FileText className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-600">{pendingPaymentCount}</p>
              <p className="text-sm text-muted-foreground">Payments Pending</p>
            </div>
          </div>
        </div>

        {/* Result Declaration Controls */}
        <div className="bg-card border rounded-xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CalendarDays className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold">Result Declaration</h2>
          </div>

          <div className="flex flex-wrap items-end gap-6">
            <div className="flex items-center gap-3">
              {resultsDeclared ? (
                <Button variant="outline" size="sm" onClick={handleHideResults}>
                  Hide Results
                </Button>
              ) : (
                <Button size="sm" onClick={handleDeclareResults} disabled={declaring}>
                  <Megaphone className="h-4 w-4 mr-1" />
                  {declaring ? "Declaring…" : "Declare Results"}
                </Button>
              )}
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                resultsDeclared
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-muted text-muted-foreground"
              }`}>
                {resultsDeclared ? "Results Visible" : "Results Hidden"}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-3">
            Step 1: Select users below and click "Confirm Slot" to mark their slots as completed.<br />
            Step 2: Click "Declare Results" above to make results visible to all users.
          </p>
        </div>

        <div className="bg-card border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b flex-wrap gap-3">
            <h2 className="text-xl font-bold font-display">Customer Inquiries</h2>
            <div className="flex gap-2">
              {selected.size > 0 && (
                <Button size="sm" onClick={handleDeliver} disabled={delivering}>
                  <CheckCircle className="h-4 w-4 mr-1" />
                  {delivering ? "Updating…" : `Confirm Slot (${selected.size})`}
                </Button>
              )}
              <Button variant="outline" size="sm" onClick={load}>
                <RefreshCw className="h-4 w-4 mr-1" /> Refresh
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-muted-foreground">Loading…</div>
          ) : inquiries.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <p className="text-lg mb-1">No inquiries yet</p>
              <p className="text-sm">Customer submissions will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto pb-24">
              <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox
                      checked={selected.size === inquiries.length && inquiries.length > 0}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Aadhaar</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Slot Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[60px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inq) => (
                  <TableRow key={inq.id}>
                    <TableCell>
                      <Checkbox
                        checked={selected.has(inq.id)}
                        onCheckedChange={() => toggleSelect(inq.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{inq.name}</TableCell>
                    <TableCell>{inq.email || "—"}</TableCell>
                    <TableCell>{inq.phone}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {inq.aadhaar.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")}
                    </TableCell>
                    <TableCell>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        (inq.payment_status === "success" || inq.payment_status === "completed")
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : inq.payment_status === "failed"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500"
                      }`}>
                        {inq.payment_status === "completed" || inq.payment_status === "success"
                          ? "✓ Paid"
                          : inq.payment_status === "failed"
                          ? "✗ Failed"
                          : "⏳ Pending"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        inq.slot_status === "completed"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {inq.slot_status === "completed" ? "Confirmed" : "Pending"}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {format(new Date(inq.created_at), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(inq.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
