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
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <p>This Refunds & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for applications submitted through this website</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Key Policy Points</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Refund for Unsuccessful Applications:</strong>
                <p>In case an applicant is not allotted a plot under the scheme, the entire application amount shall be refunded.</p>
              </li>
              <li>
                <strong>Refund Processing Time:</strong>
                <p>Refunds for unsuccessful applicants will be processed within 60 days from the date of allotment declaration.</p>
              </li>
              <li>
                <strong>Mode of Refund:</strong>
                <p>The refund amount will be credited to the same bank account or payment source provided by the applicant at the time of application.</p>
              </li>
              <li>
                <strong>100% Refund Policy:</strong>
                <p>In case the allotment is not confirmed, the applicant shall be entitled to a 100% refund of the amount paid, without any deductions or charges.</p>
              </li>
              <li>
                <strong>Processing Authority:</strong>
                <p>All refunds will be processed as per the applicable guidelines of the concerned authority or developer.</p>
              </li>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
