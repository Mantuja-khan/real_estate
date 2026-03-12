import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch, setAuthToken } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Home, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        await apiFetch('/auth/signup', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });
        toast.success("Account created! You can now log in.");
        setIsSignUp(false);
      } else {
        const data = await apiFetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });
        setAuthToken(data.token);
        toast.success("Logged in successfully");
        navigate("/admin");
      }
    } catch (error: any) {
        toast.error(error.message || "An error occurred");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 font-display text-2xl font-bold mb-8">
          <Home className="h-6 w-6 text-primary" />
          Haryana Deen Dayal Jan Awaas Yojna
        </Link>

        <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-8 shadow-sm space-y-5">
          <div className="flex items-center justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center font-display">
            {isSignUp ? "Create Admin Account" : "Admin Login"}
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            {isSignUp ? "Create your admin account" : "Sign in to access the admin dashboard"}
          </p>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="admin@example.com" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? (isSignUp ? "Creating…" : "Signing in…") : (isSignUp ? "Create Account" : "Sign In")}
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
            <button type="button" className="text-primary underline" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Sign in" : "Create one"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
