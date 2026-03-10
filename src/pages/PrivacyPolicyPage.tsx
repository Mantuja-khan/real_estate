import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: March 9, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Our Commitment to Your Privacy</h2>
          <p>We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Information We Collect</h2>
          <p className="mb-2">We collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Express interest in obtaining information about our products or services</li>
            <li>Participate in activities on the website</li>
            <li>Contact us for customer support</li>
            <li>Submit booking applications</li>
          </ul>
          <p className="mb-2">The personal information we collect may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name and contact information (email address, phone number)</li>
            <li>Demographic information</li>
            <li>Payment information (processed securely through payment gateways)</li>
            <li>KYC documents as required for booking</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
          <p className="mb-2">We use personal information collected via our website for a variety of business purposes, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To facilitate account creation and login process</li>
            <li>To send administrative information to you</li>
            <li>To fulfill and manage your bookings and payments</li>
            <li>To request feedback and contact you about your use of our website</li>
            <li>To deliver targeted advertising, newsletters, and other information regarding our projects</li>
            <li>To protect our website and investigate fraudulent activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Sharing Your Information</h2>
          <p className="mb-2">We do NOT share your personal information with third parties for their marketing purposes without your explicit consent. We may share information only:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>With service providers who perform services for us (under strict confidentiality agreements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Data Security</h2>
          <p className="mb-2">We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>SSL encryption for all data transmissions</li>
            <li>Regular security assessments and updates</li>
            <li>Limited access to personal information by employees</li>
            <li>Secure storage systems</li>
            <li>Regular backups and disaster recovery plans</li>
          </ul>
          <p className="mt-2">However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. Cookies and Tracking Technologies</h2>
          <p className="mb-2">We may use cookies and similar tracking technologies to access or store information. Types of cookies we use:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p className="mt-2">You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Your Privacy Rights</h2>
          <p className="mb-2">You have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Right to Access:</strong> You can request copies of your personal data</li>
            <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
            <li><strong>Right to Opt-Out:</strong> You can unsubscribe from marketing communications</li>
            <li><strong>Right to Object:</strong> You can object to certain data processing</li>
          </ul>
          <p className="mt-2">To exercise these rights, please contact us at <a href="mailto:yourgmail@gmail.com" className="text-primary underline">yourgmail@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">7. Data Retention</h2>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">8. Policy Updates</h2>
          <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">9. Contact Us</h2>
          <p>If you have questions or comments about this policy, you may contact us at:</p>
          <ul className="list-none mt-2 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:yourgmail@gmail.com" className="text-primary underline">yourgmail@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="https://yourdomain.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">yourdomain.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">10. Governing Law</h2>
          <p>This Privacy Policy is governed by the laws of India. Any dispute arising under this policy shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
