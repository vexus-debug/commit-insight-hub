import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { SaveButton } from "@/components/admin/EditorComponents";
import {
  Settings, Home, Info, BookOpen, Image, Phone, Heart,
  Users, Newspaper, LayoutDashboard, LogOut, RotateCcw, ExternalLink,
  Menu, X, ChevronRight, HelpCircle, Calendar, Briefcase, FileText, Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Global Settings", path: "/admin/global", icon: Settings },
  { label: "Home Page", path: "/admin/home", icon: Home },
  { label: "About Page", path: "/admin/about", icon: Info },
  { label: "Programs Page", path: "/admin/programs", icon: BookOpen },
  { label: "Gallery", path: "/admin/gallery", icon: Image },
  { label: "Contact Page", path: "/admin/contact", icon: Phone },
  { label: "Donate Page", path: "/admin/donate", icon: Heart },
  { label: "Get Involved", path: "/admin/get-involved", icon: Users },
  { label: "News Page", path: "/admin/news", icon: Newspaper },
  { label: "FAQ Page", path: "/admin/faq", icon: HelpCircle },
  { label: "Events Page", path: "/admin/events", icon: Calendar },
  { label: "Careers Page", path: "/admin/careers", icon: Briefcase },
  { label: "Terms of Service", path: "/admin/terms", icon: FileText },
  { label: "Privacy Policy", path: "/admin/privacy", icon: Shield },
];

const AdminLayout = () => {
  const { isAdmin, logout, loading, resetContent } = useSiteContent();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAdmin) navigate("/admin/login");
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-admin-surface">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) return null;

  const currentPage = sidebarLinks.find(l => l.path === location.pathname)?.label || "Dashboard";

  return (
    <div className="min-h-screen flex bg-admin-surface">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-72 lg:w-64
          flex flex-col shrink-0
          bg-admin-sidebar text-admin-sidebar-foreground
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <Link to="/admin" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-admin-sidebar-active rounded-xl flex items-center justify-center shadow-lg shadow-black/20">
              <Settings className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="font-heading text-base font-bold text-white tracking-tight">Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 text-white/70"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ScrollArea className="flex-1 py-3">
          <nav className="space-y-0.5 px-3">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-admin-sidebar-active text-white font-semibold shadow-md shadow-black/15"
                      : "text-white/65 hover:bg-white/8 hover:text-white/90"
                  }`}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  <span>{link.label}</span>
                  {isActive && <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-60" />}
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        <div className="p-3 border-t border-white/10 space-y-1.5">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-xs text-white/65 hover:text-white hover:bg-white/8">
              <ExternalLink className="h-3.5 w-3.5" />
              View Website
            </Button>
          </a>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-xs text-white/65 hover:text-white hover:bg-white/8"
            onClick={() => {
              if (confirm("Reset all content to defaults? This cannot be undone.")) {
                resetContent();
              }
            }}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset Content
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-xs text-red-300 hover:text-red-200 hover:bg-red-500/15"
            onClick={async () => {
              await logout();
              navigate("/admin/login");
            }}
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        <header className="sticky top-0 z-30 bg-admin-surface/80 backdrop-blur-lg border-b border-border lg:hidden">
          <div className="flex items-center justify-between px-4 h-14">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 rounded-xl hover:bg-muted text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="font-heading text-sm font-bold text-foreground">{currentPage}</span>
            <div className="w-9" />
          </div>
        </header>

        <main className="flex-1">
          <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <Outlet />
          </div>
        </main>
        <SaveButton />
      </div>
    </div>
  );
};

export default AdminLayout;
