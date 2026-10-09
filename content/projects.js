export const localProjects = [
  {
    "slug": "keefie-pos",
    "tech": ["Next.js", "Expo", "Node.js"],
    "title": "Keefie POS",
    "category": "Point of Sale / Retail Management",
    "description": "A point-of-sale interface for Keefie Treats, with product browsing, order checkout and an admin dashboard for sales, inventory and daily operations.",
    "image": "/keefie pos 2.png",
    "overview": [
      "Keefie POS brings a product catalogue and current-order checkout into one cashier workspace. The interface includes product categories, customer details, promo codes and order totals.",
      "The companion admin dashboard presents sales trends and navigation for orders, inventory, payments, cashier performance and customer management."
    ],
    "gallery": [
      {
        "image": "/keefie pos 1.png",
        "alt": "Keefie Treats admin dashboard with sales summaries and a sales trend chart",
        "caption": "Admin dashboard: sales overview and retail operations."
      }
    ]
  },
  {
    "slug": "voltpay",
    "tech": ["Next.js", "Expo", "Node.js"],
    "title": "VoltPay",
    "category": "Electricity Payments / FinTech",
    "description": "An electricity-payment experience with a mobile customer interface and an operations dashboard for transactions, customers and provider activity.",
    "image": "/voltpay dash.png",
    "overview": [
      "VoltPay pairs a mobile electricity-payment interface with a desktop operations dashboard. The customer screen includes electricity purchases, saved meters, recent transactions and receipts.",
      "The operations dashboard displays electricity sales, service revenue, customer totals and transaction statuses. The supplied screenshots show a demo environment with simulated transactions."
    ],
    "gallery": [
      {
        "image": "/voltpay mob.png",
        "alt": "VoltPay mobile home screen with electricity purchase, saved meters and recent transactions",
        "caption": "Mobile customer experience: electricity purchases and transaction history."
      }
    ]
  },
  {
    slug: "databridge",
    title: "DataBridge",
    category: "Open Banking / FinTech",
    description:
      "A data integration platform designed around financial APIs, account connectivity and secure data workflows.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    image: "/projects/databridge.png",
    featured: true,
    year: "2025",
    role: "Full-Stack Developer",
    overview: [
      "DataBridge gives teams one dependable interface for connecting financial accounts and moving data between services.",
      "The product was designed around clarity, secure consent and resilient API workflows so complex infrastructure still feels simple to the end user.",
    ],
    challenge:
      "Financial data arrives from different providers in inconsistent formats, while users still expect a fast and trustworthy connection experience.",
    solution:
      "I designed a normalized API layer, clear connection states and defensive error handling, then paired them with a focused dashboard for monitoring linked accounts.",
    outcome:
      "The result is a reusable foundation for account aggregation, transaction insights and future open-banking products.",
  },
  {
    slug: "wellness-connect",
    title: "Wellness Connect",
    category: "Booking & Payments",
    description:
      "A wellness booking experience with service selection, customer details, confirmation and online payments.",
    tech: ["React", "Tailwind CSS", "Paystack", "Flutterwave"],
    image: "/projects/wellness-connect.png",
    year: "2025",
    role: "Frontend Developer",
    overview: [
      "Wellness Connect turns a multi-step appointment process into a calm, guided booking flow.",
      "Customers can compare services, choose a time, provide their details and pay without leaving the experience.",
    ],
    challenge:
      "Booking abandonment increased when service selection, scheduling and payment felt like disconnected tasks.",
    solution:
      "I combined those tasks into one responsive flow with clear progress, validation and payment feedback at every step.",
    outcome:
      "The streamlined experience makes bookings easier to complete on both mobile and desktop.",
  },
  {
    slug: "achor-expert",
    title: "Achor Expert",
    category: "Recruitment Dashboard",
    description:
      "A modern recruitment dashboard for managing candidates, roles, hiring workflows and team activity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/anchorEx.png",
    year: "2025",
    role: "Frontend Developer",
    overview: [
      "Achor Expert brings candidates, vacancies and hiring activity into one operational workspace.",
      "The dashboard prioritizes the information recruiters need to make quick decisions without losing the context behind each application.",
    ],
    challenge:
      "Recruiting teams needed to track a large number of candidates and stages without the interface becoming visually overwhelming.",
    solution:
      "I created a modular dashboard with strong information hierarchy, reusable data views and responsive workflow controls.",
    outcome:
      "Teams can scan pipeline health, find candidates and move applications forward from one consistent interface.",
  },
  {
    slug: "ride-app",
    title: "Ride App",
    category: "Mobile Application",
    description:
      "A motorcycle ride-hailing experience covering passenger flows, rider assignment, trip tracking and completion.",
    tech: ["React Native", "Expo", "Node.js"],
    image: "/projects/ride-app.png",
    year: "2025",
    role: "Mobile & Backend Developer",
    overview: [
      "Ride App supports the full journey from destination search to rider matching, live trip status and completion.",
      "Passenger and rider experiences share a common real-time backend while keeping each workflow focused on the decisions that matter in the moment.",
    ],
    challenge:
      "A ride-hailing product has to communicate changing location and trip states clearly, even when network conditions are unreliable.",
    solution:
      "I modeled explicit trip states, added resilient location updates and built focused screens for requesting, accepting and completing a ride.",
    outcome:
      "The prototype demonstrates a complete, extensible trip lifecycle across mobile clients and backend services.",
  },
  {
    slug: "ok-chop",
    title: "Ok Chop",
    category: "Food Ordering",
    description:
      "A food ordering platform with menu browsing, cart management, checkout and payment integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack"],
    image: "/projects/ok-chop.png",
    year: "2024",
    role: "Full-Stack Developer",
    overview: [
      "Ok Chop is a fast food-ordering experience built around discovery, an easy-to-edit cart and a low-friction checkout.",
      "The interface keeps menu imagery prominent while making price, availability and order totals easy to understand.",
    ],
    challenge:
      "Customers needed to move quickly from browsing a large menu to a confident, correctly priced order.",
    solution:
      "I built reusable menu and cart primitives, persistent order state and a checkout flow connected to Paystack.",
    outcome:
      "The result is a responsive storefront that supports the complete ordering journey from menu to payment.",
  },
  {
    slug: "fintech-api",
    title: "FinTech API",
    category: "Backend & APIs",
    description:
      "Backend infrastructure for secure API workflows, authentication, database operations and payment integrations.",
    tech: ["Node.js", "Express", "MongoDB"],
    year: "2024",
    role: "Backend Developer",
    overview: [
      "FinTech API is a service layer for products that need identity, protected financial operations and reliable third-party integrations.",
      "It emphasizes predictable contracts, validation and observability so client applications can stay simple.",
    ],
    challenge:
      "Sensitive operations needed consistent authorization, validation and failure handling across multiple external providers.",
    solution:
      "I organized the backend into clear service boundaries with token-based authentication, validated request contracts and centralized error handling.",
    outcome:
      "The API provides a secure base that can be reused across dashboards, mobile clients and payment workflows.",
  },
];
