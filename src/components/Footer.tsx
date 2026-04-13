import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="gradient-secondary text-secondary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Image
  src="/white-logo.png"
  alt="Shivamani Dental"
  width={200}
  height={40}
  className="object-contain"
/>
            </a>
            <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
              Premium dental care with advanced technology and compassionate service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Team", "Contact"].map((l) => (
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
              <p>Shivamani Dental, opp. Govt hospital, near Kadimi hospital, Ansari Colony, Nalgonda, Telangana 508001</p>
              <p>+91 8682230410</p>
              <p>shankargittaboyina@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Shivamani Dental. All rights reserved.
          </p>
         <div className="text-sm">
  Developed by{" "}
  <a 
    href="https://sellute.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="font-bold underline hover:underline hover:text-[#5fbaef] hover:font-bold transition-all duration-200"
  >
    Sellute
  </a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
