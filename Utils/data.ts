import { FooterMenu, FooterData, FooterContactInfoItem, TestimonialsPageContent, TestimonialItem, TechnologiesPageContent, TechStackData, PortfolioPageContent, PortfolioProject, IndustriesPageContent, IndustryItem, AboutPageContent, AboutUsContent, ServicesPageContent, ServiceItem, HeroPageContent, HeroService, HeroStat, HeaderData, HeaderMenuGroup } from "./types";

export const defaultHeaderData: HeaderData = {
  header_logo_link: '/',
  header_logo_1: '/images/11.png',
  header_logo_2: '/metalogix/logo-light.png',
  header_button_text: "Contact Me",
  header_button_link: 'contact',
};

export const defaultHeaderMenuItems: HeaderMenuGroup[] = [
  {
    title: 'metalogix-header', // keep key as-is (minimal)
    menus: [
      // {
      //   title: 'What I Do',
      //   menu_items_title: 'Capabilities',
      //   menu_items: [
      //     {
      //       title: 'Web Development',
      //       items: [
      //         { name: 'Next.js Websites', slug: 'nextjs-websites', icon: '' },
      //         { name: 'Admin Dashboards', slug: 'admin-dashboards', icon: '' },
      //         { name: 'Client Portals', slug: 'client-portals', icon: '' },
      //         { name: 'Landing Pages', slug: 'landing-pages', icon: '' },
      //       ],
      //     },
      //     {
      //       title: 'App Development',
      //       items: [
      //         { name: 'React Native Apps', slug: 'react-native-apps', icon: '' },
      //         { name: 'Android Apps', slug: 'android-apps', icon: '' },
      //         { name: 'App Store Launch', slug: 'app-store-launch', icon: '' },
      //       ],
      //     },
      //     {
      //       title: 'Backend & APIs',
      //       items: [
      //         { name: 'API Integration', slug: 'api-integrations', icon: '' },
      //         { name: 'Auth & Roles', slug: 'auth-roles', icon: '' },
      //         { name: 'Node.js APIs (Basic)', slug: 'nodejs-apis', icon: '' },
      //       ],
      //     },
      //     {
      //       title: 'UI & Performance',
      //       items: [
      //         { name: 'UI Systems (MUI/Tailwind)', slug: 'ui-systems', icon: '' },
      //         { name: 'Performance Optimization', slug: 'performance-optimization', icon: '' },
      //         { name: 'Responsive & Accessibility', slug: 'responsive-accessibility', icon: '' },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Who I Help',
      //   menu_items_title: 'Industries',
      //   menu_items: [
      //     {
      //       items: [
      //         { name: 'SaaS & Startups', slug: 'saas-startups', icon: '' },
      //         { name: 'E-Commerce', slug: 'ecommerce', icon: '' },
      //         { name: 'Healthcare', slug: 'healthcare', icon: '' },
      //         { name: 'Education', slug: 'education', icon: '' },
      //         { name: 'Real Estate', slug: 'real-estate', icon: '' },
      //         { name: 'Logistics', slug: 'logistics', icon: '' },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Who I Am',
      //   menu_items_title: 'About',
      //   menu_items: [
      //     {
      //       items: [
      //         { name: 'About Me', slug: 'about', icon: '' },
      //         { name: 'My Skills', slug: 'services', icon: '' }, // minimal reuse
      //         { name: 'Testimonials', slug: 'testimonials', icon: '' },
      //         { name: 'Contact', slug: 'contact', icon: '' },
      //       ],
      //     },
      //   ],
      // },
      { title: 'What I Do', menu_link: 'services' },
      { title: 'Who I Help', menu_link: 'industries' },
      { title: 'Who I Am', menu_link: 'about' },
      { title: 'Projects', menu_link: 'projects' },
      // { title: 'Resume', menu_link: '/#resume' },
    ],
  },
];

export const footerMenuItems: FooterMenu[] = [
  {
    title: "metalogix-menu", // keep key as-is (minimal)
    menus: [
      {
        menu_items: {
          services: [
            "Frontend Development (React/Next.js)",
            "Admin Dashboards & Portals",
            "Landing Pages (Responsive UI)",
            "UI Development (Tailwind / MUI / Bootstrap)",
            "REST API Integration (Auth/CRUD)",
            "Performance & UX Improvements",
          ],
        },
      },
      {
        menu_items: {
          quickLinks: [
            { name: "Home", href: "/#hero" },
            { name: "About", href: "/#about" },
            { name: "Services", href: "/#services" },

            { name: "Projects", href: "/#projects" },
            { name: "Technologies", href: "/#technologies" },
            { name: "Testimonials", href: "/#testmonials" },
            { name: "Contact", href: "/#contact" },
          ],
        },
      },
    ],
  },
];

export const footerData: FooterData = {
  // ✅ change logo later if you want; keep path for now (minimal)
  footer_logo: "/images/metalogix/footer-logo.png",
  footer_alt_text: "Shahid Anwaar Logo",
  footer_website_description_text:
    "Shahid Anwaar — Frontend Developer. I build modern websites, dashboards, and client portals with clean UI, fast performance, and strong API integration.",

  footer_services_menu_heading: "What I Do",
  footer_quick_links_text: "Quick Links",
  footer_contact_info_text: "Contact",

  facebook_icon: "Facebook",
  insta_icon: "Instagram",
  linkedin_icon: "LinkedIn",

  // ✅ placeholders: update when you have your profile links
  footer_facbook_icon_link: "https://facebook.com/",
  footer_insta_icon_link: "https://instagram.com/",
  footer_linkedin_icon_link: "https://linkedin.com/",

  copyright_text: "Shahid Anwaar. All rights reserved.",
};

export const footerContactInfo: FooterContactInfoItem[] = [
  {
    id: "email",
    icon: "Mail",
    info: "shahidalirajpoot2@gmail.com",
    link: "mailto:shahidalirajpoot2@gmail.com",
  },
  {
    id: "phone",
    icon: "Phone",
    info: "+92 307 6669269",
    link: "tel:+923076669269",
  },
  {
    id: "address",
    icon: "MapPin",
    info: "Burewala, Vehari, Pakistan",
    link: "https://maps.google.com/?q=Burewala%2C%20Vehari%2C%20Pakistan",
  },
];

export const contactUs = {
  contact_us_badge: "Contact",
  contact_us_detail: "<p>Tell me what you’re building — I’ll reply as soon as possible.</p>",

  send_message_title: "Send me a message",
  send_message_description: "Share your requirements and I’ll get back to you soon.",

  visit_message_title: "Location",
  visit_message_description: "Remote collaboration available.",

  success_message_title: "Message Sent!",
  success_message_description: "Thanks! I’ll contact you shortly.",
  success_message_badge: "Expected response time: 2–6 hours",
};

export const contactInfo = [
  { icon: "Mail", info: "shahidalirajpoot2@gmail.com", link: "mailto:shahidalirajpoot2@gmail.com" },
  { icon: "Phone", info: "+92 307 6669269", link: "tel:+923076669269" },
  { icon: "MapPin", info: "Burewala, Vehari, Pakistan", link: "https://maps.google.com/?q=Burewala%2C%20Vehari%2C%20Pakistan" },
];

export const TESTIMONIALS_PAGE_CONTENT: TestimonialsPageContent = {
  testimonial_badge: "Testimonials",
  testimonial_detail: `
    <h2 class="section-title">
      What people say <span class="text-gradient">after working with me</span>
    </h2>
    <p class="section-desc">
      Feedback focused on UI quality, communication, and on-time delivery.
    </p>
  `,
};

// export const TESTIMONIALS_DATA: TestimonialItem[] = [
//   {
//     name: "Sarah Khan",
//     company: "TechNova",
//     position: "Product Manager",
//     image: "/images/testimonials/user1.jpg",
//     rating: 5,
//     text: `<p>Excellent communication and great quality. The UI was delivered fast and looked premium.</p>`,
//     project: "Web App UI",
//     duration: "3 weeks",
//     industry: "SaaS",
//     results: "Higher conversions & smoother UX",
//     colorVariant: "purple",
//   },
//   {
//     name: "Ali Raza",
//     company: "ShopSphere",
//     position: "Founder",
//     image: "/images/testimonials/user2.jpg",
//     rating: 5,
//     text: `<p>Super professional and reliable. The performance improvements were noticeable immediately.</p>`,
//     project: "Ecommerce Revamp",
//     duration: "4 weeks",
//     industry: "Ecommerce",
//     results: "Faster pages & more sales",
//     colorVariant: "blue",
//   },
// ];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Sarah Khan",
    company: "TechNova",
    position: "Product Manager",
    image:
      "https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg?cs=srgb&dl=pexels-prolificpeople-30004322.jpg&fm=jpg",
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
    image:
      "https://images.pexels.com/photos/15403161/pexels-photo-15403161.jpeg?cs=srgb&dl=pexels-manuel-guillen-vega-416968782-15403161.jpg&fm=jpg",
    rating: 5,
    text: `<p>Super professional and reliable. The performance improvements were noticeable immediately.</p>`,
    project: "Ecommerce Revamp",
    duration: "4 weeks",
    industry: "Ecommerce",
    results: "Faster pages & more sales",
    colorVariant: "blue",
  },

  // --- Added (client-style) ---
  {
    name: "Hassan Ahmed",
    company: "MailHarbor",
    position: "CTO",
    image:
      "https://images.pexels.com/photos/33363536/pexels-photo-33363536.jpeg?cs=srgb&dl=pexels-mindaugas-lazdauskas-2154678394-33363536.jpg&fm=jpg",
    rating: 5,
    text: `<p>Clean UI, fast delivery, and perfect API integration. The dashboard flows feel premium and smooth.</p>`,
    project: "Client + Admin Dashboard UI",
    duration: "6 weeks",
    industry: "Email Infrastructure",
    results: "Faster workflows & better usability",
    colorVariant: "green",
  },
  {
    name: "Ayesha Malik",
    company: "ChargeLane",
    position: "Operations Lead",
    image:
      "https://images.pexels.com/photos/19902720/pexels-photo-19902720.jpeg?cs=srgb&dl=pexels-ilkinefendiyev-19902720.jpg&fm=jpg",
    rating: 5,
    text: `<p>The admin portal became much easier to use. Tables, filters, and layouts are super clear and quick.</p>`,
    project: "Admin Portal Revamp",
    duration: "5 weeks",
    industry: "EV / Mobility",
    results: "Reduced support load & faster ops",
    colorVariant: "orange",
  },
  {
    name: "Usman Tariq",
    company: "PlanSprint",
    position: "Product Owner",
    image:
      "https://images.pexels.com/photos/10029842/pexels-photo-10029842.jpeg?cs=srgb&dl=pexels-rdne-10029842.jpg&fm=jpg",
    rating: 5,
    text: `<p>Very responsive and detail-focused. The admin panel UI is modern, consistent, and easy for our team.</p>`,
    project: "Task Planner Admin Panel",
    duration: "3 weeks",
    industry: "Productivity",
    results: "Cleaner management & smoother updates",
    colorVariant: "pink",
  },
  // {
  //   name: "Hira Naeem",
  //   company: "WishGenie",
  //   position: "Marketing Manager",
  //   image:
  //     "https://images.pexels.com/photos/31517991/pexels-photo-31517991.jpeg?cs=srgb&dl=pexels-yassine-benmoussa-1650792656-31517991.jpg&fm=jpg",
  //   rating: 5,
  //   text: `<p>UI looks polished and on-brand. The flow feels engaging and we saw better engagement on key screens.</p>`,
  //   project: "Dashboard + Campaign UI",
  //   duration: "3 weeks",
  //   industry: "Consumer App",
  //   results: "Higher engagement & better UI consistency",
  //   colorVariant: "gray",
  // },
  // {
  //   name: "Bilal Khan",
  //   company: "DoneWorkspace",
  //   position: "Project Manager",
  //   image:
  //     "https://images.pexels.com/photos/32064778/pexels-photo-32064778.jpeg?cs=srgb&dl=pexels-alpha-iliya-2149105184-32064778.jpg&fm=jpg",
  //   rating: 5,
  //   text: `<p>Great experience. The dashboard is responsive, fast, and the user journey is much more intuitive now.</p>`,
  //   project: "Client Dashboard UI",
  //   duration: "4 weeks",
  //   industry: "Work Management",
  //   results: "Better adoption & faster task handling",
  //   colorVariant: "orange",
  // },
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
    // { name: "All", icon: "Star" },
    // { name: "Frontend", icon: "Code" },
    // { name: "Backend", icon: "Settings" },
    // { name: "Mobile", icon: "Smartphone" },
    // { name: "Database", icon: "Database" },
    // { name: "Cloud", icon: "Cloud" },
  ],
  // technologies: [
  //   {
  //     name: "React",
  //     category: "Frontend",
  //     icon: "Code",
  //     logo: "/logos/react.svg",
  //     colorVariant: "blue",
  //     Performance: 92,
  //   },
  //   {
  //     name: "Next.js",
  //     category: "Frontend",
  //     icon: "Layers",
  //     logo: "/logos/nextjs.svg",
  //     colorVariant: "purple",
  //     Performance: 90,
  //   },
  //   {
  //     name: "TypeScript",
  //     category: "Frontend",
  //     icon: "Code",
  //     logo: "/logos/typescript.svg",
  //     colorVariant: "blue",
  //     Performance: 88,
  //   },
  //   {
  //     name: "Node.js",
  //     category: "Backend",
  //     icon: "Settings",
  //     logo: "/logos/node.svg",
  //     colorVariant: "green",
  //     Performance: 84,
  //   },
  //   {
  //     name: "MongoDB",
  //     category: "Database",
  //     icon: "Database",
  //     logo: "/logos/mongodb.svg",
  //     colorVariant: "green",
  //     Performance: 82,
  //   },
  //   {
  //     name: "AWS / S3",
  //     category: "Cloud",
  //     icon: "Cloud",
  //     logo: "/logos/aws.svg",
  //     colorVariant: "orange",
  //     Performance: 78,
  //   },
  // ],
  // technologies: [
  //   {
  //     name: "React",
  //     category: "Frontend",
  //     icon: "Code",
  //     logo: "logos:react",
  //     colorVariant: "blue",
  //     Performance: 92,
  //   },
  //   {
  //     name: "Next.js",
  //     category: "Frontend",
  //     icon: "Layers",
  //     logo: "logos:nextjs-icon",
  //     colorVariant: "purple",
  //     Performance: 90,
  //   },
  //   {
  //     name: "TypeScript",
  //     category: "Frontend",
  //     icon: "Code",
  //     logo: "logos:typescript-icon",
  //     colorVariant: "blue",
  //     Performance: 88,
  //   },
  //   {
  //     name: "Node.js",
  //     category: "Backend",
  //     icon: "Settings",
  //     logo: "logos:nodejs-icon",
  //     colorVariant: "green",
  //     Performance: 84,
  //   },
  //   {
  //     name: "MongoDB",
  //     category: "Database",
  //     icon: "Database",
  //     logo: "logos:mongodb-icon",
  //     colorVariant: "green",
  //     Performance: 82,
  //   },
  //   {
  //     name: "AWS / S3",
  //     category: "Cloud",
  //     icon: "Cloud",
  //     logo: "logos:aws",
  //     colorVariant: "orange",
  //     Performance: 78,
  //   },
  // ],
  technologies: [
    {
      name: "React",
      category: "Frontend",
      icon: "Code",
      logo: "Atom",
      colorVariant: "blue",
      Performance: 92,
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: "Layers",
      logo: "Layers",
      colorVariant: "purple",
      Performance: 90,
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: "Code",
      logo: "Braces",
      colorVariant: "blue",
      Performance: 88,
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "Settings",
      logo: "Terminal",
      colorVariant: "green",
      Performance: 84,
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "Database",
      logo: "Database",
      colorVariant: "green",
      Performance: 82,
    },
    {
      name: "AWS / S3",
      category: "Cloud",
      icon: "Cloud",
      logo: "Cloud",
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

  portfolio_get_started_button_link: "contact",
  portfolio_get_started_button_text: "Let’s Work Together",

  view_portfolio_button_link: "projects",

  portfolio_view_all_projects_button_text: "View All Projects",
};

// export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
//   {
//     title: "Admin Dashboard UI",
//     slug: "admin-dashboard-ui",
//     category: "Dashboard",
//     description:
//       "Responsive dashboard with tables, filters, charts-ready layout, and reusable components in React/Next.js.",
//     image: "/portfolio/admin-dashboard.jpg",
//     image_description: "Admin dashboard UI preview",
//   },
//   {
//     title: "E-commerce Product Pages",
//     slug: "ecommerce-product-pages",
//     category: "E-commerce",
//     description:
//       "Product listing + detail UI with clean layout, mobile-first design, and smooth interactions using TailwindCSS.",
//     image: "/portfolio/ecommerce.jpg",
//     image_description: "E-commerce product page preview",
//   },
//   {
//     title: "Landing Page (Modern UI)",
//     slug: "landing-page-modern-ui",
//     category: "Website",
//     description:
//       "High-converting landing page with animations, sections, and pixel-perfect responsive design using Next.js.",
//     image: "/portfolio/landing.jpg",
//     image_description: "Landing page preview",
//   },
//   {
//     title: "Client Portal Screens",
//     slug: "client-portal-screens",
//     category: "Portal",
//     description:
//       "Secure looking portal UI with forms, navigation, and component structure, integrated with REST APIs.",
//     image: "/portfolio/portal.jpg",
//     image_description: "Client portal UI preview",
//   },
//   {
//     title: "MUI + Tailwind UI System",
//     slug: "mui-tailwind-ui-system",
//     category: "UI System",
//     description:
//       "Reusable UI components using MUI + TailwindCSS, consistent spacing/typography and scalable structure.",
//     image: "/portfolio/ui-system.jpg",
//     image_description: "UI system preview",
//   },
//   {
//     title: "API Integrated Frontend",
//     slug: "api-integrated-frontend",
//     category: "Integration",
//     description:
//       "Frontend screens connected with APIs (Auth/CRUD), loading states, error handling, and clean UX flow.",
//     image: "/portfolio/api.jpg",
//     image_description: "API integration screens preview",
//   },
// ];

// ✅ Update your type to support multiple images


export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "MailCub — Marketing Website",
    slug: "mailcub-website",
    category: "Website",
    description:
      "Modern responsive website UI for an email infrastructure product with clean sections and strong layout using React/Next.js + Tailwind.",
    images: [
      { src: "/images/p3_1.png", alt: "MailCub website hero section" },
      { src: "/images/p3_2.png", alt: "MailCub website features section" },
      { src: "/images/p3_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p3_4.png", alt: "MailCub website hero section" },
      { src: "/images/p3_5.png", alt: "MailCub website features section" },
      { src: "/images/p3_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p3_7.png", alt: "MailCub website pricing/cta section" }
    ],
    link: "https://mailcub.com/",
  },
  {
    title: "MailCub — Client Portal",
    slug: "mailcub-client-portal",
    category: "Client Portal",
    description:
      "Client-side portal built with TypeScript, API-integrated screens, and responsive UI patterns for real user workflows.",
    images: [
      { src: "/images/p2_1.png", alt: "MailCub website hero section" },
      { src: "/images/p2_2.png", alt: "MailCub website features section" },
      { src: "/images/p2_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p2_4.png", alt: "MailCub website hero section" },
      { src: "/images/p2_5.png", alt: "MailCub website features section" },
      { src: "/images/p2_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p2_7.png", alt: "MailCub website pricing/cta section" },
    ],
    link: "https://client.mailcub.com/",
  },
  {
    title: "MailCub — Admin Panel",
    slug: "mailcub-admin-panel",
    category: "Admin Dashboard",
    description:
      "Admin dashboard for operational workflows with tables, filters, status badges, modals, and clean UX with API integration.",
    images: [
      { src: "/images/p1_1.png", alt: "MailCub website hero section" },
      { src: "/images/p1_2.png", alt: "MailCub website features section" },
      { src: "/images/p1_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p1_4.png", alt: "MailCub website hero section" },
      { src: "/images/p1_5.png", alt: "MailCub website features section" },
      { src: "/images/p1_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p1_7.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p1_8.png", alt: "MailCub website hero section" },
      { src: "/images/p1_9.png", alt: "MailCub website features section" },
    ],
    link: "https://admin.mailcub.com/",
  },
  {
    title: "ConnectVolt — Admin Dashboard",
    slug: "connectvolt-admin-dashboard",
    category: "Dashboard",
    description:
      "Operations-focused admin UI with reusable components, structured layout, and data-heavy screens (tables + filters).",
    images: [
      { src: "/images/p4_2.png", alt: "MailCub website features section" },
      { src: "/images/p4_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p4_4.png", alt: "MailCub website hero section" },
      { src: "/images/p4_5.png", alt: "MailCub website features section" },
      { src: "/images/p4_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p4_7.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p4_8.png", alt: "MailCub website hero section" },
      { src: "/images/p4_9.png", alt: "MailCub website features section" },
      { src: "/images/p4_10.png", alt: "MailCub website pricing/cta section" },
    ],
    link: "https://admin.connectvolt.com/",
  },
  {
    title: "Tikk — Admin Panel",
    slug: "tikk-admin-panel",
    category: "Admin Dashboard",
    description:
      "Admin panel UI with clean forms, reusable components, and API-ready flows for managing product operations.",
    images: [
      { src: "/images/p5_1.png", alt: "MailCub website hero section" },
      { src: "/images/p5_2.png", alt: "MailCub website features section" },
      { src: "/images/p5_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p5_4.png", alt: "MailCub website hero section" },
      { src: "/images/p5_5.png", alt: "MailCub website features section" },
      { src: "/images/p5_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p5_7.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p5_8.png", alt: "MailCub website hero section" },
    ],
    link: "https://admintikk.devflips.com/login",
  },
  {
    title: "WishGenie — Admin Panel",
    slug: "wishgenie-admin-panel",
    category: "Admin Dashboard",
    description:
      "Admin UI for managing content/operations with consistent layouts, reusable components, and smooth UX patterns.",
    images: [
      { src: "/images/p6_1.png", alt: "MailCub website hero section" },
      { src: "/images/p6_2.png", alt: "MailCub website features section" },
      { src: "/images/p6_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p6_4.png", alt: "MailCub website hero section" },
      { src: "/images/p6_5.png", alt: "MailCub website features section" },
      { src: "/images/p6_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p6_7.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p6_8.png", alt: "MailCub website hero section" }
    ],
    link: "https://adminwishgenie.devflips.com/login",
  },
  // {
  //   title: "E-Service Hub — Admin Portal",
  //   slug: "eservice-hub-admin",
  //   category: "Admin Portal",
  //   description:
  //     "Admin portal with login flow, structured navigation, and scalable UI screens designed for future API integrations.",
  //   images: [
  //     { src: "/portfolio/eservice/admin-1.jpg", alt: "E-Service Hub login" },
  //     { src: "/portfolio/eservice/admin-2.jpg", alt: "E-Service Hub dashboard" },
  //   ],
  //   link: "http://46.101.67.112:1300/login",
  // },
  {
    title: "DONE Workspace — Client Dashboard",
    slug: "doneworkspace-client-dashboard",
    category: "Client Portal",
    description:
      "Client dashboard UI with responsive design, clean UX flow, and API-connected views for real user journeys.",
    images: [
      { src: "/images/p7_1.png", alt: "MailCub website hero section" },
      { src: "/images/p7_2.png", alt: "MailCub website features section" },
      { src: "/images/p7_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p7_4.png", alt: "MailCub website hero section" },
      { src: "/images/p7_5.png", alt: "MailCub website features section" },
      { src: "/images/p7_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p7_7.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p7_8.png", alt: "MailCub website hero section" },
      { src: "/images/p7_9.png", alt: "MailCub website features section" },
      { src: "/images/p7_10.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p7_11.png", alt: "MailCub website pricing/cta section" },
    ],
    link: "https://client.doneworkspace.com/dashboard",
  },
  {
    title: "DynamicLogix — Company Website",
    slug: "dynamiclogix-website",
    category: "Website",
    description:
      "Professional marketing website with modern sections, responsive layout, and clean typography/spacing.",
    images: [
      { src: "/images/p8_1.png", alt: "MailCub website hero section" },
      { src: "/images/p8_2.png", alt: "MailCub website features section" },
      { src: "/images/p8_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p8_4.png", alt: "MailCub website hero section" },
      { src: "/images/p8_5.png", alt: "MailCub website features section" },
      { src: "/images/p8_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p8_7.png", alt: "MailCub website pricing/cta section" }
    ],
    link: "https://dynamiclogix.com/",
  },
  // {
  //   title: "Devflips — Company Website",
  //   slug: "devflips-website",
  //   category: "Website",
  //   description:
  //     "Conversion-friendly website UI with modern layout, responsive sections, and a scalable component structure.",
  //   images: [
  //     { src: "/portfolio/devflips/site-1.jpg", alt: "Devflips homepage" },
  //     { src: "/portfolio/devflips/site-2.jpg", alt: "Devflips sections preview" },
  //   ],
  //   link: "https://devflips.com/",
  // },
  {
    title: "Websites Admin Portal (DynamicLogix + Devflips)",
    slug: "websites-admin-portal",
    category: "Admin Portal",
    description:
      "Single admin portal to manage multiple marketing websites from one place—structured UI, forms, and scalable screens.",
    images: [
      { src: "/images/p9_1.png", alt: "MailCub website hero section" },
      { src: "/images/p9_2.png", alt: "MailCub website features section" },
      { src: "/images/p9_3.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p9_4.png", alt: "MailCub website hero section" },
      { src: "/images/p9_5.png", alt: "MailCub website features section" },
      { src: "/images/p9_6.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p9_7.png", alt: "MailCub website pricing/cta section" },
      { src: "/images/p9_8.png", alt: "MailCub website hero section" }
    ],
    link: "https://websitesadmindev.metalogixtech.com/login",
  },
];

export const HERO_PAGE_CONTENT: HeroPageContent = {
  get_stated_bttuon_link: "contact",
  get_stated_bttuon_text: "Let’s Work Together",

  view_portfolio_button_link: "projects",
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
  view_portfolio_button_link: "projects",
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

  contact_button_link: "contact",
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



// services
// industries
// projects
// technologies
// about

