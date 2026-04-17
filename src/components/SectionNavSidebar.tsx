import { useEffect, useState } from "react";

const sections = [
  { id: "services", label: "Our Services" },
  { id: "team", label: "Your Doctor" },
  { id: "gallery-section", label: "Clinic Gallery" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

const SectionNavSidebar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block sticky top-[120px] self-start w-[200px] shrink-0 border border-primary p-[24px] rounded-3xl my-[80px]">
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block pl-4 py-2 border-l-2 font-body text-sm transition-all duration-200 ${
                active === id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNavSidebar;
