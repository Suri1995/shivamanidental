import { Star } from "lucide-react";

const testimonials = [
  { name: "Meera S.", text: "Absolutely wonderful experience! The team made me feel at ease during my root canal. Painless and professional.", rating: 5 },
  { name: "Arun K.", text: "Best dental clinic in the city. My kids actually enjoy coming here. Dr. Anitha is amazing with children!", rating: 5 },
  { name: "Lakshmi P.", text: "Got my smile makeover done here. The cosmetic dentistry team transformed my confidence. Highly recommend!", rating: 5 },
];

const Testimonials = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Patient <span className="text-primary">Testimonials</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Hear what our patients have to say about their experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 border border-border hover-lift">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4 italic">
              "{t.text}"
            </p>
            <div className="font-heading text-sm font-semibold text-foreground">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
