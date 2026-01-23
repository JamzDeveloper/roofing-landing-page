import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ZPR Roofing",
  description:
    "Terms of Service for ZPR Roofing. Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using ZPR Roofing's website and services, you agree
            to be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using our services.
          </p>

          <br></br>
          <br></br>
          <h2>Services</h2>
          <p>
            ZPR Roofing provides residential roofing services including but not
            limited to installations, repairs, inspections, and maintenance. All
            services are subject to availability and provided in accordance with
            Illinois state regulations and local building codes.
          </p>

          <br></br>
          <br></br>
          <h2>Estimates and Quotes</h2>
          <ul>
            <li>
              All estimates and quotes provided are based on the information
              available at the time of inspection and are valid for 30 days
              unless otherwise stated.
            </li>
            <li>
              Actual costs may vary if project scope changes or unforeseen
              issues are discovered.
            </li>
            <li>
              Final pricing will be confirmed in writing before work begins.
            </li>
            <li>
              Estimates do not constitute a contract until both parties sign a
              formal agreement.
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2>Project Contracts</h2>
          <p>All roofing projects require a signed contract that specifies:</p>
          <ul>
            <li>Scope of work and materials to be used</li>
            <li>Total cost and payment terms</li>
            <li>Project timeline and completion date (weather permitting)</li>
            <li>Warranty information</li>
          </ul>

          <br></br>
          <br></br>
          <h2>Payment Terms</h2>
          <ul>
            <li>
              Payment schedules will be outlined in your project contract.
            </li>
            <li>
              A 50% deposit is required on all retail projects to secure
              scheduling and cover material procurement. Deposit requirements
              vary depending on the type of project. For insurance-covered work,
              a deposit is required, while retail projects may have different
              terms.
            </li>
            <li>Final payment is due upon project completion</li>
            <li>
              We accept cash, checks, credit cards, and offer financing options.
            </li>
            <li>
              Late payments may incur additional fees as specified in the
              contract.
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2>Cancellations and Changes</h2>
          <ul>
            <li>
              In the event Customer cancels this Contract or any part thereof
              after midnight on the third business date after signing this
              Contract, Customer shall pay Contractor 20% of the total contract
              including any supplements approved at the time of cancellation as
              liquidated damages or anticipated profit but not as penalty.
              Contractor shall be entitled to recover attorneys’ fees and costs
              incurred by Contractor in relation to collection or enforcement of
              this Contract from Customer.
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2>Warranties</h2>
          <ul>
            <li>
              All work is covered by our workmanship warranty as specified in
              your contract.
            </li>
            <li>
              Material warranties are provided by manufacturers and vary by
              product.
            </li>
            <li>
              Warranty coverage requires proper maintenance and excludes damage
              from neglect, accidents, or acts of nature.
            </li>
            <li>
              Warranty claims must be submitted in writing with documentation.
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2>Liability and Insurance</h2>
          <ul>
            <li>
              ZPR Roofing maintains general liability and workers' compensation
              insurance.
            </li>
            <li>
              We are not liable for damage to underground utilities not properly
              marked.
            </li>
            <li>
              Homeowner is responsible for protecting personal property and
              moving items that may be affected by the project.
            </li>
            <li>
              We are not responsible for pre-existing roof or structural issues
              unless specifically addressed in the contract.
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2>Property Access</h2>
          <p>By hiring ZPR Roofing, you grant us:</p>
          <ul>
            <li>Access to your property during normal business hours</li>
            <li>
              Permission to use water and electricity as needed for the project
            </li>
            <li>
              Space for equipment, material storage, and debris containers
            </li>
            <li>The right to place temporary signage (with your approval)</li>
          </ul>

          <br></br>
          <br></br>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of ZPR Roofing and protected by copyright
            laws. Unauthorized use is prohibited.
          </p>

          <br></br>
          <br></br>
          <h2>Website Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Submit false or misleading information</li>
            <li>Transmit viruses or malicious code</li>
            <li>Harvest or collect information about other users</li>
          </ul>

          <br></br>
          <br></br>
          <h2>Disclaimer of Warranties</h2>
          <p>
            Our website and online tools are provided "as is" without warranties
            of any kind. While we strive for accuracy, we do not guarantee that
            the website will be error-free, uninterrupted, or free from viruses.
          </p>

          <br></br>
          <br></br>
          <h2>Limitation of Liability</h2>
          <p>
            ZPR Roofing's liability for any claim arising from our services or
            website use is limited to the amount paid for the specific service.
            We are not liable for indirect, incidental, or consequential
            damages.
          </p>

          <br></br>
          <br></br>
          <h2>Dispute Resolution</h2>
          <ul>
            <li>
              Any disputes will first be addressed through good faith
              negotiation.
            </li>
            <li>
              If negotiation fails, disputes may be submitted to mediation.
            </li>
            <li>
              These terms are governed by the laws of the State of Illinois.
            </li>
            <li>
              Any legal action must be filed in Winnebago County, Illinois.
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions will continue in full force and effect.
          </p>

          <br></br>
          <br></br>
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting. Your continued
            use of our services constitutes acceptance of the updated terms.
          </p>

          <br></br>
          <br></br>
          <h2>Contact Information</h2>
          <p>For questions about these Terms of Service, contact us:</p>
          <ul>
            <li>
              <strong>Email:</strong> info@zproofing.com
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
  );
}
