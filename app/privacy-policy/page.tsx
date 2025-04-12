import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At SIPRIFI, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
            will inform you about how we look after your personal data when you visit our platform and tell you about
            your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
          <p>
            We may collect, use, store, and transfer different kinds of personal data about you which we have grouped
            together as follows:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Identity Data: includes first name, last name, username or similar identifier</li>
            <li>Contact Data: includes email address and telephone numbers</li>
            <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version</li>
            <li>Usage Data: includes information about how you use our platform and services</li>
            <li>Financial Data: includes wallet addresses and transaction history on the platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>To register you as a new user</li>
            <li>To process and deliver your service requests</li>
            <li>To manage our relationship with you</li>
            <li>To improve our platform, products/services, marketing, or customer relationships</li>
            <li>To recommend products or services which may be of interest to you</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your
            personal data to those employees, agents, contractors, and other third parties who have a business need to
            know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data,
            including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The right to request access to your personal data</li>
            <li>The right to request correction of your personal data</li>
            <li>The right to request erasure of your personal data</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to request restriction of processing your personal data</li>
            <li>The right to request transfer of your personal data</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@siprifi.com.</p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
