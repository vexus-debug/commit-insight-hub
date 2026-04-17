import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";

const Footer = () => {
  const { content } = useSiteContent();
  const f = content.footer;

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{content.logoText}</span>
              </div>
              <span className="font-heading text-lg font-bold">{content.siteName}</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {f.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {f.quickLinks.map((link) => (
                <li key={link.path}><Link to={link.path} className="hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {f.infoLinks.map((link) => (
                <li key={link.path}><Link to={link.path} className="hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                {f.contactAddress}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                {f.contactPhone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                {f.contactEmail}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} {f.copyright}
          </p>
          <div className="flex items-center gap-4">
            {f.socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent text-xs transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
