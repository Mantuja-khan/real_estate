import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 container py-16 max-w-3xl">
      <h1 className="text-3xl font-bold font-display mb-8">Terms & Conditions</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using the Haryana deen dayal awas yojna website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Services</h2>
          <p>Haryana deen dayal awas yojna provides real estate listing and inquiry services. We act as an intermediary between property buyers and sellers. We do not guarantee the accuracy of property listings and recommend independent verification before making any purchase decisions.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. User Information</h2>
          <p>When submitting an inquiry, you agree to provide accurate and complete information including your name, phone number, preferred area, and Aadhaar number. This information will be used solely for the purpose of processing your property inquiry.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Privacy & Data Protection</h2>
          <p>We are committed to protecting your personal information. Your Aadhaar number and other personal details are stored securely and will not be shared with third parties without your explicit consent, except as required by law.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Property Listings</h2>
          <p>All property listings are provided for informational purposes only. Prices, availability, and property details are subject to change without notice. Haryana deen dayal awas yojna does not guarantee the accuracy or completeness of any listing information.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>Haryana deen dayal awas yojna shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or reliance on information provided on our website.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Modifications</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the services constitutes acceptance of the modified terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Contact</h2>
          <p>For any questions regarding these Terms & Conditions, please reach out to us through our inquiry form or contact our support team.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
