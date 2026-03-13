import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const RefundPolicyPage = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 mx-auto">
        <Link to="/" className="inline-flex items-center gap-1 text-[#2c6e3b] hover:underline font-bold text-sm mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">Refunds & Cancellation Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: {currentDate}</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <p>This Refunds & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for applications submitted through our platform.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Key Policy Points:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Refund Processing:</strong> All unsuccessful applications will be refunded within 60 Days of the Allotment Date.</li>
              <li><strong>Refund Method:</strong> Refunds will be processed on the same account that which user has provided us.</li>
              <li><strong>100% Refund Policy:</strong> There is 100% Refund policy with no charges if Allotment is not confirmed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">For Cancellation and More Information</h2>
            <p>Please contact us at:</p>
            <p className="mt-2">
              <a href="mailto:support@haryanadeendayalplot.org.in" className="text-primary underline">support@haryanadeendayalplot.org.in
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Dispute Resolution</h2>
            <p className="mb-3">All or any disputes arising out or touching upon or in relation to the terms and conditions of this Application/Agreement including the interpretation and validity of the terms and conditions thereof and the respective rights and obligations of the parties shall be settled amicably in mutual discussion.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Adjudication:</strong> The aggrieved party may also approach the adjudicating officer appointed under the Real Estate Act.</li>
              <li><strong>Jurisdiction:</strong> The Courts at Gurugram, Haryana, shall have exclusive jurisdiction to entertain the disputes between the parties hereto.</li>
            </ul>
          </section>

          <section className="pt-4 border-t border-border">
            <p className="text-sm">This policy is effective as of {currentDate}.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
