export const site = {
  name: "StayView",
  tagline: "The PMS built for how properties actually operate",
  description:
    "StayView PMS unifies front desk, restaurant POS, night audit, inventory, city ledger, HR & payroll, and live analytics in one platform for hotels, hostels, lodges, and hospitality groups. Host in the cloud or run on-premise when reliable internet isn't guaranteed.",
  url: "https://stayview.com.ng",
  email: "stayviewpms@gmail.com",
  phone: "+234 905 800 7738",
  loginUrl: "https://app.stayview.com.ng/auth/login",
  setupUrl: "https://config.stayview.com.ng/login",
  outletLoginUrl: "https://outlet.stayview.com.ng/login",
};

export type ProductUseCase = {
  id: "stayview" | "outlet" | "booking" | "channel";
  name: string;
  tagline: string;
  tierBadge?: string;
  description: string;
  forWho: string;
  useCases: string[];
  modes?: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export const productUseCases: ProductUseCase[] = [
  {
    id: "stayview",
    name: "StayView",
    tagline: "Full property management (PMS)",
    description:
      "StayView is your property management system — front desk, reservations, housekeeping, folios, night audit, city ledger, inventory, and reports in one place. Built for general managers, front office, finance, and leadership who need every department on the same data.",
    forWho: "Hotels, motels, lodges, serviced apartments, and multi-branch groups",
    useCases: [
      "Check in walk-ins and reservations from a live room board",
      "Post room charges, taxes, and payments to guest or company folios",
      "Run night audit with pre-checks before rolling the business date",
      "Track AR invoices, city ledger, and payment reconciliation",
      "Manage stores, purchases, and department requisitions (Platinum)",
      "HR: staff profiles, leave, attendance, shifts, and monthly payroll (Platinum)",
      "View occupancy, revenue, and operational reports in one dashboard",
    ],
    modes: ["Full PMS", "Front desk + accounting focus", "Cloud or on-premise"],
    ctaLabel: "Book a StayView demo",
    ctaHref: "/demo",
    secondaryLabel: "",
    secondaryHref: "",
  },
  {
    id: "outlet",
    name: "Outlet",
    tagline: "Restaurant & Bar POS",
    description:
      "Outlet is StayView's F&B point-of-sale — built for waiters, cashiers, and outlet managers. Take dine-in, takeaway, and room service orders; print kitchen tickets; settle with cash, card, or post charges directly to an in-house guest folio when connected to StayView PMS.",
    forWho: "Hotel restaurants, standalone bars, cafés, and cloud kitchens on StayView",
    useCases: [
      "Fast menu search, modifiers, and table or tab management",
      "Room service orders linked to checked-in guests",
      "Auto-post F&B charges to the guest folio — no manual transfer at checkout",
      "Void, discount, and manager PIN controls",
      "Shift reports and outlet sales summaries",
      "Inventory-linked menu items deduct stock on sale (with StayView inventory)",
    ],
    modes: ["Standalone F&B", "Integrated with StayView PMS", "Desktop app (Electron)"],
    ctaLabel: "See Outlet in a demo",
    ctaHref: "/demo",
    secondaryLabel: "",
    secondaryHref: "",
  },
  {
    id: "channel",
    name: "Channel Manager",
    tagline: "OTA & distribution sync",
    tierBadge: "Platinum",
    description:
      "Push rates and availability to online travel agencies from the same inventory StayView uses at the front desk — so Booking.com, Airbnb, and your walk-in desk never disagree. Reservations from OTAs land in StayView automatically with guest details ready for check-in.",
    forWho: "Properties selling on OTAs who need one source of truth for inventory and rates",
    useCases: [
      "Two-way sync with connected OTAs — rates, availability, and restrictions",
      "Channel bookings import into StayView reservations automatically",
      "Reduce overbookings when front desk and OTAs share live inventory",
      "Scheduled sync every 15 minutes via background jobs",
      "Manage channel mappings and room-type parity from the dashboard",
      "Release inventory back to channels when rooms are blocked or out of order",
    ],
    modes: ["Platinum plan", "Integrated with StayView PMS", "OTA live sync"],
    ctaLabel: "Discuss channel setup",
    ctaHref: "/demo",
    secondaryLabel: "See Platinum plan",
    secondaryHref: "/pricing",
  },
  {
    id: "booking",
    name: "Booking Engine",
    tagline: "Direct, commission-free bookings",
    tierBadge: "Platinum",
    description:
      "Let guests book directly from your hotel website — no OTA commission on every reservation. The StayView booking engine shows live availability and rates from your PMS, collects guest details and payment, and creates the reservation in StayView the moment the booking is confirmed.",
    forWho: "Hotels with a website who want more direct revenue and fewer OTA fees",
    useCases: [
      "Embeddable booking widget for your hotel website",
      "Live rates and room availability pulled from StayView",
      "Guest pays online or chooses pay-at-hotel — your rules",
      "Instant confirmation email to guest and front desk",
      "Packages, promotions, and seasonal rate plans",
      "Multi-property groups: book any branch from one engine",
    ],
    modes: ["Platinum plan", "Website widget"],
    ctaLabel: "Enable booking engine",
    ctaHref: "/demo",
    secondaryLabel: "See Platinum plan",
    secondaryHref: "/pricing",
  },
];

export const platformStats = [
  { value: "4", label: "Product modules" },
  { value: "16+", label: "PMS modules" },
  { value: "Cloud / VPS", label: "Deployment" },
  { value: "Multi-currency", label: "Billing" },
];

export type Testimonial = {
  quote: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Night audit used to mean chasing restaurant tickets and open folios. StayView pre-checks show everything in one list — we close the day in minutes, not hours.",
    role: "Front Office Manager",
    location: "",
  },
  {
    quote:
      "Our restaurant and front desk finally share the same numbers. Room charges post to the folio when the guest orders — checkout is calm for the first time.",
    role: "General Manager",
    location: "",
  },
  {
    quote:
      "We needed the PMS to keep running when the internet drops. On-premise StayView on our local network was the deciding factor over cloud-only alternatives.",
    role: "Owner",
    location: "",
  },
];

export type SupportService = {
  title: string;
  description: string;
};

export const supportServices: SupportService[] = [
  {
    title: "Guided onboarding",
    description:
      "We configure your property — rooms, rates, taxes, outlets, and users — and walk your team through go-live checklists.",
  },
  {
    title: "Staff training",
    description:
      "Front desk, F&B, and finance training sessions included. Role-based so each team learns what they actually use daily.",
  },
  {
    title: "Cloud or on-prem setup",
    description:
      "Deploy on our cloud subdomain in days, or install on a local mini PC at the property for offline resilience.",
  },
  {
    title: "24×7 live chat support",
    description:
      "Reach our team when night audit fails or POS won't sync — not just during business hours.",
  },
];

export type WhyStayViewPoint = {
  title: string;
  description: string;
};

export const whyStayViewPoints: WhyStayViewPoint[] = [
  {
    title: "Built for real operations, not a demo environment",
    description:
      "Configured around how your front desk, finance, and F&B teams actually work day to day — local tax and folio workflows, multi-currency billing, and support in your timezone.",
  },
  {
    title: "Runs when the internet doesn't",
    description:
      "Cloud for speed, on-premise for resilience. Same StayView app on your local network when connectivity is unreliable.",
  },
  {
    title: "Operations-first, not distribution-only",
    description:
      "Deep night audit, city ledger, inventory, and folio control — not just OTA connectivity with a thin front desk on top.",
  },
  {
    title: "One stack: rooms, F&B, and channels",
    description:
      "PMS, Outlet POS, channel manager, and booking engine share one inventory and one guest record — no re-keying between systems.",
  },
];

export const integrations = [
  "Booking.com",
  "Airbnb",
  "Thermal printers",
  "Multi-branch",
];

export const trustSignals = [
  { label: "Role-based access", detail: "PIN-secured staff logins" },
  { label: "Audit trail", detail: "Every folio & rate change logged" },
  { label: "Multi-tenant", detail: "Isolated property data" },
  { label: "Self-hosted option", detail: "Your VPS or on-prem hardware" },
];

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
    monthly: 80000,
    annual: 78000,
    currency: "NGN",
    rooms: "Up to 50 rooms per branch",
    branches: 1,
    description:
      "Everything an independent hotel or boutique property needs to run a clean, professional operation — from first reservation to night audit.",
    modules: [
      "Front desk, check-in & check-out",
      "Reservations & walk-in bookings",
      "Room management & rate plans",
      "Guest folio & billing",
      "Housekeeping management",
      "Laundry tickets, estimates & settlement",
      "Automated night audit",
      "Daily operational reports",
      "24 \u00d7 7 live chat support",
    ],
  },
  {
    id: "premium-plus",
    name: "Premium Plus",
    monthly: 100000,
    annual: 98000,
    currency: "NGN",
    rooms: "Up to 70 rooms per branch",
    branches: 4,
    highlight: true,
    description:
      "The complete operating system for growing hotels and multi-outlet properties — full accounting, restaurant POS, inventory control, and advanced revenue insight in one platform.",
    modules: [
      "Everything in Premium",
      "Restaurant POS & multi-outlet management",
      "Full accounting & chart of accounts",
      "City ledger, AR & company billing",
      "Inventory control & procurement",
      "Maintenance request management",
      "Channel manager & OTA live sync",
      "Banquet & event management",
      "Direct booking engine",
      "Advanced revenue analytics",
      "Payment reconciliation & folio audit",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    monthly: 160000,
    annual: 158000,
    currency: "NGN",
    rooms: "Up to 120 rooms per branch",
    branches: 6,
    description:
      "Enterprise-grade PMS for hotel groups and large properties — HR, security, stock reconciliation, team chat, and a dedicated success team behind you.",
    modules: [
      "Everything in Premium Plus",
      "Human resources & staff profiles",
      "Leave, attendance & shift management",
      "Security clock station with photo verification",
      "Monthly payroll — HR prepares, accounting approves",
      "Salary payments with general ledger posting",
      "Cross-department store requisitions",
      "Physical stock reconciliation",
      "Team chat",
      "Email marketing & guest campaigns",
      "Priority onboarding & training",
      "Dedicated success manager",
    ],
  },
];

export type ProductScreenshot = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
};

/** Product UI screenshots under /public/screenshots */
export const productScreenshots: ProductScreenshot[] = [
  {
    id: "admin-dashboard",
    src: "/screenshots/admin-dashboard.png",
    alt: "StayView administrator dashboard with revenue, occupancy, and department health",
    title: "Admin dashboard",
    caption: "Live KPIs across front desk, F&B, and inventory",
    width: 1024,
    height: 640,
  },
  {
    id: "night-audit",
    src: "/screenshots/night-audit.png",
    alt: "StayView night audit control panel with balanced reports and business date rollover",
    title: "Night audit",
    caption: "Close the day with balanced reports and rollover",
    width: 1024,
    height: 592,
  },
  {
    id: "checkout-modal",
    src: "/screenshots/checkout-modal.png",
    alt: "StayView guest checkout modal showing successful checkout and city ledger overpayment",
    title: "Guest checkout",
    caption: "Folio settlement with city ledger handling",
    width: 1024,
    height: 533,
  },
  {
    id: "outlet-pos",
    src: "/screenshots/outlet-pos-bar45.png",
    alt: "StayView Outlet POS with wine menu and an open dine-in order ticket",
    title: "Outlet POS",
    caption: "Fast F&B ordering with modifiers and folio posting",
    width: 1024,
    height: 640,
  },
  {
    id: "inventory-products",
    src: "/screenshots/inventory-products.png",
    alt: "StayView inventory products management with stock levels and reorder points",
    title: "Inventory",
    caption: "Stores, categories, and stock levels in one place",
    width: 1024,
    height: 592,
  },
  {
    id: "tax-remittance",
    src: "/screenshots/tax-remittance.png",
    alt: "StayView tax remittance report with VAT and service charge breakdown",
    title: "Tax remittance",
    caption: "VAT and service charge ready to remit",
    width: 1024,
    height: 592,
  },
  {
    id: "booking-engine",
    src: "/screenshots/booking-engine.png",
    alt: "StayView booking engine widget for checking availability and booking directly",
    title: "Booking engine",
    caption: "Direct bookings from your hotel website",
    width: 861,
    height: 696,
  },
  {
    id: "hr-dashboard",
    src: "/screenshots/hr-dashboard.png",
    alt: "StayView HR dashboard with staff, leave, attendance, and payroll overview",
    title: "HR dashboard",
    caption: "Staff, leave, attendance, and payroll in one place",
    width: 1024,
    height: 567,
  },
  {
    id: "attendance-station",
    src: "/screenshots/attendance-station.png",
    alt: "StayView security attendance station with photo verification for clock in and out",
    title: "Attendance station",
    caption: "Photo-verified clock-in for security and supervisors",
    width: 1024,
    height: 572,
  },
  {
    id: "laundry-management",
    src: "/screenshots/laundry-management.png",
    alt: "StayView laundry management with tickets, status board, estimates, and room charge settlement",
    title: "Laundry management",
    caption: "Collect, track, invoice, and settle guest laundry jobs",
    width: 1024,
    height: 616,
  },
];

export const featureCategories = [
  {
    id: "frontdesk",
    title: "Front desk & room management",
    description:
      "Give your front desk team a single screen that shows every room, every guest, and every action needed — right now. StayView's live room board updates the moment a room is cleaned, blocked, or occupied, so your team always works from accurate, real-time information. Check-ins take seconds. Guest preferences follow the profile. Late checkouts and rate overrides move through a clear approval trail so nothing slips through undocumented.",
    bullets: [
      "Live visual room board with real-time status updates",
      "Walk-in check-in and advance reservation management",
      "Guest profile with preferences, history, and notes",
      "Late checkout workflows with manager approval",
      "Rate override requests with full audit trail",
      "Booking source and channel attribution tracking",
    ],
    screenshotId: "checkout-modal",
  },
  {
    id: "folios",
    title: "Folios, billing & accounting",
    description:
      "Every charge, payment, transfer, and adjustment is tracked in a structured double-entry ledger — not a spreadsheet, not a manual log. Guest folios accumulate charges in real time throughout the stay. Company folios handle direct billing to corporate clients. AR invoices are generated at checkout, aged automatically, and collected through a clear accounts-receivable workflow. Night audit pre-checks confirm your books balance before you close the day.",
    bullets: [
      "Guest and company folio management",
      "City ledger and AR invoicing with aging",
      "Double-entry bookkeeping on every transaction",
      "Transfer to room folio or city ledger",
      "Night audit pre-check and business date rollover",
      "Tax rules, exchange rates, and multi-currency setup",
    ],
    screenshotId: "night-audit",
  },
  {
    id: "restaurant",
    title: "Restaurant POS & outlet management",
    description:
      "Run your restaurant, bar, and room service from a single POS that talks directly to your PMS. Orders placed at the table or via room service post charges automatically to the correct guest folio — no manual transfers, no missed charges, no billing surprises at checkout. Kitchen tickets are generated the moment an order is confirmed. Shift and sales reports give outlet managers a clear end-of-service picture without stepping away from the system.",
    bullets: [
      "Table service, room service, and takeaway orders",
      "Auto-post outlet charges directly to guest or company folio",
      "Kitchen ticket printing and order modifier support",
      "Menu management with categories, variants, and pricing",
      "Outlet shift reports and daily sales summary",
      "Void and discount handling with supervisor approval controls",
    ],
    screenshotId: "outlet-pos",
  },
  {
    id: "inventory",
    title: "Inventory & procurement",
    description:
      "Control what comes in, what gets used, and what it costs — across every store, outlet, and department. Raise purchase orders to vendors, receive goods, and maintain accurate stock levels without leaving StayView. Department heads submit requisitions that go through an approval workflow before stock is released from a store. When a recipe-linked menu item is sold at the restaurant, ingredients are deducted automatically so your stock figures stay honest.",
    bullets: [
      "Multi-store inventory with real-time stock level tracking",
      "Vendor management and purchase orders",
      "Goods received notes and delivery confirmation",
      "Department requisitions with multi-level approval workflow",
      "Recipe-linked menu items with automatic stock deduction on sale",
      "Stock reconciliation and variance reporting",
    ],
    screenshotId: "inventory-products",
  },
  {
    id: "laundry",
    title: "Laundry management",
    description:
      "Run guest and walk-in laundry from one workspace — collect garments, show an estimate invoice at intake, track pieces through ready and completed, then settle to room charge, city ledger, cash, card, or complimentary. Every job leaves a clear transaction record, and printable invoices with your branch address can be emailed to the guest or company.",
    bullets: [
      "Ticket board with open, ready, completed, and revenue-today KPIs",
      "Cloth price list with quantities, estimates, and final totals",
      "Settle to room folio, city ledger, cash, card, or complimentary",
      "Printable laundry invoices with branch letterhead",
      "Email estimate or final invoice to guest or company",
      "Works alongside housekeeping for in-house guest laundry",
    ],
    screenshotId: "laundry-management",
  },
  {
    id: "reports",
    title: "Reports & analytics",
    description:
      "Revenue, occupancy, ADR, RevPAR, folio summaries, outlet breakdowns, and full audit reports — all in one place, available the moment you need them. Scheduled reports land in your inbox before the morning briefing so leadership always has the numbers. Export to PDF for ownership presentations or Excel for deeper analysis. General managers get a unified view across rooms, restaurant, and accounting without pulling data from multiple systems.",
    bullets: [
      "Occupancy, ADR, RevPAR, and revenue performance dashboards",
      "Night audit report with full transaction breakdown",
      "Restaurant and outlet sales analytics by shift and period",
      "Accounts receivable and AR aging reports",
      "Scheduled PDF and Excel delivery via email",
      "Unified front desk, restaurant, and accounting view",
    ],
    screenshotId: "tax-remittance",
  },
  {
    id: "hr",
    title: "Human resources & payroll",
    tierBadge: "Platinum",
    description:
      "Run your people operations inside StayView — not in spreadsheets or a separate HR tool. HR maintains staff profiles with job titles, base salaries, and bank details. Leave requests go through approval workflows. Security or supervisors clock staff in with photo verification, late and overtime tracked against scheduled shifts. Each month, HR prepares payroll for every active employee in one batch, reviews totals, and sends it to accounting. Finance approves or rejects with a full staff breakdown; approved payroll posts salary expenses to the general ledger automatically.",
    bullets: [
      "Staff HR profiles with employee numbers and employment status",
      "Leave types, requests, and manager approval workflow",
      "Attendance records with security clock-in and photo verification",
      "Department shift templates and weekly staff schedules",
      "Monthly payroll batch with per-staff gross, deductions, and net totals",
      "HR submit → accounting approve workflow with GL posting on approval",
    ],
    screenshotId: "hr-dashboard",
  },
  {
    id: "platform",
    title: "Platform & deployment",
    description:
      "StayView is built for the operational reality of running a hotel — unreliable internet in some markets, high staff turnover, and properties spread across multiple cities or regions. Deploy in the cloud for a zero-infrastructure setup that scales as you grow, or deploy on-premise when your property needs to run fully offline. Role-based access and PIN-secured staff logins ensure your team sees only what their role allows, and managers retain full operational control at all times.",
    bullets: [
      "Cloud SaaS with property subdomains — or fully on-premise",
      "Role-based access control with PIN-secured staff login",
      "Multi-branch and multi-property management under one account",
      "StayView desktop app for offline operational resilience",
      "PMS-only, Restaurant-only, or full PMS + Restaurant deployment modes",
      "Secure API for third-party and custom integrations",
    ],
    screenshotId: "admin-dashboard",
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
    title: "The modern night audit checklist for hotels",
    excerpt:
      "How unified pre-checks, business date rollover, and automated room charges eliminate end-of-day errors and give your GM a clean start every morning.",
    date: "2026-05-12",
    readTime: "6 min",
    category: "Operations",
    author: "StayView Team",
    content: [
      "Night audit is the financial heartbeat of every hotel. It closes the accounting day, posts room charges to every active folio, rolls the business date forward, and produces the daily report that ownership, finance, and operations all depend on. When it goes wrong — or when it is done manually across disconnected systems — managers lose hours reconciling discrepancies that should never have existed.",
      "The most common cause of night audit errors is not bad arithmetic. It is starting the audit before the day is actually ready to close. Open folios with unposted charges, unsettled restaurant orders, housekeeping rooms still marked dirty after a departure, or advance deposits that were collected but never applied to the reservation — these are the silent causes of a messy audit. By the time they surface, it is usually past midnight and the GM is on the phone.",
      "StayView's audit workflow enforces a full pre-check before it allows you to post room charges or roll the business date. It flags every open exception in one screen: which folios still have outstanding items, which restaurant shifts are unclosed, which checked-out rooms have charges still pending, and which rate codes have missing values. Your team works through the list, resolves each item, and only then does the audit proceed.",
      "Once pre-checks are clear, StayView posts nightly room charges and applicable taxes to every occupied folio automatically — with no manual entry and no risk of missing a room. The business date rolls forward. A full audit report is generated immediately and, for Premium Plus and Platinum properties, emailed to designated managers on a schedule so leadership sees occupancy, revenue, and any exceptions before the morning briefing begins.",
      "Properties that commit to a disciplined pre-check culture consistently find that audit time drops from over an hour to under ten minutes. The process stops being a stressful end-of-night task and becomes a routine confirmation that everything was already handled correctly during the day.",
    ],
  },
  {
    slug: "restaurant-pos-room-charge-autopost",
    title: "Why restaurant POS auto-posting to guest folios changes everything at checkout",
    excerpt:
      "When outlet charges reach the correct folio automatically, your front desk stops spending checkout time chasing paper tickets from the restaurant.",
    date: "2026-04-28",
    readTime: "5 min",
    category: "Restaurant",
    author: "StayView Team",
    content: [
      "In most hotels, the restaurant and the front desk operate in separate worlds. A guest orders breakfast, signs the bill, and goes back to their room. Somewhere between the restaurant counter and the front desk, that charge needs to find its way onto the right folio before checkout. In practice, it often does not — or it arrives after the guest has already settled and left.",
      "The root problem is that restaurant POS systems and property management systems are not connected. Staff manually transfer charges at the end of a shift or bundle them into night audit. Errors are routine. Guests are overcharged because a charge was posted twice, or the hotel absorbs the loss because a charge was never transferred at all. Either outcome is avoidable.",
      "When StayView's Restaurant POS is linked to the front desk, this problem is eliminated entirely. An order placed for an in-house guest is tagged to their room number at the point of sale. The moment the waiter confirms the order, the charge posts directly to the guest folio in the PMS — in real time, with no manual step between the restaurant and the billing system.",
      "At checkout, the front desk opens the folio and every restaurant charge is already there — correctly labelled, dated, and itemised by outlet. There are no missing tickets to chase, no verbal confirmations needed from the restaurant team, and no last-minute adjustments to make while the guest is standing at the desk. Checkout becomes a simple review and payment, not an investigation.",
      "For finance, the benefit is equally significant. Every outlet sale is automatically tied to a folio transaction or a cash sale record, so revenue attribution requires no manual reconciliation. The night audit report shows room revenue and restaurant revenue side by side, correctly categorised, and management can see the full picture of the day's income without opening a second system or waiting for someone to compile a report.",
    ],
  },
  {
    slug: "cloud-vs-onprem-pms-africa",
    title: "Cloud vs on-premise PMS: what hoteliers in low-connectivity markets need to consider",
    excerpt:
      "Connectivity, data ownership, and total cost of operation — a practical guide for independent properties, growing groups, and hotels in low-connectivity areas.",
    date: "2026-03-15",
    readTime: "7 min",
    category: "Strategy",
    author: "HotelProxi",
    content: [
      "The decision between cloud and on-premise PMS is rarely a technical one. For most hotels in emerging or low-connectivity markets, it comes down to three practical realities: how reliable is your internet connection on a typical Tuesday afternoon, how sensitive is your ownership's position on where guest data is stored, and what does your on-site IT capability actually look like when something needs attention at 11pm.",
      "Cloud PMS has clear advantages that make it the right starting point for most properties. There is no server to procure, no operating system to patch, and no backup schedule to configure and verify. Your property goes live on a secured subdomain within days. Updates roll out automatically. Staff access the system from any browser on any device. For new properties and hotel groups expanding across multiple cities, cloud deployment reduces the time from decision to live operation dramatically.",
      "On-premise deployment is the right answer when one or more of the following apply: your property is in a location with consistently poor or expensive internet, your ownership has strict data residency requirements that prevent guest records from residing outside your premises, or you need the PMS to remain fully operational during extended network outages — which, in many emerging markets, is not an edge case. StayView deploys on-premise using the identical codebase as the cloud version, packaged as a Docker Compose stack that runs on a dedicated mini PC at the property and serves every staff device on the local network.",
      "A pattern that works well for hotel groups is a deliberate hybrid: cloud deployment for newer or secondary properties where infrastructure flexibility adds the most value, and on-premise for flagship properties where the general manager needs guaranteed uptime regardless of the ISP's reliability that day. Both deployment modes run the same StayView application with the same features, so training, reporting, and finance workflows are consistent across the group.",
      "On hardware cost: an on-premise installation typically runs comfortably on a mid-range mini PC with 16 GB of RAM and a 512 GB SSD — a modest one-time cost that handles 50 or more concurrent users on the local network. The StayView subscription covers the software on both deployment modes, so your decision comes down to operational preference, not pricing.",
    ],
  },
  {
    slug: "inventory-for-hotels-not-retail",
    title: "Inventory management built for hotels, not retail stores",
    excerpt:
      "Stores, vendor purchase orders, department requisitions, and recipe-linked menu deductions — how Platinum properties stop losing money to untracked stock.",
    date: "2026-02-08",
    readTime: "5 min",
    category: "Inventory",
    author: "StayView Team",
    content: [
      "Hotel inventory is nothing like retail inventory. A retail store manages one category of product flowing in one direction — from supplier to customer. A hotel manages housekeeping supplies for rooms, raw ingredients for the kitchen, beverages for the bar, cleaning materials for maintenance, and consumables for reception — often across multiple stores, departments, and outlets simultaneously, with different approval levels governing each flow.",
      "The failure mode most hotels fall into is managing this complexity in Excel spreadsheets or informal chat conversations between department heads and the purchasing officer. Purchase orders are raised verbally or by message. Deliveries are not counted against what was ordered. Department heads request stock informally and receive whatever is available. Nobody knows the real stock position until someone physically counts everything — by which point the kitchen has already run short of something critical or the bar has been over-ordering for three months.",
      "StayView's inventory module is built around how hotel operations actually work. You define your stores — a main store, a kitchen store, a bar store, a housekeeping store — and manage stock levels and transfers between them from a single interface. Vendors are added to the system with contact details and payment terms. Purchase orders follow a defined workflow: raised by the purchasing team, approved by management, sent to the vendor, and then confirmed against a goods received note when the delivery arrives and is counted.",
      "Department requisitions follow the same workflow logic. A department head submits a requisition through the system — the kitchen needs 10 kg of rice from the main store, or housekeeping needs 20 bottles of disinfectant. An authorised manager reviews and approves or adjusts the request before any stock is released. The transfer is logged against both stores immediately, and every movement has a timestamp and a user attached to it.",
      "For hotels using StayView's Restaurant POS, menu items can be linked to their component ingredients with precise quantities per portion. When a plate of food is sold at the restaurant, the system automatically deducts the corresponding ingredient quantities from the kitchen store. Finance can see the cost of sales set against revenue in real time, and the general manager can review gross margin by menu item without waiting for a month-end physical count to reveal what actually left the kitchen.",
    ],
  },
  {
    slug: "hr-payroll-workflow-hotels",
    title: "Monthly payroll inside your PMS: HR prepares, finance approves",
    excerpt:
      "How StayView Platinum connects staff profiles, attendance, shift schedules, and accounting-approved payroll — without exporting salaries to a separate spreadsheet.",
    date: "2026-06-20",
    readTime: "5 min",
    category: "Human resources",
    author: "StayView Team",
    content: [
      "Payroll in many hotels still lives outside the PMS — HR maintains a spreadsheet, finance re-keys totals into accounting, and nobody can easily tie a salary payment back to attendance or shift records. When a GM asks why overtime on the payroll does not match the security register, the answer requires opening three different files and hoping the dates align.",
      "StayView Platinum brings HR operations into the same platform as front desk and finance. Each staff member has an HR profile linked to their system login: employee number, job title, base salary, bank details, and employment status. Leave requests follow an approval workflow. Security or supervisors clock staff in at the gate with photo verification, and clock events are checked against weekly shift schedules so late arrivals and overtime are recorded automatically.",
      "At month end, HR prepares payroll in one action. StayView creates a salary line for every active employee using their base salary, allowances, and deductions for the period. HR reviews the full staff list and month totals, adjusts individual lines if needed, then submits the batch to accounting.",
      "Accounting sees payroll pending approval on the salary payments screen — every employee, gross, deductions, and net pay in one view. Approve and StayView posts salary expense to the general ledger. Reject and the batch returns to HR with a reason, without partial postings or manual journal entries.",
      "The result is a clear audit trail from clock-in to payslip: who worked, what they were scheduled for, what they earned, and when finance signed off. For hotel groups on StayView, that visibility scales across branches without adding another HR software subscription.",
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