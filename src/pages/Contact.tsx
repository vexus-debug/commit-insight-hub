import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Globe, ArrowRight,
  MessageCircle, Send, Instagram, Facebook, Linkedin,
} from "lucide-react";
import teamImg from "@/assets/bestojis-team.jpg";
import prostheticImg from "@/assets/bestojis-prosthetic-limb.jpg";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    primary: "Pazi Plaza, Radio Estate",
    secondary: "Opposite AIT, Ozuoba, Port Harcourt, Rivers State",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Pazi+Plaza+Radio+Estate+Ozuoba+Port+Harcourt",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+234 912 269 6126",
    secondary: "Alt: +234 813 429 5144",
    action: "Call Now",
    href: "tel:+2349122696126",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "bestojis@gmail.com",
    secondary: "We respond within 24–48 hours",
    action: "Send Email",
    href: "mailto:bestojis@gmail.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Mon – Thu: 8 AM – 4 PM",
    secondary: "Fri – Sat: 8 AM – 5 PM",
    action: null,
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/bestojis_ortho.rehab", handle: "@bestojis_ortho.rehab" },
  { icon: Facebook, label: "Facebook", url: "https://facebook.com/Bestojis-Orthopaedic-and-Rehabilitation-Foundation", handle: "Bestojis Orthopaedic & Rehabilitation Foundation" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/bestojis-orthopaedic-rehabilitation-foundation", handle: "Bestojis Orthopaedic & Rehabilitation Foundation" },
  { icon: Globe, label: "TikTok", url: "https://tiktok.com/@bestojis_ortho.rehab", handle: "@bestojis_ortho.rehab" },
];

const faqs = [
  { q: "How quickly will I receive a response?", a: "We typically respond within 24–48 business hours. For urgent prosthetic or orthotic enquiries, please call us on +234 912 269 6126." },
  { q: "Do you treat children with clubfoot?", a: "Yes. Our dedicated clubfoot clinic offers correction and follow-up care for children, with a special focus on children with physical disabilities." },
  { q: "I'm a medical professional — how can I partner?", a: "We welcome partnerships with prosthetists, orthotists, physiotherapists, and orthopaedic surgeons. Email bestojis@gmail.com with your specialty and availability." },
  { q: "How can my organisation support Bestojis?", a: "We collaborate with international partners (e.g. Penta Medical Recycling). Send a partnership inquiry through the form or via bestojis@gmail.com." },
];

const Contact = () => {
  return (
    <PageTransition><div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title="Let's Restore Mobility Together"
        subtitle="Contact Us"
        description="Whether you need a prosthetic limb, want to refer a child for clubfoot correction, or wish to partner with Bestojis — we're here and eager to connect."
        image={teamImg}
      />

      {/* Contact Methods Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Reach Out</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Multiple Ways to Connect
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.title} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-foreground text-sm font-medium">{method.primary}</p>
                  <p className="text-muted-foreground text-xs mt-1 mb-4 flex-1">{method.secondary}</p>
                  {method.action && method.href && (
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs w-full">
                        {method.action}
                      </Button>
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Image */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
            <ScrollReveal>
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Send a Message</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Have a question about prosthetic fitting, clubfoot correction, or amputee rehabilitation? Interested in partnering or volunteering? Drop us a message and our team will respond promptly.
                </p>
                <img src={prostheticImg} alt="Custom prosthetic limb produced at Bestojis" className="rounded-2xl shadow-lg w-full object-cover aspect-[16/10] mb-8" />

                {/* Social Links */}
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-secondary transition-colors"
                      >
                        <social.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">Contact Form</h3>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                      <Input placeholder="John" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                      <Input placeholder="Doe" className="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <Input placeholder="+234 xxx xxx xxxx" type="tel" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground">
                      <option value="">Select a topic</option>
                      <option value="prosthetic">Prosthetic Limb Enquiry</option>
                      <option value="clubfoot">Clubfoot Clinic</option>
                      <option value="rehab">Amputee Rehabilitation</option>
                      <option value="partnership">Partnership / Sponsorship</option>
                      <option value="donation">Donation Question</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us how we can help..." rows={5} className="rounded-lg" />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-semibold">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 24–48 business hours.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Quick Answers</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Common Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-muted/40">
        <div className="container mx-auto px-4 py-14">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Find Us</h2>
              <p className="text-muted-foreground text-sm mt-1">Pazi Plaza, Radio Estate, Opposite AIT, Ozuoba, Port Harcourt, Rivers State, Nigeria</p>
            </div>
          </ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps?q=Ozuoba+Port+Harcourt+Rivers+State+Nigeria&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bestojis Orthopaedic & Rehabilitation Foundation Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default Contact;
