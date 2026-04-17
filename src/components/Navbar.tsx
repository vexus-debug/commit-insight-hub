import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSiteContent } from "@/contexts/SiteContentContext";
import logo from "@/assets/bestojis-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { content } = useSiteContent();

  return (
    <nav className="bg-background shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt={`${content.siteName} logo`} className="h-10 w-10 object-contain" />
          <span className="font-heading text-base sm:text-lg font-bold text-foreground leading-tight">
            {content.siteName}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/donate" className="hidden sm:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Donate Now
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background border-l border-border">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-foreground">
                  <img src={logo} alt="" className="h-8 w-8 object-contain" />
                  <span className="font-heading text-base">{content.siteName}</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col">
                {content.navLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link to="/donate" onClick={() => setOpen(false)} className="mt-4">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
