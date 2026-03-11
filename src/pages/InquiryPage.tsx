import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";

const InquiryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="mb-16">
            <InquiryForm />
          </div>

          {/* Full-width Refunds & Cancellation Policy */}
          <div className="text-sm text-muted-foreground bg-accent/20 p-8 rounded-2xl border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-2">Refunds & Cancellation Policy</h3>
            <p className="mb-6 text-xs font-medium uppercase tracking-wider text-primary">Last Updated: March 10, 2026</p>
            
            <p className="mb-6 text-base">
              This Refunds & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for applications submitted through our platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-base text-foreground mb-4">Key Policy Points:</h4>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Refund Processing:</strong> All unsuccessful applications will be refunded within 60 Days of the Allotment Date.</li>
                  <li><strong>Refund Method:</strong> Refunds will be processed on the same account that which user has provided us.</li>
                  <li><strong>100% Refund Policy:</strong> There is 100% Refund policy with no charges if Allotment is not confirmed.</li>
                </ul>
              </div>
              
              <div className="md:pl-8 md:border-l">
                <h4 className="font-bold text-base text-foreground mb-4">For Cancellation and More Information</h4>
                <p>
                  Please contact our support team at:<br />
                  <a href="mailto:support@haryanadeendayalplot.org.in" className="text-primary font-bold hover:underline mt-2 inline-block text-base">
                    support@haryanadeendayalplot.org.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InquiryPage;

