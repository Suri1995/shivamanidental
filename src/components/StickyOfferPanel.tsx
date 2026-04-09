import { CalendarCheck, Gift, Clock } from "lucide-react";
import sticky1 from "@/assets/sticky-1.jpg";
import sticky2 from "@/assets/sticky-2.jpg";
import sticky3 from "@/assets/sticky-3.jpg";

const StickyOfferPanel = () => {
  return (
    <div className="hidden xl:block sticky top-[120px] self-start w-[280px] shrink-0">
      <div className="rounded-2xl bg-card border border-border shadow-[var(--shadow-elevated)] p-6 space-y-5">
        <div className="flex items-center gap-2">
          <Gift className="w-5 h-5 text-accent" />
          <span className="font-heading text-sm font-bold text-foreground">Special Offer</span>
        </div>
        <div className="gradient-primary rounded-xl p-4 text-center">
          <div className="font-heading text-3xl font-bold text-primary-foreground">20% OFF</div>
          <div className="font-body text-sm text-primary-foreground/80 mt-1">First Visit Consultation</div>
        </div>

        {/* 3 Images */}
        <div className="grid grid-cols-3 gap-2">
          <img src={sticky1} alt="Dental clinic" className="w-full h-20 object-cover rounded-lg" loading="lazy" width={512} height={512} />
          <img src={sticky2} alt="Dental equipment" className="w-full h-20 object-cover rounded-lg" loading="lazy" width={512} height={512} />
          <img src={sticky3} alt="Happy patient" className="w-full h-20 object-cover rounded-lg" loading="lazy" width={512} height={512} />
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <div className="font-body text-sm font-medium text-foreground">Mon - Sat</div>
              <div className="font-body text-xs text-muted-foreground">9:00 AM – 8:00 PM</div>
            </div>
          </div>
        </div>
        <a
          href="#contact"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <CalendarCheck className="w-4 h-4" />
          Claim Offer
        </a>
        <p className="font-body text-xs text-muted-foreground text-center">
          Limited time. No obligations.
        </p>
      </div>
    </div>
  );
};

export default StickyOfferPanel;
