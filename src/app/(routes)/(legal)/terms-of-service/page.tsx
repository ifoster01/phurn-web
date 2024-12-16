'use client';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">Effective Date: December 16, 2024</p>
          
          <section className="mb-8">
            <p className="mb-4">
              Welcome to Phurn ("the App" or "the Service"), a platform designed to help users discover furniture from various online retailers. By accessing or using Phurn, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Service, you affirm that you are at least 18 years old or the age of majority in your jurisdiction, and you are capable of entering into a binding legal agreement. If you are using the Service on behalf of an entity, you represent and warrant that you have the authority to bind the entity to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Phurn provides a centralized platform for users to browse furniture from various online retailers. Users can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">View furniture listings and their associated details.</li>
              <li className="mb-2">Follow links to third-party retailer websites to make purchases.</li>
              <li className="mb-2">Save favorite items and create wishlists (requires authentication).</li>
            </ul>
            <p className="mb-4 font-bold">
              Phurn does not sell furniture directly and is not responsible for transactions, policies, or activities on third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              To use certain features, such as saving items or creating wishlists, you must create an account and authenticate your identity. By creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Provide accurate, complete, and up-to-date information.</li>
              <li className="mb-2">Safeguard your login credentials and not share them with others.</li>
              <li className="mb-2">Notify us immediately if you suspect unauthorized access to your account.</li>
            </ul>
            <p className="mb-4 font-bold">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Content</h2>
            <p className="mb-4">
              The Service displays content and links to third-party websites. Phurn is not responsible for the accuracy, legality, or quality of third-party content. When you interact with third-party websites, you are subject to their terms and policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Prohibited Activities</h2>
            <p className="mb-4">
              When using the Service, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Use the Service for any unlawful purpose or in violation of any local, state, national, or international laws.</li>
              <li className="mb-2">Engage in any activity that could damage, disable, overburden, or impair the Service's functionality.</li>
              <li className="mb-2">Scrape, crawl, or collect data from the Service without our permission.</li>
              <li className="mb-2">Attempt to hack, exploit, or gain unauthorized access to the Service's systems or other users' accounts.</li>
              <li className="mb-2">Impersonate another person or entity.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, and software related to Phurn are owned by us or our licensors. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
            <p className="mb-4">
              The Service is provided "as is" and "as available." We make no warranties regarding the reliability, availability, or accuracy of the Service. Your use of the Service is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Phurn and its affiliates shall not be liable for indirect, incidental, or consequential damages arising out of your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate your access to the Service at any time, with or without cause.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to These Terms</h2>
            <p className="mb-4">
              We may update these Terms from time to time. Continued use of the Service after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to the Terms</h2>
            <p className="mb-4">
              We may update these Terms from time to time. When we do, we will revise the effective date at the top of
              this page. Your continued use of the App after the changes are made will constitute acceptance of the
              updated Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by and construed in accordance with the laws of New York State, without regard
              to its conflict of law principles. Any disputes arising out of these Terms or the use of the Service will be
              resolved in the courts located in New York State.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns about these Terms, please contact us at:
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