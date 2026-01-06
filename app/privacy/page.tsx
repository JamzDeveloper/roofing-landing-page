import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ZPR Roofing",
  description: "Privacy Policy for ZPR Roofing. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>

          <h2>Introduction</h2>
          <p>
            ZPR Roofing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Request a quote or estimate</li>
            <li>Fill out a contact form</li>
            <li>Schedule an appointment</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via phone or email</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact information (email, phone number, address)</li>
            <li>Property information</li>
            <li>Project details and preferences</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your requests and provide estimates</li>
            <li>Communicate with you about our services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and enhance security</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., payment
              processing, analytics, email services)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business
            </li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control
            cookie preferences through your browser settings. Note that disabling cookies may affect website
            functionality.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where we rely on consent to process your information</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of
            these external sites. We encourage you to review their privacy policies.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul>
            <li>
              <strong>Email:</strong> privacy@zproofing.com
            </li>
            <li>
              <strong>Phone:</strong> (815) 904-9777
            </li>
            <li>
              <strong>Address:</strong> Rockford, IL
            </li>
          </ul>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
