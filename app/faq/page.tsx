import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing FAQ | Common Questions About Roof Installation & Repair",
  description:
    "Get answers to frequently asked questions about roofing installation, repair costs, materials, warranties, and timelines. Expert advice from ZPR Roofing.",
  openGraph: {
    title: "Roofing FAQ | Your Questions Answered",
    description: "Common questions about roofing services, costs, materials, and warranties answered by experts.",
  },
}

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "How long does a typical roof installation take?",
          answer:
            "Most residential roof installations take 1-3 days depending on the size of your home, weather conditions, and the complexity of your roof. We'll provide a specific timeline during your estimate.",
        },
        {
          question: "Do you offer free estimates?",
          answer:
            "Yes! We provide free, no-obligation estimates for all roofing projects. Our team will inspect your roof, discuss your options, and provide a detailed written quote.",
        },
        {
          question: "Are you licensed and insured?",
          answer:
            "Absolutely. ZPR Roofing is fully licensed, bonded, and insured in Illinois. We carry both general liability and workers' compensation insurance to protect you and our team.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We serve Rockford and over 50 communities throughout Northern Illinois, including Loves Park, Machesney Park, Belvidere, and surrounding Winnebago, Boone, and Ogle counties.",
        },
      ],
    },
    {
      category: "Costs & Pricing",
      questions: [
        {
          question: "How much does a new roof cost?",
          answer:
            "Roof costs vary based on size, materials, pitch, and complexity. On average, residential roof replacements range from $8,000 to $25,000. We provide detailed, transparent pricing in every estimate with no hidden fees.",
        },
        {
          question: "Do you offer financing options?",
          answer:
            "We assist homeowners with third-party financing options, including roofing and home improvement loans, through trusted lending partners.",
        },
        {
          question: "Does insurance cover roof replacement?",
          answer:
            "It depends on the cause of damage. Storm damage, hail, and wind damage are often covered by homeowners insurance. We assist homeowners in navigating the insurance claim process.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, checks, all major credit cards, and offer financing options. Payment is typically due upon project completion, with deposits required for larger projects.",
        },
      ],
    },
    {
      category: "Materials & Options",
      questions: [
        {
          question: "What roofing materials do you install?",
          answer:
            "We install all major roofing systems including asphalt shingles, metal roofing, TPO, EPDM, and flat roofing systems. We'll help you choose the best material for your home, budget, and aesthetic preferences.",
        },
        {
          question: "How long do different roofing materials last?",
          answer:
            "Asphalt shingles last 20-30 years, metal roofing 40-70 years, and TPO/EPDM systems 20-30 years. Actual lifespan depends on installation quality, maintenance, and weather conditions.",
        },
        {
          question: "What's the difference between 3-tab and architectural shingles?",
          answer:
            "Architectural shingles are thicker, more durable, and have a dimensional appearance. They typically last 10-15 years longer than 3-tab shingles and come with better warranties.",
        },
        {
          question: "Can I reroof over existing shingles?",
          answer:
            "In some cases yes, but we typically recommend a complete tear-off for better results and longer lifespan. Building codes also limit the number of shingle layers allowed. We'll assess your specific situation during inspection.",
        },
      ],
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          question: "What does the roofing process involve?",
          answer:
            "1) Free inspection and estimate, 2) Material selection and contract signing, 3) Scheduling and preparation, 4) Professional installation, 5) Thorough cleanup and final inspection, 6) Warranty registration.",
        },
        {
          question: "Will you handle permits and inspections?",
          answer:
            "Yes, we handle all necessary permits and coordinate required inspections with local building departments. This is included in our service at no extra charge.",
        },
        {
          question: "What happens if it rains during installation?",
          answer:
            "We monitor weather closely and will protect your home with tarps if rain is forecast. We won't start a project if heavy rain is expected, and we'll reschedule if necessary to ensure quality installation.",
        },
        {
          question: "How much mess is involved?",
          answer:
            "Roofing can be messy, but we take cleanup seriously. We use tarps to protect landscaping, have magnetic tools to collect nails, and perform thorough cleanup daily. Your property will be cleaner than we found it.",
        },
      ],
    },
    {
      category: "Warranties & Maintenance",
      questions: [
        {
          question: "What warranties do you offer?",
          answer:
            "We offer workmanship warranties on all installations plus manufacturer material warranties. Workmanship warranties typically range from 5-10 years, while material warranties can be 20-50 years depending on the product.",
        },
        {
          question: "How often should I inspect my roof?",
          answer:
            "We recommend professional inspections every 2-3 years and after major storms. Visual inspections from the ground should be done seasonally to check for obvious damage or debris.",
        },
        {
          question: "Do you offer roof maintenance services?",
          answer:
            "Yes, we offer maintenance plans including annual inspections, gutter cleaning, minor repairs, and preventive care to extend your roof's lifespan.",
        },
        {
          question: "What voids a roof warranty?",
          answer:
            "Common warranty voids include improper installation (use licensed contractors!), lack of maintenance, unauthorized modifications, and using incompatible products. Always consult your contractor before making roof changes.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Get answers to common questions about roofing installation, repairs, costs, and more. Can't find what you're
            looking for? Contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask a Question
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              (815) 904-9777
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold mb-6">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((item, questionIndex) => (
                  <AccordionItem
                    key={questionIndex}
                    value={`${categoryIndex}-${questionIndex}`}
                    className="border border-border rounded-xl px-6 bg-secondary/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-medium pr-4">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our roofing experts are here to help. Get in touch for personalized answers and a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="rounded-full">
                Get Free Estimate
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
