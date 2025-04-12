import Link from "next/link"

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to SIPRIFI. These Terms and Conditions govern your use of our platform and services. By accessing or
            using SIPRIFI, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not
            access the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
          <p>
            All content, features, and functionality on the SIPRIFI platform, including but not limited to text,
            graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the
            compilation thereof, are the exclusive property of SIPRIFI, its licensors, or other content suppliers and
            are protected by international copyright, trademark, patent, trade secret, and other intellectual property
            or proprietary rights laws.
          </p>
          <p className="mt-2">
            The SIPRIFI name, logo, and all related names, logos, product and service names, designs, and slogans are
            trademarks of SIPRIFI or its affiliates. You may not use such marks without the prior written permission of
            SIPRIFI.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Prohibited Uses</h2>
          <p>You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Use the platform in any way that violates any applicable law or regulation</li>
            <li>
              Attempt to copy, modify, duplicate, create derivative works from, frame, mirror, republish, download,
              display, transmit, or distribute all or any portion of the platform
            </li>
            <li>
              Attempt to reverse compile, disassemble, reverse engineer, or otherwise reduce to human-perceivable form
              all or any part of the platform
            </li>
            <li>
              Access without authority, interfere with, damage, or disrupt any part of the platform, any equipment or
              network on which the platform is stored, or any software used in the provision of the platform
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
          <p>
            The platform is provided on an "as is" and "as available" basis, without any warranties of any kind, either
            express or implied. SIPRIFI disclaims all warranties, express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall SIPRIFI, its directors, employees, partners, agents, suppliers, or affiliates be liable
            for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
            inability to access or use the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws applicable in the jurisdiction where
            SIPRIFI is registered, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at legal@siprifi.com.</p>
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
