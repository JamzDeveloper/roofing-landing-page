import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const faqs = [
    {
      question: "How long does a roof installation take?",
      answer:
        "Most residential roof installations take 1-3 days depending on size, weather, and complexity. We'll provide a specific timeline during your free estimate.",
    },
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes! We provide free, no-obligation estimates for all roofing projects. Our team will inspect your roof and provide a detailed written quote.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. ZPR Roofing is fully licensed, bonded, and insured in Illinois with both general liability and workers' compensation coverage.",
    },
    {
      question: "What roofing materials do you install?",
      answer:
        "We install all major roofing systems including asphalt shingles, slate, metal roofing, TPO, EPDM, and flat roofing systems tailored to your needs.",
    },
    {
      question: "Does insurance cover roof replacement?",
      answer:
        "Storm damage, hail, and wind damage are often covered. We can help navigate the insurance claim process and work directly with your insurance company.",
    },
    {
      question: "What warranties do you offer?",
      answer:
        "We offer comprehensive workmanship warranties (5-10 years) plus manufacturer material warranties (20-50 years depending on product).",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold text-balance mb-6">
              Common Questions About Our Roofing Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get quick answers to frequently asked questions. Need more
              details? Visit our comprehensive FAQ page or contact us directly.
            </p>
            <Link href="/faq">
              <Button variant="outline" className="rounded-full bg-transparent">
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border rounded-xl px-6 bg-background"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
