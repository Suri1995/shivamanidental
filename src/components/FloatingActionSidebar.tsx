import { CalendarCheck, Phone, MessageCircle, MapPin, Stethoscope } from "lucide-react";

const actions = [
  { icon: CalendarCheck, label: "Book Appointment", href: "#contact" },
  { icon: Phone, label: "Call Us", href: "tel:+919876543210" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919876543210" },
  { icon: MapPin, label: "Location", href: "#contact" },
  { icon: Stethoscope, label: "Services", href: "#services" },
];

const FloatingActionSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 pr-3">
      {actions.map((action, i) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group relative flex items-center justify-end animate-fade-in-right"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {/* Tooltip */}
          <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-body text-xs font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            {action.label}
          </span>
          {/* Icon button */}
          <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-[var(--shadow-card)] group-hover:scale-110 transition-transform duration-300">
            <action.icon className="w-5 h-5" />
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingActionSidebar;
