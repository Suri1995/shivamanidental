import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-[var(--shadow-elevated)]">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href="tel:+918682230410"
          className="flex flex-col items-center gap-1 py-3 text-primary"
        >
          <Phone className="w-5 h-5" />
          <span className="font-body text-xs font-medium">Call</span>
        </a>
        <a
          href="https://wa.me/919959582025"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-accent"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-body text-xs font-medium">WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 py-3 text-primary"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="font-body text-xs font-medium">Book</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
