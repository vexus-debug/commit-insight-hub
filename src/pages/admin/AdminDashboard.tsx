import { Link } from "react-router-dom";
import { useSiteContent } from "@/contexts/SiteContentContext";
import {
  Settings, Home, Info, BookOpen, Image, Phone, Heart,
  Users, Newspaper, ArrowRight, HelpCircle, Calendar, Briefcase, FileText, Shield,
} from "lucide-react";

const sections = [
  { label: "Global Settings", description: "Site name, logo, topbar, navbar, footer", path: "/admin/global", icon: Settings, color: "from-emerald-500/20 to-teal-500/10" },
  { label: "Home Page", description: "Hero, mission, journey, impact, gallery", path: "/admin/home", icon: Home, color: "from-blue-500/20 to-cyan-500/10" },
  { label: "About Page", description: "Story, vision, mission, timeline, values", path: "/admin/about", icon: Info, color: "from-violet-500/20 to-purple-500/10" },
  { label: "Programs Page", description: "Programs, locations, process steps", path: "/admin/programs", icon: BookOpen, color: "from-amber-500/20 to-orange-500/10" },
  { label: "Gallery", description: "Add, remove, edit gallery images", path: "/admin/gallery", icon: Image, color: "from-pink-500/20 to-rose-500/10" },
  { label: "Contact Page", description: "Contact methods, form, social links", path: "/admin/contact", icon: Phone, color: "from-sky-500/20 to-blue-500/10" },
  { label: "Donate Page", description: "Bank details, donation content", path: "/admin/donate", icon: Heart, color: "from-red-500/20 to-rose-500/10" },
  { label: "Get Involved", description: "Volunteer roles, partnerships, events", path: "/admin/get-involved", icon: Users, color: "from-green-500/20 to-emerald-500/10" },
  { label: "News Page", description: "News stories and articles", path: "/admin/news", icon: Newspaper, color: "from-indigo-500/20 to-blue-500/10" },
  { label: "FAQ Page", description: "Frequently asked questions", path: "/admin/faq", icon: HelpCircle, color: "from-cyan-500/20 to-teal-500/10" },
  { label: "Events Page", description: "Upcoming events and outreaches", path: "/admin/events", icon: Calendar, color: "from-orange-500/20 to-amber-500/10" },
  { label: "Careers Page", description: "Job listings and opportunities", path: "/admin/careers", icon: Briefcase, color: "from-purple-500/20 to-violet-500/10" },
  { label: "Terms of Service", description: "Terms and conditions", path: "/admin/terms", icon: FileText, color: "from-slate-500/20 to-gray-500/10" },
  { label: "Privacy Policy", description: "Privacy policy content", path: "/admin/privacy", icon: Shield, color: "from-teal-500/20 to-green-500/10" },
];

const AdminDashboard = () => {
  const { content } = useSiteContent();

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
          Welcome back 👋
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage <span className="font-semibold text-foreground">{content.siteName}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="group relative bg-card rounded-2xl p-4 sm:p-5 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 active:scale-[0.98]"
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
              <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-1">
                {section.label}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
