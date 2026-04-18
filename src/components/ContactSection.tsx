import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Schedule your appointment or reach out with any questions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-card rounded-2xl border border-border p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Book an Appointment</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" defaultValue="">
              <option value="" disabled>Select Service</option>
              <option>General Dentistry</option>
              <option>Cosmetic Dentistry</option>
              <option>Dental Implants</option>
              <option>Root Canal</option>
              <option>Orthodontics</option>
              <option>Pediatric Dentistry</option>
            </select>
            <textarea placeholder="Your Message" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity">
              Submit Appointment
            </button>
          </form>
        </div>
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Visit Us", lines: ["Shivamani Dental Clinic, opp. Govt hospital, near Kadimi hospital, Ansari Colony, Nalgonda, Telangana 508001", ""] },
            { icon: Phone, title: "Call Us", lines: ["08682230410", ""] },
            { icon: Mail, title: "Email Us", lines: ["shivamanidentalclinic19@gmail.com ", ""] },
            { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 10:30 AM – 2:00 PM & 5:30 PM - 8:00pm" , "Sunday: 10:30 AM – 1:00 PM"] },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                {item.lines.map((l) => (
                  <p key={l} className="font-body text-sm text-muted-foreground">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
