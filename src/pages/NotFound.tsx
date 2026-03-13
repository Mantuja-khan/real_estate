import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full mx-4">
        <h1 className="mb-2 text-6xl font-black text-[#2c6e3b]">404</h1>
        <p className="mb-8 text-xl font-bold text-gray-700 uppercase tracking-wide">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#2c6e3b] text-white px-6 py-3 rounded-xl transition-all font-bold hover:bg-[#1e4d29] shadow-lg hover:shadow-[#2c6e3b]/20"
        >
          <Home className="h-5 w-5" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
