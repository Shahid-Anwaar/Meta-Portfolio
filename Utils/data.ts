import { FooterMenu, FooterData, FooterContactInfoItem, TestimonialsPageContent, TestimonialItem, TechnologiesPageContent, TechStackData, PortfolioPageContent, PortfolioProject, IndustriesPageContent, IndustryItem, AboutPageContent, AboutUsContent, ServicesPageContent, ServiceItem, HeroPageContent, HeroService, HeroStat, HeaderData, HeaderMenuGroup } from "./Types";


export const defaultHeaderData: HeaderData = {
  header_logo_link: '/',
  header_logo_1: '/metalogix/logo-dark.png',
  header_logo_2: '/metalogix/logo-light.png',
  header_button_text: "Let's Work Together",
  header_button_link: 'contact',
};

export const defaultHeaderMenuItems: HeaderMenuGroup[] = [
  {
    title: 'metalogix-header',
    menus: [
      {
        title: 'What We Do',
        menu_items_title: 'Capabilities',
        menu_items: [
          {
            title: 'Web Development',
            items: [
              { name: 'Next.js Websites', slug: 'nextjs-websites', icon: '' },
              { name: 'Admin Dashboards', slug: 'admin-dashboards', icon: '' },
              { name: 'Client Portals', slug: 'client-portals', icon: '' },
              { name: 'Landing Pages', slug: 'landing-pages', icon: '' },
            ],
          },
          {
            title: 'App Development',
            items: [
              { name: 'React Native Apps', slug: 'react-native-apps', icon: '' },
              { name: 'Android Apps', slug: 'android-apps', icon: '' },
              { name: 'App Store Launch', slug: 'app-store-launch', icon: '' },
            ],
          },
          {
            title: 'Backend & APIs',
            items: [
              { name: 'Node.js APIs', slug: 'nodejs-apis', icon: '' },
              { name: 'Auth & Roles', slug: 'auth-roles', icon: '' },
              { name: 'Integrations', slug: 'api-integrations', icon: '' },
            ],
          },
          {
            title: 'Design & Marketing',
            items: [
              { name: 'UI/UX Design', slug: 'ui-ux-design', icon: '' },
              { name: 'SEO & Content', slug: 'seo-content', icon: '' },
              { name: 'Performance Optimization', slug: 'performance-optimization', icon: '' },
            ],
          },
        ],
      },
      {
        title: 'Who We Help',
        menu_items_title: 'Industries',
        // your API uses industriesData[0]?.items
        menu_items: [
          {
            items: [
              { name: 'SaaS & Startups', slug: 'saas-startups', icon: '' },
              { name: 'E-Commerce', slug: 'ecommerce', icon: '' },
              { name: 'Healthcare', slug: 'healthcare', icon: '' },
              { name: 'Education', slug: 'education', icon: '' },
              { name: 'Real Estate', slug: 'real-estate', icon: '' },
              { name: 'Logistics', slug: 'logistics', icon: '' },
            ],
          },
        ],
      },
      {
        title: 'Who We Are',
        menu_items_title: 'About',
        menu_items: [
          {
            items: [
              { name: 'About Metalogix', slug: 'about', icon: '' },
              { name: 'Our Process', slug: 'process', icon: '' },
              { name: 'Testimonials', slug: 'testimonials', icon: '' },
              { name: 'Contact', slug: 'contact', icon: '' },
            ],
          },
        ],
      },
      { title: 'Portfolio', menu_link: '/#projects' },
      { title: 'Career', menu_link: '/careers' },
    ],
  },
];

export const footerMenuItems: FooterMenu[] = [
    {
        title: "metalogix-menu",
        menus: [
            {
                menu_items: {
                    services: [
                        "Website Development",
                        "Web App & Dashboards",
                        "Mobile App Development",
                        "UI/UX Design",
                        "Ecommerce Solutions",
                        "API Development & Integration",
                        "Cloud & Deployment",
                        "SEO & Performance Optimization",
                    ],
                },
            },
            {
                menu_items: {
                    quickLinks: [
                        { name: "Home", href: "/#home" },
                        { name: "About", href: "/#about" },
                        { name: "Services", href: "/#services" },
                        { name: "Portfolio", href: "/#portfolio" },
                        { name: "Technologies", href: "/#technologies" },
                        { name: "Testimonials", href: "/#testimonials" },
                        { name: "Contact", href: "/#contact" },
                    ],
                },
            },
        ],
    },
];

export const footerData: FooterData = {
    footer_logo: "/images/metalogix/footer-logo.png", // ✅ your S3 file path
    footer_alt_text: "Metalogix Tech Logo",
    footer_website_description_text:
        "Metalogix Tech builds modern websites, admin dashboards, and scalable web/mobile apps with clean UI, fast performance, and reliable support.",

    footer_services_menu_heading: "Services",
    footer_quick_links_text: "Quick Links",
    footer_contact_info_text: "Contact Info",

    facebook_icon: "Facebook",
    insta_icon: "Instagram",
    linkedin_icon: "LinkedIn",

    footer_facbook_icon_link: "https://facebook.com/metalogixtech",
    footer_insta_icon_link: "https://instagram.com/metalogixtech",
    footer_linkedin_icon_link: "https://linkedin.com/company/metalogixtech",

    copyright_text: "Metalogix Tech. All rights reserved.",
};

export const footerContactInfo: FooterContactInfoItem[] = [
    {
        id: "email",
        icon: "Mail",
        info: "support@metalogixtech.com",
        link: "mailto:support@metalogixtech.com",
    },
    {
        id: "phone",
        icon: "Phone",
        info: "+92 300 0800613",
        link: "tel:+923000800613",
    },
    {
        id: "address",
        icon: "MapPin",
        info: "Saeed Center, Jail Road, Sahiwal, Pakistan",
        // ✅ put your Google Maps share link here
        link: "https://maps.google.com/?q=Saeed%20Center%20Jail%20Road%20Sahiwal",
    },
];

export const contactUs = {
    contact_us_badge: "Contact Us",
    contact_us_detail: "<p>Tell us what you’re building. We’ll reply fast.</p>",

    send_message_title: "Send us a message",
    send_message_description: "Share your requirements and we’ll get back soon.",

    visit_message_title: "Visit our office",
    visit_message_description: "We’re available Mon–Sat for meetings.",

    success_message_title: "Message Sent!",
    success_message_description: "Thanks! We’ll contact you shortly.",
    success_message_badge: "Expected response time: 2–4 hours",

    // optional:
    // map_iframe_src: "https://www.google.com/maps/embed?pb=....",
    // map_company: "Metalogix Software House",
    // map_address_line1: "Saeed Center, Jail Road",
    // map_address_line2: "Sahiwal, Pakistan",
};

export const contactInfo = [
    { icon: "Mail", info: "support@metalogixtech.com", link: "mailto:support@metalogixtech.com" },
    { icon: "Phone", info: "+92 300 0800 613", link: "tel:+923000800613" },
    { icon: "MapPin", info: "Saeed Center, Jail Road, Sahiwal", link: "#" },
];


export const TESTIMONIALS_PAGE_CONTENT: TestimonialsPageContent = {
    testimonial_badge: "Testimonials",
    testimonial_detail: `
    <h2 class="section-title">
      What clients say <span class="text-gradient">after working with us</span>
    </h2>
    <p class="section-desc">
      Real feedback, real outcomes — quality work, smooth communication, and on-time delivery.
    </p>
  `,
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        name: "Sarah Khan",
        company: "TechNova",
        position: "Product Manager",
        image: "/images/testimonials/user1.jpg",
        rating: 5,
        text: `<p>Excellent communication and great quality. The UI was delivered fast and looked premium.</p>`,
        project: "Web App UI",
        duration: "3 weeks",
        industry: "SaaS",
        results: "Higher conversions & smoother UX",
        colorVariant: "purple",
    },
    {
        name: "Ali Raza",
        company: "ShopSphere",
        position: "Founder",
        image: "/images/testimonials/user2.jpg",
        rating: 5,
        text: `<p>Super professional and reliable. The performance improvements were noticeable immediately.</p>`,
        project: "Ecommerce Revamp",
        duration: "4 weeks",
        industry: "Ecommerce",
        results: "Faster pages & more sales",
        colorVariant: "blue",
    },
];


export const TECHNOLOGIES_PAGE_CONTENT: TechnologiesPageContent = {
    technology_badge: "Technologies",
    technology_detail: `
    <h2 class="section-title">
      Tools I use to build <span class="text-gradient">fast & modern UI</span>
    </h2>
    <p class="section-desc">
      A focused tech stack for frontend, backend, databases, deployment and performance.
    </p>
  `,
};

export const TECH_STACK_DATA: TechStackData = {
    categories: [
        { name: "All", icon: "Star" },
        { name: "Frontend", icon: "Code" },
        { name: "Backend", icon: "Settings" },
        { name: "Mobile", icon: "Smartphone" },
        { name: "Database", icon: "Database" },
        { name: "Cloud", icon: "Cloud" },
    ],
    technologies: [
        {
            name: "React",
            category: "Frontend",
            icon: "Code",
            logo: "/logos/react.svg",
            colorVariant: "blue",
            Performance: 92,
        },
        {
            name: "Next.js",
            category: "Frontend",
            icon: "Layers",
            logo: "/logos/nextjs.svg",
            colorVariant: "purple",
            Performance: 90,
        },
        {
            name: "TypeScript",
            category: "Frontend",
            icon: "Code",
            logo: "/logos/typescript.svg",
            colorVariant: "blue",
            Performance: 88,
        },
        {
            name: "Node.js",
            category: "Backend",
            icon: "Settings",
            logo: "/logos/node.svg",
            colorVariant: "green",
            Performance: 84,
        },
        {
            name: "MongoDB",
            category: "Database",
            icon: "Database",
            logo: "/logos/mongodb.svg",
            colorVariant: "green",
            Performance: 82,
        },
        {
            name: "AWS / S3",
            category: "Cloud",
            icon: "Cloud",
            logo: "/logos/aws.svg",
            colorVariant: "orange",
            Performance: 78,
        },
    ],
};

export const PORTFOLIO_PAGE_CONTENT: PortfolioPageContent = {
    portfolio_badge: "Portfolio",

    portfolio_detail: `
    <h2 class="section-title">
      Selected <span class="text-gradient">Frontend Work</span>
    </h2>
    <p class="section-desc">
      I build modern, responsive and fast web UI using <strong>React</strong>, <strong>Next.js</strong>,
      <strong>TypeScript</strong>, <strong>TailwindCSS</strong>, <strong>MUI</strong>, and clean
      <strong>API integration</strong>.
    </p>
  `,

    portfolio_call_to_action_description: `
    <h3 class="cta-title">
      Have a project in mind?
    </h3>
    <p class="cta-desc">
      Let’s build a clean UI, strong UX, and API-driven screens that feel professional on every device.
    </p>
  `,

    portfolio_get_started_button_link: "#contact",
    portfolio_get_started_button_text: "Let’s Work Together",

    view_portfolio_button_link: "#portfolio",

    portfolio_view_all_projects_button_text: "View All Projects",
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        title: "Admin Dashboard UI",
        slug: "admin-dashboard-ui",
        category: "Dashboard",
        description:
            "Responsive dashboard with tables, filters, charts-ready layout, and reusable components in React/Next.js.",
        image: "/portfolio/admin-dashboard.jpg",
        image_description: "Admin dashboard UI preview",
    },
    {
        title: "E-commerce Product Pages",
        slug: "ecommerce-product-pages",
        category: "E-commerce",
        description:
            "Product listing + detail UI with clean layout, mobile-first design, and smooth interactions using TailwindCSS.",
        image: "/portfolio/ecommerce.jpg",
        image_description: "E-commerce product page preview",
    },
    {
        title: "Landing Page (Modern UI)",
        slug: "landing-page-modern-ui",
        category: "Website",
        description:
            "High-converting landing page with animations, sections, and pixel-perfect responsive design using Next.js.",
        image: "/portfolio/landing.jpg",
        image_description: "Landing page preview",
    },
    {
        title: "Client Portal Screens",
        slug: "client-portal-screens",
        category: "Portal",
        description:
            "Secure looking portal UI with forms, navigation, and component structure, integrated with REST APIs.",
        image: "/portfolio/portal.jpg",
        image_description: "Client portal UI preview",
    },
    {
        title: "MUI + Tailwind UI System",
        slug: "mui-tailwind-ui-system",
        category: "UI System",
        description:
            "Reusable UI components using MUI + TailwindCSS, consistent spacing/typography and scalable structure.",
        image: "/portfolio/ui-system.jpg",
        image_description: "UI system preview",
    },
    {
        title: "API Integrated Frontend",
        slug: "api-integrated-frontend",
        category: "Integration",
        description:
            "Frontend screens connected with APIs (Auth/CRUD), loading states, error handling, and clean UX flow.",
        image: "/portfolio/api.jpg",
        image_description: "API integration screens preview",
    },
];


export const HERO_PAGE_CONTENT: HeroPageContent = {
    get_stated_bttuon_link: "contact",
    get_stated_bttuon_text: "Let’s Work Together",

    view_portfolio_button_link: "#projects",
    viw_portfolio_button: "View Projects",

    hero_badge: "Frontend Developer • React | Next.js | TypeScript",
    hero_heading: "Modern UI, fast performance, clean code",

    hero_description: `
    <h1 class="hero-title">Hi, I’m Shahid Anwaar</h1>
    <p class="hero-desc">
      I build <strong>scalable dashboards</strong>, <strong>client portals</strong>, and
      <strong>responsive websites</strong> using
      <strong> ReactJS, Next.js, TypeScript</strong> with
      <strong> TailwindCSS, MUI, Bootstrap</strong>.
      Strong in <strong>REST API integration</strong> (Auth, CRUD, real-time updates).
    </p>
  `,

    hero_services_heading: "Core Skills",
    services_growth_text: "+Clean UI & Faster Delivery",

    secure_reliable_text: "Pixel Perfect UI",
    fast_deliver_text: "API Ready",
};

export const HERO_SERVICES: HeroService[] = [
    {
        id: 1,
        icon: "Globe",
        title: "Responsive Web UI",
        description: "Modern, mobile-first interfaces",
        progress: "92%",
        delay: 1.2,
        iconClass: "bg-blue-600",
        progressClass: "h-2 bg-blue-600",
    },
    {
        id: 2,
        icon: "Code",
        title: "React / Next.js",
        description: "Reusable components & pages",
        progress: "88%",
        delay: 1.4,
        iconClass: "bg-purple-600",
        progressClass: "h-2 bg-purple-600",
    },
    {
        id: 3,
        icon: "Cloud",
        title: "API Integration",
        description: "Auth, CRUD, real-time updates",
        progress: "85%",
        delay: 1.6,
        iconClass: "bg-green-600",
        progressClass: "h-2 bg-green-600",
    },
];

export const HERO_STATS: HeroStat[] = [
    {
        number: "10+",
        label: "Projects Delivered",
        color: "from-blue-400 to-blue-600",
    },
    {
        number: "1.5+",
        label: "Years Experience",
        color: "from-purple-400 to-purple-600",
    },
    {
        number: "Fast",
        label: "Support & Delivery",
        color: "from-green-400 to-green-600",
    },
];

export const ABOUT_PAGE_CONTENT: AboutPageContent = {
    about_badge: "About Me",
    about_detail: `
    <h2 class="section-title">
      Building modern UIs with <span class="text-gradient">React & Next.js</span>
    </h2>
    <p class="section-desc">
      I focus on clean, responsive interfaces and strong API integration.
      My work includes dashboards, admin panels, and client portals with reusable components and fast performance.
    </p>
  `,
    ready_transform_business_button_text: "Let’s Build Your Project",
    ready_transform_business_button_link: "contact",
};

export const ABOUT_US: AboutUsContent = {
    our_story_title: "My Journey",
    our_story_description: `
    <p>
      I’m <strong>Shahid Anwaar</strong>, a Frontend Developer working with
      <strong> ReactJS</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.
      I enjoy turning ideas into modern, user-friendly interfaces.
    </p>
    <p>
      I’ve built <strong>admin dashboards</strong>, <strong>client portals</strong>,
      and <strong>responsive websites</strong> using <strong>TailwindCSS</strong>, <strong>MUI</strong>,
      and <strong>Bootstrap</strong>, with strong <strong>REST API integration</strong>
      (Auth, CRUD, real-time updates).
    </p>
  `,

    what_we_do_title: "What I Do Best",
    features: [
        { name: "React UI Development", icon: "Code" },
        { name: "Next.js Frontend", icon: "Rocket" },
        { name: "TypeScript Clean Code", icon: "Star" },
        { name: "Tailwind / MUI UI Kits", icon: "Zap" },
        { name: "REST API Integration", icon: "Globe" },
        { name: "Responsive Layouts", icon: "TrendingUp" },
    ],

    our_vision_title: "Vision",
    our_vision_description: `
    <p class="about-card-text">
      Build UI experiences that feel fast, modern, and easy to use — with scalable structure
      and reusable components.
    </p>
  `,

    mission_title: "Mission",
    mission_description: `
    <p class="about-card-text">
      Deliver pixel-perfect frontend, smooth UX, and reliable API-driven features — while keeping code clean,
      maintainable, and performance-focused.
    </p>
  `,

    stats: [
        { icon: "Users", number: "10+", label: "Projects Delivered", color: "blue" },
        { icon: "Award", number: "1+", label: "Professional Experience", color: "purple" },
        { icon: "TrendingUp", number: "Fast", label: "Delivery & Support", color: "green" },
        { icon: "Globe", number: "React", label: "Next.js + TS Focus", color: "orange" },
    ],
};


export const SERVICES_PAGE_CONTENT: ServicesPageContent = {
    service_badge: "Services",

    services_call_to_action_description: `
    <h2 class="section-title">
      What I Build with <span class="text-gradient">React & Next.js</span>
    </h2>
    <p class="section-desc">
      I create modern, responsive, and performance-focused UIs using
      <strong> HTML, CSS, JavaScript, TypeScript</strong>, and component libraries like
      <strong> TailwindCSS, MUI, Bootstrap</strong> — with strong <strong>API integration</strong>.
    </p>
  `,

    services_cta_description: `
    <h3 class="cta-title">
      Need a clean UI with <span class="text-gradient">API integration</span>?
    </h3>
    <p class="cta-desc">
      Let’s build a fast, modern frontend — dashboards, portals, landing pages, or Next.js apps.
    </p>
  `,

    get_stated_bttuon_link: "contact",
    get_stated_bttuon_text: "Let’s Work Together",

    view_portfolio_button_link: "#projects",
    view_our_work_button_text: "View My Work",
};

export const SERVICES_LIST: ServiceItem[] = [
    {
        icon: "Code",
        title: "Frontend Development",
        projects: "React • Next.js • TypeScript",
        description:
            "Clean, scalable UI with reusable components, modern animations, and performance-first structure.",
        features: ["React Components", "Next.js Pages", "TypeScript", "Clean UI"],
        gradient: "blue",
    },
    {
        icon: "Palette",
        title: "UI Development (Tailwind / MUI)",
        projects: "Tailwind • MUI • Bootstrap",
        description:
            "Pixel-perfect responsive design using UI kits and utility-first CSS, matching Figma and brand guidelines.",
        features: ["TailwindCSS", "Material UI", "Bootstrap", "Responsive UI"],
        gradient: "purple",
    },
    {
        icon: "Cloud",
        title: "API Integration",
        projects: "Auth • CRUD • Real-time",
        description:
            "Integrate REST APIs for login/auth, dashboards, data tables, forms, and live updates with best practices.",
        features: ["Auth Flows", "CRUD Screens", "Data Fetching", "State Handling"],
        gradient: "green",
    },
    {
        icon: "Smartphone",
        title: "Responsive & Mobile-first UI",
        projects: "All Devices Ready",
        description:
            "Mobile-first layout that looks great on every screen with consistent spacing, typography, and accessibility.",
        features: ["Mobile-first", "Cross-browser", "Fast UI", "UX Focused"],
        gradient: "orange",
    },
    {
        icon: "ShoppingCart",
        title: "Website Pages & Portals",
        projects: "Landing • Dashboard • Portal",
        description:
            "Build pages for marketing, admin dashboards, and client portals with smooth navigation and clean structure.",
        features: ["Landing Pages", "Admin UI", "Client Portal", "Reusable Sections"],
        gradient: "pink",
    },
    {
        icon: "Megaphone",
        title: "Basic Backend Understanding",
        projects: "Node.js • MongoDB (Basic)",
        description:
            "Can work with backend teams, understand API structures, and handle data flows confidently on frontend.",
        features: ["API Contracts", "JSON Handling", "Basic Node", "Basic MongoDB"],
        gradient: "blue",
    },
];

export const INDUSTRIES_PAGE_CONTENT: IndustriesPageContent = {
    industry_badge: "Industries",

    industry_description: `
    <h2 class="section-title">
      Experience across <span class="text-gradient">real-world products</span>
    </h2>
    <p class="section-desc">
      I’ve built modern UI for different types of businesses — from admin dashboards and portals
      to e-commerce pages and service websites — using <strong>React</strong>, <strong>Next.js</strong>,
      <strong>TypeScript</strong>, and strong <strong>API integration</strong>.
    </p>
  `,

    industry_call_to_action_button_text: `
    <h3 class="cta-title">
      Want a UI that matches your <span class="text-gradient">business goals</span>?
    </h3>
    <p class="cta-desc">
      Share your idea and I’ll help you build a clean frontend with responsive design and API-driven features.
    </p>
  `,

    contact_button_link: "#contact",
    contact_button_text: "Contact Me",
};

export const INDUSTRIES_LIST: IndustryItem[] = [
    {
        title: "SaaS Dashboards",
        description: "Admin panels, analytics UI, tables, filters, roles, and clean component structure.",
        projects: "Dashboards / Admin UI",
        icon: "Building",
        colorVariant: "blue",
    },
    {
        title: "E-commerce & Stores",
        description: "Product listing pages, detail pages, cart flows, and responsive store layouts.",
        projects: "Storefront UI",
        icon: "ShoppingBag",
        colorVariant: "pink",
    },
    {
        title: "Education Platforms",
        description: "Course pages, content sections, portals, and smooth navigation experiences.",
        projects: "Portal UI",
        icon: "GraduationCap",
        colorVariant: "purple",
    },
    {
        title: "Health & Wellness",
        description: "Clean UX for wellness apps, content pages, and mobile-first UI layouts.",
        projects: "Wellness UI",
        icon: "Heart",
        colorVariant: "green",
    },
    {
        title: "Real Estate / Property",
        description: "Listings UI, cards, filters, and conversion-focused landing pages.",
        projects: "Listing UI",
        icon: "Home",
        colorVariant: "orange",
    },
    {
        title: "Logistics / Delivery",
        description: "Status screens, tracking style UI, and structured layout for operational tools.",
        projects: "Operational UI",
        icon: "Truck",
        colorVariant: "blue",
    },
    {
        title: "Finance / Billing UI",
        description: "Forms, validations, invoice-style pages, and secure-looking UI patterns.",
        projects: "Forms & UI",
        icon: "DollarSign",
        colorVariant: "green",
    },
    {
        title: "Web Apps & Portals",
        description: "Modern websites, client portals, and API integrated pages with Next.js.",
        projects: "Web UI",
        icon: "Globe",
        colorVariant: "purple",
    },
];
