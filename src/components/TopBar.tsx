import { MapPin, Phone, Mail } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";

const TopBar = () => {
  const { content } = useSiteContent();
  const tb = content.topBar;

  return (
    <div className="bg-topbar text-topbar-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-xs">
              <span className="text-muted-foreground">{tb.addressLabel}</span>
              <br />
              {tb.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" />
            <span className="text-xs">
              <span className="text-muted-foreground">{tb.phoneLabel}</span>
              <br />
              {tb.phone}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-xs">
              <span className="text-muted-foreground">{tb.emailLabel}</span>
              <br />
              {tb.email}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {tb.socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-topbar-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
              <span className="text-xs">{link.shortLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
