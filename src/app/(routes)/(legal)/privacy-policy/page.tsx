'use client';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <Button
        variant="ghost"
        className="absolute top-4 left-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">Effective Date: December 16, 2024</p>
          
          <section className="mb-8">
            <p className="mb-4">
              At Phurn, we prioritize your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information. By using the Service, you agree to this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Account Information: Name, email address, and password when you create an account.</li>
              <li className="mb-2">Usage Data: Information about how you interact with the Service, including saved items and wishlist activity.</li>
              <li className="mb-2">Device Information: IP address, browser type, and device identifiers.</li>
              <li className="mb-2">Third-Party Data: Information shared by third-party retailers when you interact with their content through the Service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Provide, maintain, and improve the functionality of the Service.</li>
              <li className="mb-2">Personalize your experience, including saving items and managing wishlists.</li>
              <li className="mb-2">Communicate with you regarding updates, promotions, or support.</li>
              <li className="mb-2">Analyze usage patterns to enhance the Service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Service Providers: Companies that assist us in delivering the Service (e.g., hosting, analytics).</li>
              <li className="mb-2">Third-Party Retailers: When you interact with their content.</li>
              <li className="mb-2">Legal Authorities: If required by law or to protect our rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Understand user behavior.</li>
              <li className="mb-2">Remember your preferences.</li>
              <li className="mb-2">Improve the functionality of the Service.</li>
            </ul>
            <p className="mb-4">
              You can manage cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="mb-4">
              We retain your information as long as necessary to fulfill the purposes outlined in this Policy or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Access, update, or delete your personal information.</li>
              <li className="mb-2">Restrict or object to certain data processing activities.</li>
              <li className="mb-2">Lodge a complaint with a data protection authority.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p className="mb-4">
              We implement industry-standard measures to protect your information from unauthorized access, disclosure, or loss. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
            <p className="mb-4">
              The Service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Continued use of the Service after updates constitutes acceptance of the revised Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: ifoster41901@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}