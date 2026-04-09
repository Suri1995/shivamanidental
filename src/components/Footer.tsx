import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-secondary text-secondary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Shivamani Dental" className="h-8 w-8 object-contain" loading="lazy" />
              <span className="font-heading font-bold text-lg text-secondary-foreground">
                Shivamani Dental
              </span>
            </div>
            <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
              Premium dental care with advanced technology and compassionate service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="font-body text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics"].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2 font-body text-sm text-secondary-foreground/70">
              <p>123 Dental Avenue, MG Road</p>
              <p>Bangalore, Karnataka 560001</p>
              <p>+91 98765 43210</p>
              <p>info@shivamanidental.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Shivamani Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
