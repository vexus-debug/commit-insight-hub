import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

type Session = { user: { id: string; email?: string } } | null;
const LS_CONTENT = "site_content_bestojis_v1";
const LS_ADMIN = "site_admin_session";

// ─── Interfaces ───

export interface SiteStat {
  value: string;
  label: string;
}

export interface SiteValue {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string[];
}

export interface NewsStory {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  content: string;
}

export interface Program {
  icon: string;
  title: string;
  description: string;
  image: string;
  stats: SiteStat[];
  highlights: string[];
}

export interface ProgramCard {
  title: string;
  description: string;
  image: string;
  beneficiaries: string;
  goal: string;
  raised: string;
  progress: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactMethod {
  icon: string;
  title: string;
  primary: string;
  secondary: string;
  action: string | null;
  href: string | null;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
  handle: string;
}

export interface VolunteerRole {
  icon: string;
  title: string;
  description: string;
  commitment: string;
}

export interface PartnershipTier {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  type: string;
}

export interface LocationItem {
  state: string;
  areas: string[];
}

export interface JourneyStep {
  icon: string;
  label: string;
  title: string;
  description: string;
  image: string;
  stat: string;
  statLabel: string;
  accent: "primary" | "secondary";
}

export interface EventItem {
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
}

export interface CareerItem {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface SiteContent {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  logoText: string;
  topBar: {
    address: string;
    addressLabel: string;
    phone: string;
    phoneLabel: string;
    email: string;
    emailLabel: string;
    socialLinks: { label: string; url: string; shortLabel: string }[];
  };
  navLinks: { label: string; path: string }[];
  footer: {
    description: string;
    quickLinks: { label: string; path: string }[];
    infoLinks: { label: string; path: string }[];
    contactAddress: string;
    contactPhone: string;
    contactEmail: string;
    socialLinks: { label: string; url: string }[];
    copyright: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    stats: SiteStat[];
    image: string;
  };
  mission: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
    bulletPoints: string[];
    valuesLabel: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: SiteValue[];
  };
  journey: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    steps: JourneyStep[];
    ctaText: string;
  };
  impact: {
    sectionLabel: string;
    title: string;
    description: string;
    quote: string;
    quoteAuthor: string;
    stats: SiteStat[];
    highlights: string[];
  };
  gallerySection: {
    sectionLabel: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  faq: {
    sectionLabel: string;
    title: string;
    description: string;
    items: FAQ[];
    supportTitle: string;
    supportDescription: string;
    supportPhone: string;
    supportEmail: string;
  };
  cta: {
    title: string;
    description: string;
    phone: string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    storyLabel: string;
    storyTitle: string;
    storyParagraphs: string[];
    storyBadges: string[];
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    timeline: TimelineItem[];
    values: SiteValue[];
    leaderName: string;
    leaderRole: string;
    leaderBio: string[];
    leaderBadge: string;
    impactStats: SiteStat[];
    ctaTitle: string;
    ctaDescription: string;
  };
  programs: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    overviewLabel: string;
    overviewTitle: string;
    overviewDescription: string;
    items: Program[];
    locations: LocationItem[];
    processSteps: { step: string; title: string; description: string }[];
    ctaTitle: string;
    ctaDescription: string;
  };
  programCards: ProgramCard[];
  gallery: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    categories: string[];
    images: GalleryImage[];
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    methods: ContactMethod[];
    formTitle: string;
    formDescription: string;
    socialLinks: SocialLink[];
    faqs: FAQ[];
    mapAddress: string;
  };
  donate: {
    title: string;
    description: string;
    cardTitle: string;
    cardDescription: string;
    contactEmail: string;
    partnershipEmail: string;
    phone: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
  getInvolved: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    waysTitle: string;
    waysDescription: string;
    ways: { icon: string; title: string; description: string; cta: string; link: string }[];
    volunteerTitle: string;
    volunteerDescription: string;
    volunteerRoles: VolunteerRole[];
    partnershipTitle: string;
    partnershipDescription: string;
    partnershipTiers: PartnershipTier[];
    eventsTitle: string;
    eventsDescription: string;
    events: UpcomingEvent[];
    formTitle: string;
    formDescription: string;
  };
  news: {
    title: string;
    description: string;
    stories: NewsStory[];
  };
  events: {
    title: string;
    description: string;
    items: EventItem[];
  };
  careers: {
    title: string;
    description: string;
    items: CareerItem[];
    contactEmail: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
    content: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    content: string;
  };
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const defaultContent: SiteContent = {
  siteName: "Bestojis Orthopaedic & Rehabilitation Foundation",
  siteTagline: "Restoring Mobility, Renewing Lives Since 2016",
  siteDescription: "Bestojis (Amalgam) Orthopaedic and Rehabilitation Foundation — a Nigerian non-profit transforming the lives of persons with physical disabilities through prosthetics, orthotics, and rehabilitation care.",
  logoText: "B",

  topBar: {
    address: "Pazi Plaza, Radio Estate, opposite AIT, Ozuoba, Port Harcourt, Rivers State",
    addressLabel: "Our Address",
    phone: "09122696126 / 08134295144",
    phoneLabel: "Call / WhatsApp",
    email: "bestojis@gmail.com",
    emailLabel: "Email",
    socialLinks: [
      { label: "Instagram", url: "https://instagram.com/bestojis_Ortho.rehab", shortLabel: "IG" },
      { label: "Facebook", url: "https://facebook.com/Bestojis-Orthopaedic-and-Rehabilitation-Foundation", shortLabel: "FB" },
      { label: "TikTok", url: "https://tiktok.com/@bestojis_ortho.rehab", shortLabel: "TK" },
      { label: "LinkedIn", url: "https://linkedin.com/company/bestojis-orthopaedic-rehabilitation-foundation", shortLabel: "IN" },
    ],
  },

  navLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Gallery", path: "/gallery" },
    { label: "Get Involved", path: "/get-involved" },
    { label: "News & Stories", path: "/news" },
    { label: "Contact", path: "/contact" },
  ],

  footer: {
    description: "Bestojis Orthopaedic & Rehabilitation Foundation — restoring mobility, dignity, and independence to persons with physical disabilities across Nigeria since 2016.",
    quickLinks: [
      { label: "About Us", path: "/about" },
      { label: "Programs", path: "/programs" },
      { label: "Get Involved", path: "/get-involved" },
      { label: "Donate", path: "/donate" },
      { label: "News & Stories", path: "/news" },
    ],
    infoLinks: [
      { label: "FAQs", path: "/faq" },
      { label: "Events", path: "/events" },
      { label: "Careers", path: "/careers" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Use", path: "/terms" },
    ],
    contactAddress: "Pazi Plaza, Radio Estate, opposite AIT, Ozuoba, Port Harcourt, Rivers State, Nigeria",
    contactPhone: "09122696126 / 08134295144",
    contactEmail: "bestojis@gmail.com",
    socialLinks: [
      { label: "Instagram", url: "https://instagram.com/bestojis_Ortho.rehab" },
      { label: "Facebook", url: "https://facebook.com/Bestojis-Orthopaedic-and-Rehabilitation-Foundation" },
      { label: "TikTok", url: "https://tiktok.com/@bestojis_ortho.rehab" },
      { label: "LinkedIn", url: "https://linkedin.com/company/bestojis-orthopaedic-rehabilitation-foundation" },
    ],
    copyright: "Bestojis Orthopaedic & Rehabilitation Foundation. All rights reserved.",
  },

  hero: {
    badge: "Orthopaedic & Rehabilitation Care Since 2016",
    titleLine1: "Restoring Mobility,",
    titleLine2: "Renewing Lives",
    description: "Providing world-class prosthetics, orthotics, and rehabilitation care to amputees and persons with physical disabilities across the Niger Delta and beyond.",
    stats: [
      { value: "2016", label: "Year Founded" },
      { value: "1st", label: "Of Its Kind in Rivers State" },
      { value: "43+", label: "Prosthetic Components Received" },
      { value: "9–12%", label: "Amputees Reached Nationally" },
    ],
    image: "",
  },

  mission: {
    sectionLabel: "Who We Are",
    title: "Transforming Lives Through Rehabilitation",
    paragraphs: [
      "Bestojis Orthopaedic and Rehabilitation Foundation, also known as Amalgam Orthopaedic and Rehabilitation Foundation, is a Nigerian non-governmental, non-profit organisation established on January 26, 2016. We are dedicated to transforming the lives of persons with physical disabilities through professional prosthetic, orthotic, and rehabilitation care.",
      "Officially registered as an NGO on October 23, 2017 under the Civil Action Fund (CAF) Act of 2015 (Membership No. CAF/10,000), the foundation is led by Dr. Ojigini Bestman — a licensed medical rehabilitation professional and Head of the Prosthetic and Orthotic Unit at the University of Port Harcourt Teaching Hospital (UPTH).",
    ],
    bulletPoints: [
      "First foundation of its kind in Rivers State",
      "Specialised in prosthetics, orthotics & rehabilitation",
      "Special focus on children with physical disabilities",
      "Headquartered in Port Harcourt, serving the Niger Delta",
    ],
    valuesLabel: "Our Core Services",
    valuesTitle: "Comprehensive Rehabilitation, Delivered with Dignity",
    valuesSubtitle: "Every service is designed to restore mobility, prevent deformity, and empower persons with physical disabilities to live productive, independent lives.",
    values: [
      { icon: "Heart", title: "Prosthetic Limbs", description: "Supplying high-quality artificial limbs to amputees who would otherwise lack access to essential mobility aids." },
      { icon: "ShieldCheck", title: "Orthotic Bracing", description: "Custom orthopaedic braces for correcting and preventing deformities in children and adults." },
      { icon: "Users", title: "Clubfoot Clinic", description: "Dedicated clubfoot clinic providing early intervention and corrective care for children." },
      { icon: "Apple", title: "Amputee Rehabilitation", description: "Comprehensive rehabilitation programmes to help amputees regain mobility, confidence, and independence." },
      { icon: "BookOpen", title: "Occupational Therapy", description: "Therapeutic services to help individuals regain everyday skills and reintegrate into community life." },
      { icon: "Eye", title: "Community Outreach", description: "Community-based rehabilitation outreaches that bring care directly to underserved areas across the Niger Delta." },
    ],
  },

  journey: {
    sectionLabel: "The Journey",
    title: "From Inspiration to Restoration",
    subtitle: "Born from a vision in 2015 with Standing with Hope, our journey is one of bringing world-class rehabilitation to Nigerians who need it most.",
    steps: [
      { icon: "Heart", label: "The Need", title: "Most Amputees Never Receive a Prosthetic", description: "Due to financial and institutional barriers, only an estimated 9–12% of amputee patients in Nigeria ever receive a prosthetic limb. Thousands live without the mobility aids they need.", image: "", stat: "9–12%", statLabel: "of Nigerian amputees receive a prosthetic limb", accent: "primary" },
      { icon: "Stethoscope", label: "Our Response", title: "Professional Prosthetic & Orthotic Services", description: "Our team of licensed rehabilitation professionals provides general orthopaedic care, prosthetics, orthotics, and occupational therapy from our Port Harcourt facility.", image: "", stat: "6 Days", statLabel: "open every week, Monday to Saturday", accent: "secondary" },
      { icon: "Eye", label: "Clubfoot Care", title: "Early Intervention for Children", description: "Through our dedicated clubfoot clinic, we correct and prevent deformities in children — restoring their ability to walk, play, and thrive.", image: "", stat: "Children", statLabel: "are at the heart of our mission", accent: "primary" },
      { icon: "HandHeart", label: "Lasting Impact", title: "Independence and Productive Living", description: "Beyond limbs and braces, we provide vocational training, mobility aids, and assistive technology — empowering disabled persons to live independent, productive lives.", image: "", stat: "1st", statLabel: "rehabilitation foundation of its kind in Rivers State", accent: "secondary" },
    ],
    ctaText: "Be part of the next chapter",
  },

  impact: {
    sectionLabel: "Our Impact",
    title: "Restoring Mobility, One Life at a Time",
    description: "Since 2016, Bestojis has been at the forefront of orthopaedic rehabilitation in the Niger Delta — providing prosthetics, orthotics, and hope to those who need it most.",
    quote: "Eliminating unnecessary disability and enabling handicapped Nigerians to live independent, productive lives.",
    quoteAuthor: "Dr. Ojigini Bestman, Executive Director",
    stats: [
      { value: "2016", label: "Year Founded" },
      { value: "43+", label: "Prosthetic Components" },
      { value: "1st", label: "Of Its Kind in Rivers State" },
      { value: "Niger Delta", label: "Primary Service Region" },
    ],
    highlights: [
      "International support from Penta Medical Recycling",
      "Led by UPTH Head of Prosthetic & Orthotic Unit",
      "Hosting NPOOTS 4th Annual Scientific Conference (Nov 2025)",
      "Registered NGO under CAF Act 2015 (CAF/10,000)",
    ],
  },

  gallerySection: {
    sectionLabel: "Gallery",
    title: "Moments That Restore Hope",
    subtitle: "A glimpse into our prosthetic fittings, clubfoot clinic, rehabilitation sessions, and community outreaches.",
  },

  testimonials: {
    sectionLabel: "Testimonials",
    title: "Stories of Restored Mobility",
    subtitle: "Hear from patients, families, and partners whose lives have been transformed by Bestojis Orthopaedic & Rehabilitation Foundation.",
    items: [
      { name: "Chinedu O.", role: "Amputee Patient, Port Harcourt", rating: 5, text: "After my accident I thought I would never walk again. The team at Bestojis fitted me with a prosthetic limb and gave me back my independence. I am forever grateful." },
      { name: "Mrs. Adaeze E.", role: "Mother, Clubfoot Clinic", rating: 5, text: "My son was born with clubfoot. The clubfoot clinic at Bestojis treated him with such professionalism and warmth. Today he runs and plays like every other child." },
      { name: "Penta Medical Recycling", role: "International Partner", rating: 5, text: "Partnering with Bestojis has been inspiring. Their commitment to bringing world-class prosthetic care to underserved Nigerians is exactly the kind of work we want to support." },
    ],
  },

  faq: {
    sectionLabel: "Frequently Asked Questions",
    title: "Answers About Our Rehabilitation Services",
    description: "Common questions about our prosthetic, orthotic, and rehabilitation services — and how you can support our mission.",
    items: [
      { question: "What services does Bestojis provide?", answer: "We provide general orthopaedic care, professional prosthetic and orthotic services, a dedicated clubfoot clinic, comprehensive amputee rehabilitation, occupational therapy, and community-based rehabilitation outreaches." },
      { question: "Where is Bestojis located?", answer: "Our headquarters is at Pazi Plaza, Radio Estate, opposite AIT, Ozuoba, Port Harcourt, Rivers State. We primarily serve the Niger Delta Region and surrounding areas." },
      { question: "What are your operating hours?", answer: "We are open Monday to Thursday from 8 AM to 4 PM, and Fridays and Saturdays from 8 AM to 5 PM." },
      { question: "Is Bestojis a registered organisation?", answer: "Yes. Bestojis (Amalgam) Orthopaedic and Rehabilitation Foundation was established on January 26, 2016 and officially registered as an NGO on October 23, 2017 under the Civil Action Fund (CAF) Act of 2015 with membership number CAF/10,000." },
      { question: "Who leads the foundation?", answer: "The foundation is led by Dr. Ojigini Bestman (Bestman Usamali Ojigini), Executive Director and Board Chairman since 2018. He is a licensed medical rehabilitation professional and Head of the Prosthetic and Orthotic Unit at the University of Port Harcourt Teaching Hospital (UPTH)." },
      { question: "How can I support the foundation?", answer: "You can support us through donations, partnerships, or by spreading awareness. Contact us at bestojis@gmail.com or call 09122696126 / 08134295144 to learn more." },
    ],
    supportTitle: "Need Direct Support?",
    supportDescription: "Call or WhatsApp us at",
    supportPhone: "09122696126",
    supportEmail: "bestojis@gmail.com",
  },

  cta: {
    title: "Help us restore mobility and dignity.",
    description: "Whether you want to donate, partner, or refer a patient — we'd love to hear from you.",
    phone: "09122696126",
  },

  about: {
    heroTitle: "Transforming Lives Through Orthopaedic Rehabilitation",
    heroSubtitle: "About Us",
    heroDescription: "Bestojis (Amalgam) Orthopaedic and Rehabilitation Foundation is a Nigerian non-profit dedicated to restoring mobility, independence, and dignity to persons with physical disabilities since 2016.",
    storyLabel: "Our Story",
    storyTitle: "Born from a Vision of Equal Access",
    storyParagraphs: [
      "Bestojis Orthopaedic and Rehabilitation Foundation, also known as Amalgam Orthopaedic and Rehabilitation Foundation, was established on January 26, 2016 with a clear mission: to address the growing challenge of disability within Nigerian society and bring world-class rehabilitation care within reach of every Nigerian who needs it.",
      "The foundation was officially registered as a non-governmental organisation on October 23, 2017 under the Civil Action Fund (CAF) Act of 2015, holding membership number CAF/10,000. Legally structured as a private company providing rehabilitation services, the foundation is run by a group of dedicated professionals who consult closely with other healthcare stakeholders.",
      "Our founder, Dr. Ojigini Bestman, was inspired in 2015 while working with Standing with Hope, a USA-based prosthetic rehabilitation outreach organisation. Witnessing the life-changing impact of prosthetic limbs on American amputees, he resolved to bring the same quality of care to Nigerian amputees and children with physical disabilities — and Bestojis became the first foundation of its kind in Rivers State.",
    ],
    storyBadges: ["Registered NGO (CAF/10,000)", "Established 2016", "First of its Kind in Rivers State"],
    visionTitle: "Our Vision",
    visionText: "To become a state-of-the-art rehabilitation facility, staffed by highly trained and motivated professionals, where physically disabled persons, orthopaedic handicaps, and amputees of any level receive care comparable to the best rehabilitation centres anywhere in the world — ultimately improving the quality of life for all Nigerians.",
    missionTitle: "Our Mission",
    missionText: "To provide sustainable, affordable, and the highest standard of quality services, training, and research in prosthetics, orthotics, and rehabilitation care — delivered in a conducive and secure environment by well-trained, motivated staff who continuously acquire knowledge and skills in disability care.",
    timeline: [
      { year: "2016", title: "Foundation Established", description: "Bestojis (Amalgam) Orthopaedic and Rehabilitation Foundation is established on January 26, 2016 in Port Harcourt." },
      { year: "2017", title: "Officially Registered as NGO", description: "Officially registered on October 23, 2017 under the Civil Action Fund (CAF) Act of 2015." },
      { year: "2018", title: "Dr. Bestman Becomes Executive Director", description: "Dr. Ojigini Bestman assumes the role of Executive Director and Board Chairman." },
      { year: "2021", title: "CAF Membership Confirmed", description: "Membership number CAF/10,000 confirmed as of May 30, 2021." },
      { year: "2025", title: "Hosting NPOOTS Conference", description: "Dr. Bestman heads the 4th Annual Scientific Conference of NPOOTS at UPTH (November 11–14, 2025), and the foundation receives its first 43 prosthetic components from Penta Medical Recycling." },
    ],
    values: [
      { icon: "Heart", title: "Compassion", description: "Treating every patient with empathy, warmth, and respect." },
      { icon: "Lightbulb", title: "Excellence", description: "Delivering the highest standard of prosthetic and orthotic care." },
      { icon: "HandHeart", title: "Dignity", description: "Restoring not just mobility, but the inherent worth of every person." },
      { icon: "Users", title: "Children First", description: "A special focus on children with physical disabilities." },
      { icon: "Globe", title: "Accessibility", description: "Making world-class rehabilitation affordable and reachable." },
      { icon: "Target", title: "Research & Training", description: "Advancing the field through continuous research and skills development." },
    ],
    leaderName: "Dr. Ojigini Bestman",
    leaderRole: "Executive Director & Board Chairman",
    leaderBio: [
      "Dr. Ojigini Bestman (Bestman Usamali Ojigini) has served as Executive Director and Board Chairman of Bestojis since 2018. His passion for prosthetic care was ignited in 2015 while working with Standing with Hope, a USA-based prosthetic rehabilitation outreach organisation.",
      "He is a licensed medical rehabilitation professional recognised by the Medical Rehabilitation Therapists Board of Nigeria, specialising in correcting and preventing deformities, restoring mobility, and rehabilitating amputees and the orthopedically handicapped.",
      "His career includes work with the Prosthetic and Orthotic Department of the National Orthopaedic Hospital Enugu, Alex Ekwueme Federal University Teaching Hospital Abakaliki, Orthopaedic Training Centre in Nsawon (Ghana), National Prosthetic and Orthotic Centre in Accra (Ghana), and Rivers University Teaching Hospital, Port Harcourt. He currently serves as Head of the Prosthetic and Orthotic Unit at the University of Port Harcourt Teaching Hospital (UPTH).",
    ],
    leaderBadge: "Head of P&O Unit, UPTH",
    impactStats: [
      { value: "2016", label: "Year Founded" },
      { value: "1st", label: "Of Its Kind in Rivers State" },
      { value: "43+", label: "Prosthetic Components" },
      { value: "6 Days", label: "Open Every Week" },
    ],
    ctaTitle: "Help Us Restore Mobility",
    ctaDescription: "Whether you want to donate, partner, or refer a patient — your support changes a life.",
  },

  programs: {
    heroTitle: "Programs That Restore Mobility",
    heroSubtitle: "Our Programs",
    heroDescription: "From prosthetic limbs to clubfoot care and vocational training, every programme is designed to restore mobility, independence, and dignity to persons with physical disabilities.",
    overviewLabel: "What We Do",
    overviewTitle: "Six Pillars of Rehabilitation Care",
    overviewDescription: "Each programme addresses a critical need in the rehabilitation journey. Together, they form a comprehensive ecosystem of care for amputees, children with deformities, and persons with physical disabilities.",
    items: [
      { icon: "Stethoscope", title: "General Orthopaedic Care", description: "Comprehensive orthopaedic assessments, consultations, and management for persons with musculoskeletal conditions and physical disabilities.", image: "", stats: [{ value: "6 Days", label: "Open / Week" }, { value: "Mon–Sat", label: "Schedule" }], highlights: ["Specialist orthopaedic consultations", "Deformity assessment and management", "Referral and stakeholder collaboration", "Patient-centred care"] },
      { icon: "ShieldCheck", title: "Prosthetics & Orthotics", description: "Custom-fitted prosthetic limbs and orthopaedic braces designed to restore mobility and prevent deformity.", image: "", stats: [{ value: "43+", label: "Components Received" }, { value: "Custom", label: "Fittings" }], highlights: ["Upper and lower limb prosthetics", "Custom orthopaedic bracing", "Standardisation of aids and appliances", "Local manufacturing focus"] },
      { icon: "Eye", title: "Clubfoot Clinic", description: "Dedicated clinic for the early correction of clubfoot in children, preventing lifelong disability.", image: "", stats: [{ value: "Children", label: "Priority Group" }, { value: "Early", label: "Intervention" }], highlights: ["Early diagnosis and casting", "Corrective bracing", "Family education and support", "Long-term follow-up"] },
      { icon: "Apple", title: "Amputee Rehabilitation", description: "End-to-end rehabilitation for amputees — from pre-prosthetic conditioning to gait training and reintegration.", image: "", stats: [{ value: "9–12%", label: "Reached Nationally" }, { value: "End-to-End", label: "Care" }], highlights: ["Pre-prosthetic conditioning", "Prosthetic fitting and gait training", "Psychological support", "Vocational reintegration"] },
      { icon: "Shirt", title: "Vocational Training", description: "Skills training and assistive technology to help disabled persons gain independence and live productive lives.", image: "", stats: [{ value: "Independent", label: "Living" }, { value: "Skills", label: "Acquisition" }], highlights: ["Vocational skills development", "Assistive technology provision", "Mobility aids supply", "Restorative surgery referrals"] },
      { icon: "BookOpen", title: "Community Outreach & Research", description: "Community-based rehabilitation outreaches and research into all aspects of orthopaedic rehabilitation.", image: "", stats: [{ value: "Niger Delta", label: "Service Region" }, { value: "Research", label: "& Training" }], highlights: ["Community-based rehabilitation", "Research into rehabilitation", "Awareness campaigns", "Training of professionals"] },
    ],
    locations: [
      { state: "Rivers State (HQ)", areas: ["Port Harcourt", "Ozuoba", "Choba (UPTH)"] },
      { state: "Niger Delta Region", areas: ["Bayelsa", "Delta", "Akwa Ibom"] },
      { state: "South-East Nigeria", areas: ["Enugu", "Ebonyi"] },
      { state: "Outreach Areas", areas: ["Surrounding suburban communities"] },
    ],
    processSteps: [
      { step: "01", title: "Patient Referral", description: "Patients are referred or walk in to our facility at Pazi Plaza, Ozuoba, Port Harcourt." },
      { step: "02", title: "Assessment", description: "Our licensed rehabilitation professionals carry out a full clinical assessment." },
      { step: "03", title: "Custom Fitting", description: "Prosthetic limbs or orthotic braces are custom designed and fitted for the patient." },
      { step: "04", title: "Rehabilitation", description: "Gait training, occupational therapy, and follow-up support restore mobility and independence." },
    ],
    ctaTitle: "Every gift restores a life.",
    ctaDescription: "Support our prosthetic, orthotic, and rehabilitation programmes — and help a Nigerian regain mobility.",
  },

  programCards: [
    { title: "Prosthetic Limbs Programme", description: "Supplying artificial limbs to amputees who cannot afford them, restoring their ability to walk and work.", image: "", beneficiaries: "Amputees", goal: "$10,000 goal", raised: "$2,500 raised", progress: 25 },
    { title: "Clubfoot Clinic", description: "Early correction of clubfoot in children through casting, bracing, and follow-up care.", image: "", beneficiaries: "Children", goal: "$6,000 goal", raised: "$1,800 raised", progress: 30 },
    { title: "Orthotic Bracing", description: "Custom orthopaedic braces for correcting and preventing deformities across all age groups.", image: "", beneficiaries: "All Ages", goal: "$5,000 goal", raised: "$2,100 raised", progress: 42 },
    { title: "Community-Based Rehabilitation", description: "Outreach programmes bringing rehabilitation services to underserved Niger Delta communities.", image: "", beneficiaries: "Communities", goal: "$8,000 goal", raised: "$2,400 raised", progress: 30 },
  ],

  gallery: {
    heroTitle: "Our Gallery",
    heroSubtitle: "Gallery",
    heroDescription: "See Bestojis in action — restoring mobility, fitting prosthetics, and bringing dignity back to persons with physical disabilities across the Niger Delta.",
    categories: ["All", "Prosthetics", "Clubfoot Clinic", "Team in Action"],
    images: [
      { src: "", alt: "Prosthetic limb fitting at Bestojis", caption: "Prosthetic Fitting Session", category: ["Prosthetics", "Team in Action"] },
      { src: "", alt: "Clubfoot clinic care for child", caption: "Clubfoot Clinic — Child Care", category: ["Clubfoot Clinic"] },
      { src: "", alt: "Orthotic brace assessment", caption: "Orthotic Brace Assessment", category: ["Prosthetics"] },
      { src: "", alt: "Patient gait training session", caption: "Gait Training", category: ["Team in Action"] },
      { src: "", alt: "Rehabilitation team consultation", caption: "Multidisciplinary Consultation", category: ["Team in Action"] },
      { src: "", alt: "Children's rehabilitation session", caption: "Paediatric Rehabilitation", category: ["Clubfoot Clinic"] },
      { src: "", alt: "Penta Medical components delivery", caption: "Penta Medical Components Arrival", category: ["Team in Action"] },
      { src: "", alt: "Community outreach in Port Harcourt", caption: "Community-Based Outreach", category: ["Team in Action"] },
      { src: "", alt: "Workshop on prosthetic technology", caption: "Prosthetic Technology Workshop", category: ["Prosthetics", "Team in Action"] },
      { src: "", alt: "Dr. Bestman with patient", caption: "Patient-Centred Care", category: ["Team in Action"] },
      { src: "", alt: "Foundation team photo", caption: "The Bestojis Team", category: ["Team in Action"] },
      { src: "", alt: "Occupational therapy session", caption: "Occupational Therapy", category: ["Team in Action"] },
    ],
  },

  contact: {
    heroTitle: "Let's Restore Mobility Together",
    heroSubtitle: "Contact Us",
    heroDescription: "Whether you have a question, need rehabilitation services, want to refer a patient, or explore partnership — we are here to connect with you.",
    methods: [
      { icon: "MapPin", title: "Visit Our Facility", primary: "Pazi Plaza, Radio Estate, opposite AIT", secondary: "Ozuoba, Port Harcourt, Rivers State", action: "Get Directions", href: "https://maps.google.com/?q=Pazi+Plaza+Ozuoba+Port+Harcourt" },
      { icon: "Phone", title: "Call / WhatsApp", primary: "09122696126", secondary: "08134295144", action: "Call Now", href: "tel:09122696126" },
      { icon: "Mail", title: "Email Us", primary: "bestojis@gmail.com", secondary: "We respond within 24–48 hours", action: "Send Email", href: "mailto:bestojis@gmail.com" },
      { icon: "Clock", title: "Office Hours", primary: "Mon – Thu: 8 AM – 4 PM", secondary: "Fri – Sat: 8 AM – 5 PM", action: null, href: null },
    ],
    formTitle: "We'd Love to Hear From You",
    formDescription: "Have a question about prosthetics, orthotics, or rehabilitation? Want to refer a patient or partner with us? Drop us a message and we'll get back to you promptly.",
    socialLinks: [
      { icon: "Instagram", label: "Instagram", url: "https://instagram.com/bestojis_Ortho.rehab", handle: "@bestojis_Ortho.rehab" },
      { icon: "Facebook", label: "Facebook", url: "https://facebook.com/Bestojis-Orthopaedic-and-Rehabilitation-Foundation", handle: "Bestojis Orthopaedic and Rehabilitation Foundation" },
      { icon: "Globe", label: "TikTok", url: "https://tiktok.com/@bestojis_ortho.rehab", handle: "@bestojis_ortho.rehab" },
      { icon: "Globe", label: "LinkedIn", url: "https://linkedin.com/company/bestojis-orthopaedic-rehabilitation-foundation", handle: "Bestojis Orthopaedic & Rehabilitation Foundation" },
    ],
    faqs: [
      { question: "How quickly will I receive a response?", answer: "We typically respond within 24–48 business hours. For urgent matters, please call or WhatsApp us directly on 09122696126." },
      { question: "Can I walk in for an assessment?", answer: "Yes. Our facility is open Monday to Thursday (8 AM – 4 PM) and Friday to Saturday (8 AM – 5 PM)." },
      { question: "Do you accept patient referrals from other hospitals?", answer: "Absolutely. We work closely with other healthcare stakeholders. Please contact us at bestojis@gmail.com to arrange a referral." },
      { question: "How can my organisation partner with Bestojis?", answer: "Send us a partnership inquiry through the form or email bestojis@gmail.com. We'll schedule a meeting to discuss collaboration." },
    ],
    mapAddress: "Pazi Plaza, Radio Estate, opposite AIT, Ozuoba, Port Harcourt, Rivers State, Nigeria",
  },

  donate: {
    title: "Make a Donation",
    description: "Your generosity restores mobility. Every contribution directly supports prosthetic limbs, orthotic braces, and rehabilitation care for Nigerians with physical disabilities.",
    cardTitle: "Support Our Mission",
    cardDescription: "To make a donation or discuss partnership opportunities, please contact us directly. We accept donations via bank transfer and other means.",
    contactEmail: "bestojis@gmail.com",
    partnershipEmail: "bestojis@gmail.com",
    phone: "09122696126",
    bankName: "Contact us for bank details",
    accountName: "Bestojis (Amalgam) Orthopaedic and Rehabilitation Foundation",
    accountNumber: "Available on request",
  },

  getInvolved: {
    heroTitle: "Help Restore Mobility and Dignity",
    heroSubtitle: "Get Involved",
    heroDescription: "Your time, expertise, and generosity can transform the life of a person with a physical disability. Volunteer, partner, donate — every contribution restores hope.",
    waysTitle: "Three Ways to Create Impact",
    waysDescription: "Whether you are a clinician, an organisation, or an individual supporter — there's a meaningful way to join our mission.",
    ways: [
      { icon: "Users", title: "Volunteer", description: "Clinicians, therapists, and general volunteers can support our clinic, clubfoot programme, and community outreaches.", cta: "See Roles", link: "#volunteer-roles" },
      { icon: "HandHeart", title: "Partner With Us", description: "Hospitals, NGOs, and corporations can collaborate on rehabilitation programmes and research.", cta: "Explore Partnerships", link: "#partnerships" },
      { icon: "CalendarDays", title: "Attend Events", description: "Join awareness campaigns, scientific conferences, and outreach events. Be part of the rehabilitation movement.", cta: "View Events", link: "#events" },
    ],
    volunteerTitle: "Your Skills Can Restore Mobility",
    volunteerDescription: "We welcome rehabilitation professionals and general supporters. Our clinic and outreaches depend on dedicated people who care.",
    volunteerRoles: [
      { icon: "Stethoscope", title: "Prosthetists & Orthotists", description: "Help design, fit, and adjust prosthetic limbs and orthotic braces for patients at our Port Harcourt facility.", commitment: "Flexible" },
      { icon: "Eye", title: "Physiotherapists & Occupational Therapists", description: "Support gait training, rehabilitation, and occupational therapy programmes for amputees and persons with disabilities.", commitment: "1–2 days/week" },
      { icon: "Users", title: "Clinic Mobilisers", description: "Help with patient registration, scheduling, and community outreach logistics.", commitment: "Flexible" },
      { icon: "Megaphone", title: "Media & Communications", description: "Photographers, writers, and social media managers who can document our impact and amplify our mission.", commitment: "Remote / Flexible" },
    ],
    partnershipTitle: "Stronger Together",
    partnershipDescription: "We partner with hospitals, universities, government bodies, and international organisations to expand access to rehabilitation.",
    partnershipTiers: [
      { icon: "Heart", title: "Clinical Partner", description: "Hospitals and clinics that refer patients and collaborate on rehabilitation pathways.", benefits: ["Patient referrals", "Joint case management", "Shared training opportunities"] },
      { icon: "Building", title: "Institutional Partner", description: "Universities and government agencies collaborating on research, training, and large-scale programmes.", benefits: ["Joint research", "Training collaborations", "Policy advocacy"] },
      { icon: "Globe", title: "Donor & Sponsor", description: "International organisations like Penta Medical Recycling who provide components, funding, or equipment.", benefits: ["Brand visibility", "Impact reporting", "Long-term partnership"] },
    ],
    eventsTitle: "Upcoming Events & Conferences",
    eventsDescription: "Join us at our next event and experience the impact of rehabilitation firsthand.",
    events: [
      { title: "NPOOTS 4th Annual Scientific Conference & AGM", date: "November 11–14, 2025", location: "UPTH, Choba, Port Harcourt", type: "Conference" },
      { title: "Pre-Conference Webinars (AFO, Digital Shape Capturing, TSB Sockets)", date: "November 2025", location: "Online", type: "Webinar" },
      { title: "Hands-On Prosthetic & Orthotic Workshop", date: "November 2025", location: "UPTH, Port Harcourt", type: "Workshop" },
      { title: "Community Rehabilitation Outreach", date: "Quarterly", location: "Niger Delta communities", type: "Outreach" },
    ],
    formTitle: "Ready to Make an Impact?",
    formDescription: "Fill out the form and our team will reach out to discuss how you can contribute as a volunteer, partner, or supporter.",
  },

  news: {
    title: "News & Stories",
    description: "Stories that shape our mission of rehabilitation and inspire lasting change.",
    stories: [
      { title: "First Shipment of Prosthetic Components from Penta Medical Recycling", excerpt: "Bestojis receives its inaugural delivery of 43 prosthetic components from Port Harcourt-based Penta Medical Recycling, marking the start of a long-term collaboration.", image: "", date: "2025", slug: "penta-medical-recycling-first-shipment", content: "Bestojis Orthopaedic and Rehabilitation Foundation has received its first shipment of prosthetic components from Penta Medical Recycling, an organisation based in Port Harcourt, Nigeria.\n\nThe inaugural delivery contained 43 prosthetic components, marking the beginning of what both parties hope will be a long and productive collaboration. This shipment will directly enable Bestojis to fit prosthetic limbs for amputee patients who would otherwise have no access to them.\n\nThe critical need for this work is underscored by the reality that, due to financial and institutional barriers, only an estimated 9 to 12 percent of amputee patients in Nigeria ever receive a prosthetic limb." },
      { title: "Dr. Bestman to Head NPOOTS 4th Annual Scientific Conference", excerpt: "Dr. Ojigini Bestman has been announced as head of the 4th Annual Scientific Conference of the Nigerian Prosthetic, Orthotic & Orthopaedic Technology Society (Nov 11–14, 2025).", image: "", date: "2025", slug: "npoots-4th-annual-conference", content: "Demonstrating the high professional standing of its leadership, Dr. Ojigini Bestman has been announced as the head of the 4th Annual Scientific Conference and Annual General Meeting of the Nigerian Prosthetic, Orthotic & Orthopaedic Technology Society (NPOOTS), scheduled for November 11–14, 2025.\n\nThemed 'Broadening Prosthetic & Orthotic Services Across Nigeria's Healthcare System: Towards Achieving Universal Health Coverage,' the conference will take place at the University of Port Harcourt Teaching Hospital (UPTH) in Choba, Port Harcourt.\n\nThe event will feature pre-conference webinars on topics such as Ankle Foot Orthosis prescription criteria, digital shape capturing, and total surface bearing transtibial sockets, followed by hands-on workshops and two days of scientific sessions." },
      { title: "Why Every Donation Matters in Rehabilitation Care", excerpt: "Only 9–12% of Nigerian amputees ever receive a prosthetic limb. Here's how your donation changes that reality.", image: "", date: "2025", slug: "why-every-donation-matters", content: "Every donation, no matter how small, restores mobility to a Nigerian living with disability.\n\nWhen you contribute to Bestojis Orthopaedic and Rehabilitation Foundation, you are not just funding a programme — you are funding an artificial limb, a clubfoot brace, a gait training session, or a community outreach.\n\nFrom a single prosthetic foot that allows a father to return to work, to a clubfoot cast that ensures a child will walk normally — your giving creates moments that change lives forever." },
    ],
  },

  events: {
    title: "Events & Conferences",
    description: "Join us at our upcoming events and experience the impact of orthopaedic rehabilitation firsthand.",
    items: [
      { title: "NPOOTS 4th Annual Scientific Conference & AGM", date: "November 11–14, 2025", location: "UPTH, Choba, Port Harcourt", description: "Themed 'Broadening Prosthetic & Orthotic Services Across Nigeria's Healthcare System: Towards Achieving Universal Health Coverage.' Headed by Dr. Ojigini Bestman.", type: "Conference" },
      { title: "Pre-Conference Webinars", date: "November 2025", location: "Online", description: "Webinars on Ankle Foot Orthosis prescription criteria, digital shape capturing, and total surface bearing transtibial sockets.", type: "Webinar" },
      { title: "Hands-On Prosthetic & Orthotic Workshop", date: "November 2025", location: "UPTH, Port Harcourt", description: "Practical workshops for prosthetists, orthotists, and rehabilitation professionals.", type: "Workshop" },
      { title: "Community-Based Rehabilitation Outreach", date: "Quarterly", location: "Niger Delta communities", description: "Bringing rehabilitation services and assessments directly to underserved communities across the Niger Delta.", type: "Outreach" },
      { title: "Clubfoot Awareness Day", date: "Annually", location: "Port Harcourt", description: "An awareness and screening day focused on early detection and correction of clubfoot in children.", type: "Awareness" },
    ],
  },

  careers: {
    title: "Careers & Opportunities",
    description: "Join our team and help restore mobility. We're looking for passionate professionals who share our vision of transforming the lives of persons with physical disabilities.",
    contactEmail: "bestojis@gmail.com",
    items: [
      { title: "Prosthetist / Orthotist", location: "Port Harcourt, Nigeria", type: "Full-time", description: "Design, fabricate, and fit prosthetic limbs and orthotic braces for patients at our Pazi Plaza facility.", requirements: ["Licensed by the Medical Rehabilitation Therapists Board of Nigeria", "Experience in prosthetics and orthotics", "Strong patient-care orientation", "Willingness to participate in outreaches"] },
      { title: "Physiotherapist / Occupational Therapist", location: "Port Harcourt, Nigeria", type: "Full-time / Part-time", description: "Provide gait training, rehabilitation, and occupational therapy to amputees and persons with disabilities.", requirements: ["Relevant professional license", "Experience in rehabilitation", "Compassion and patience", "Team-working skills"] },
      { title: "Volunteer Clinician", location: "Various Locations", type: "Volunteer", description: "Support our community outreaches and clubfoot clinic. Open to clinicians at all levels.", requirements: ["Valid professional license in Nigeria", "Availability for outreach days", "Commitment to community service", "Experience in rehabilitation preferred"] },
    ],
  },

  terms: {
    title: "Terms of Service",
    lastUpdated: "2025",
    content: `Welcome to the Bestojis Orthopaedic & Rehabilitation Foundation website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.

**1. Acceptance of Terms**
By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.

**2. Use of Website**
This website is provided for informational purposes about Bestojis Orthopaedic & Rehabilitation Foundation's programmes, services, and activities. You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.

**3. Donations**
All donations made through or in connection with this website are voluntary and non-refundable. Donated funds are used to support our prosthetic, orthotic, and rehabilitation programmes.

**4. Intellectual Property**
All content on this website, including text, images, logos, and graphics, is the property of Bestojis Orthopaedic & Rehabilitation Foundation and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.

**5. Privacy**
Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.

**6. Limitation of Liability**
Bestojis Orthopaedic & Rehabilitation Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.

**7. Changes to Terms**
We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of the modified terms.

**8. Contact**
For questions about these Terms of Service, please contact us at bestojis@gmail.com.`,
  },

  privacy: {
    title: "Privacy Policy",
    lastUpdated: "2025",
    content: `Bestojis Orthopaedic & Rehabilitation Foundation is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with our services.

**1. Information We Collect**
We may collect personal information such as your name, email address, phone number, and mailing address when you voluntarily provide it through forms on our website, including donation forms, contact forms, and patient referral forms.

**2. How We Use Your Information**
We use the information we collect to:
- Process donations and send receipts
- Respond to your inquiries and patient referrals
- Send updates about our programmes and impact (with your consent)
- Improve our website and services
- Comply with legal obligations

**3. Information Sharing**
We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our programmes, subject to confidentiality agreements.

**4. Data Security**
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

**5. Cookies**
Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.

**6. Your Rights**
You have the right to:
- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your personal information
- Opt out of marketing communications

**7. Children's Privacy**
Our website is not intended for children under 13. We do not knowingly collect personal information from children. Where we provide services to children with disabilities, parental consent is always obtained.

**8. Changes to This Policy**
We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.

**9. Contact Us**
For questions about this Privacy Policy, please contact us at bestojis@gmail.com or call 09122696126.`,
  },
};

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (path: string, value: any) => void;
  updateNestedContent: (updates: Record<string, any>) => void;
  resetContent: () => void;
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
  session: Session | null;
  loading: boolean;
  saving: boolean;
  saveNow: () => Promise<void>;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
  uploadImage: (file: File) => Promise<string>;
  hasUnsavedChanges: boolean;
}

const SiteContentContext = createContext<SiteContentContextType | null>(null);

function setNestedValue(obj: any, path: string, value: any): any {
  const clone = JSON.parse(JSON.stringify(obj));
  const keys = path.split(".");
  let current = clone;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) current[key] = {};
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return clone;
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const contentRef = React.useRef(content);
  contentRef.current = content;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_CONTENT);
      if (raw) setContent({ ...defaultContent, ...JSON.parse(raw) });
    } catch (err) {
      console.error('Error loading content:', err);
    }
    try {
      const raw = localStorage.getItem(LS_ADMIN);
      if (raw) {
        const s = JSON.parse(raw) as Session;
        setSession(s);
        setIsAdmin(!!s);
      }
    } catch {}
    setLoading(false);
  }, []);

  const saveToDb = useCallback(async (contentToSave?: SiteContent) => {
    const c = contentToSave || contentRef.current;
    if (!isAdmin || !session) return;
    setSaving(true);
    try {
      localStorage.setItem(LS_CONTENT, JSON.stringify(c));
      setHasUnsavedChanges(false);
    } catch (err) {
      console.error('Error saving content:', err);
      throw err;
    } finally {
      setSaving(false);
    }
  }, [isAdmin, session]);

  const saveNow = useCallback(async () => {
    await saveToDb();
  }, [saveToDb]);

  const updateContent = (path: string, value: any) => {
    setContent((prev) => {
      const updated = setNestedValue(prev, path, value);
      return updated;
    });
    setHasUnsavedChanges(true);
  };

  const updateNestedContent = (updates: Record<string, any>) => {
    setContent((prev) => {
      let updated = prev;
      for (const [path, value] of Object.entries(updates)) {
        updated = setNestedValue(updated, path, value);
      }
      return updated;
    });
    setHasUnsavedChanges(true);
  };

  const resetContent = async () => {
    setContent(defaultContent);
    try { localStorage.removeItem(LS_CONTENT); } catch {}
  };

  const login = async (email: string, password: string): Promise<{ error: string | null }> => {
    const adminEmail = (import.meta.env.VITE_ADMIN_EMAIL as string) || "admin@local";
    const adminPassword = (import.meta.env.VITE_ADMIN_PASSWORD as string) || "admin";
    if (email !== adminEmail || password !== adminPassword) {
      return { error: "Invalid credentials." };
    }
    const s: Session = { user: { id: "local-admin", email } };
    setSession(s);
    setIsAdmin(true);
    try { localStorage.setItem(LS_ADMIN, JSON.stringify(s)); } catch {}
    return { error: null };
  };

  const logout = async () => {
    setIsAdmin(false);
    setSession(null);
    try { localStorage.removeItem(LS_ADMIN); } catch {}
  };

  const uploadImage = async (file: File): Promise<string> => {
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  return (
    <SiteContentContext.Provider value={{
      content, updateContent, updateNestedContent, resetContent,
      isAdmin, setIsAdmin, session, loading,
      saving, saveNow, hasUnsavedChanges,
      login, logout, uploadImage,
    }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used within SiteContentProvider");
  return ctx;
}

export { defaultContent, generateSlug };
