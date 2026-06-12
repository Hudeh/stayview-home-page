export const site = {
  name: "StayView",
  tagline: "Modern hotel PMS for Africa's hospitality leaders",
  description:
    "StayView by HotelProxi — cloud and on-premise property management, F&B POS, night audit, inventory, and analytics in one platform.",
  url: "https://stayview.com.ng",
  email: "info@hotelproxi.com",
  phone: "+234 800 STAYVIEW",
  loginUrl: "https://app.stayview.com.ng/auth/login",
  setupUrl: "https://setup.stayview.com.ng/login",
};

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/demo", label: "Book a demo" },
];

export type Plan = {
  id: string;
  name: string;
  monthly: number;
  annual: number;
  currency: string;
  rooms: string;
  branches: number;
  highlight?: boolean;
  description: string;
  modules: string[];
};

export const plans: Plan[] = [
  {
    id: "premium",
    name: "Premium",
    monthly: 5000,
    annual: 4800,
    currency: "NGN",
    rooms: "Up to 50 rooms",
    branches: 1,
    description: "Essential PMS for independent hotels and boutiques.",
    modules: [
      "Front desk & StayView",
      "Reservations & booking",
      "Housekeeping",
      "Rooms & rates",
      "Folio management",
      "Night audit",
      "Operational reports",
      "24×7 live chat support",
    ],
  },
  {
    id: "premium-plus",
    name: "Premium Plus",
    monthly: 6000,
    annual: 5800,
    currency: "NGN",
    rooms: "Up to 70 rooms",
    branches: 4,
    highlight: true,
    description: "Full operations for growing groups and multi-outlet properties.",
    modules: [
      "Everything in Premium",
      "Accounting & chart of accounts",
      "Inventory & procurement",
      "F&B outlets & POS",
      "Maintenance",
      "Advanced analytics",
      "Payment reconciliation",
      "Guest & company portfolios",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    monthly: 7000,
    annual: 6800,
    currency: "NGN",
    rooms: "Up to 120 rooms",
    branches: 6,
    description: "Enterprise-grade PMS with channel manager and marketing.",
    modules: [
      "Everything in Premium Plus",
      "Channel manager (OTAs)",
      "Department requisitions",
      "Stock reconciliation",
      "Email marketing & campaigns",
      "Banquet management",
      "Priority onboarding",
      "Dedicated success manager",
    ],
  },
];

export const featureCategories = [
  {
    id: "frontdesk",
    title: "Front desk & StayView",
    description:
      "Real-time room grid, check-in/out, guest profiles, late checkout workflows, and rate overrides with manager approval.",
    bullets: [
      "Visual StayView room board",
      "Walk-in & reservation check-in",
      "Guest preferences & sharing",
      "Booking source tracking",
    ],
  },
  {
    id: "folios",
    title: "Folios & accounting",
    description:
      "Double-entry bookkeeping, guest and company folios, AR invoicing, night audit, and automated room charge posting.",
    bullets: [
      "Guest & company folios",
      "AR invoices & aging",
      "Night audit pre-check",
      "Tax & exchange setup",
    ],
  },
  {
    id: "fb",
    title: "Food & beverage",
    description:
      "Outlet POS, menu management, table service, room charge auto-post, and inventory-linked menu items.",
    bullets: [
      "Dine-in, takeaway & room service",
      "Kitchen tickets & modifiers",
      "Auto-post to guest folio",
      "Shift reports",
    ],
  },
  {
    id: "inventory",
    title: "Inventory & procurement",
    description:
      "Stores, products, vendors, purchases, requisitions, and stock transactions for Platinum properties.",
    bullets: [
      "Multi-store inventory",
      "Purchase orders & GRN",
      "Department requisitions",
      "Menu-to-stock deduction",
    ],
  },
  {
    id: "reports",
    title: "Reports & analytics",
    description:
      "Occupancy, revenue, operational dashboards, scheduled PDF/Excel exports, and unified night audit reporting.",
    bullets: [
      "10+ report types",
      "Scheduled email delivery",
      "Front desk & F&B analytics",
      "Export to PDF & Excel",
    ],
  },
  {
    id: "platform",
    title: "Platform & deployment",
    description:
      "Multi-tenant SaaS with property subdomains, cloud or on-premise deployment, Electron desktop apps, and role-based access.",
    bullets: [
      "Cloud & on-premise",
      "PIN-secured staff access",
      "PMS, F&B-only & full PMS modes",
      "StayView desktop shell",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "night-audit-checklist-2026",
    title: "The modern night audit checklist for Nigerian hotels",
    excerpt:
      "How unified pre-checks, business date rollover, and automated room charges reduce end-of-day errors.",
    date: "2026-05-12",
    readTime: "6 min",
    category: "Operations",
    author: "StayView Team",
    content: [
      "Night audit is the financial heartbeat of every hotel. When front desk, F&B, and accounting systems don't agree, managers lose hours reconciling spreadsheets.",
      "StayView's unified night audit runs pre-checks against open folios, unsettled POS orders, and housekeeping exceptions before you post room charges or roll the business date.",
      "Start with a pre-check report, resolve exceptions, then run the audit workflow. Temporal-backed jobs ensure retries and visibility if something fails mid-run.",
      "Properties on Premium Plus and Platinum also get operational reports emailed on schedule — so leadership sees occupancy and revenue without logging in.",
    ],
  },
  {
    slug: "fb-room-charge-autopost",
    title: "Why F&B room charge auto-post changes guest billing",
    excerpt:
      "Outlet sales posted to the correct folio automatically — fewer manual transfers and happier guests at checkout.",
    date: "2026-04-28",
    readTime: "5 min",
    category: "F&B",
    author: "StayView Team",
    content: [
      "Room service and restaurant charges often sit in a POS silo until night audit. Staff manually transfer balances, and mistakes show up at checkout.",
      "With StayView, outlet orders linked to in-house guests post directly to guest or company folios. Voids and cancellations restore inventory when menu items are stock-linked.",
      "Finance teams see outlet breakdowns on folio transactions. GMs see F&B revenue alongside rooms in one dashboard.",
    ],
  },
  {
    slug: "choosing-cloud-vs-onprem-pms",
    title: "Cloud vs on-premise PMS: what African hoteliers should consider",
    excerpt:
      "Connectivity, data residency, and total cost — a practical guide for single properties and groups.",
    date: "2026-03-15",
    readTime: "7 min",
    category: "Strategy",
    author: "HotelProxi",
    content: [
      "Cloud PMS delivers fast rollout, automatic updates, and lower upfront infrastructure. StayView cloud tenants run on secured subdomains with encrypted GraphQL APIs.",
      "On-premise suits properties with strict data policies or unreliable internet. The same StayView codebase deploys to your VPS with Docker Compose.",
      "Many groups use cloud for new branches and on-prem for flagship properties. StayView subscription plans support both deployment modes.",
    ],
  },
  {
    slug: "inventory-for-hotels-not-retail",
    title: "Inventory management built for hotels, not retail",
    excerpt:
      "Stores, requisitions, and recipe-linked menu items — how Platinum properties control cost of sales.",
    date: "2026-02-08",
    readTime: "5 min",
    category: "Inventory",
    author: "StayView Team",
    content: [
      "Hotel inventory spans housekeeping supplies, kitchen ingredients, and bar stock — often across multiple outlets and a central store.",
      "StayView inventory includes vendors, purchase orders, department requisitions with approval workflows, and stock reconciliation reports.",
      "Link menu items to products and stores so POS sales deduct stock automatically. Voids put quantity back. Finance sees margin impact in operational reports.",
    ],
  },
];

export function formatPrice(amount: number, currency = "NGN") {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
