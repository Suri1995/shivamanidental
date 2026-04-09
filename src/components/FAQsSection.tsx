import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What services do you offer?", a: "We offer general dentistry, cosmetic dentistry, dental implants, orthodontics, root canal therapy, pediatric dentistry, and more." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage." },
  { q: "How often should I visit the dentist?", a: "We recommend regular check-ups every 6 months for optimal oral health. Some conditions may require more frequent visits." },
  { q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening performed by our experts is completely safe and can brighten your smile by several shades." },
  { q: "What should I do in a dental emergency?", a: "Call our office immediately. We offer same-day emergency appointments to address urgent dental issues promptly." },
];

const FAQsSection = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Find quick answers to common questions about our services.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-[var(--shadow-card)]"
          >
            <AccordionTrigger className="font-heading text-sm font-semibold text-foreground hover:text-primary py-4 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQsSection;
