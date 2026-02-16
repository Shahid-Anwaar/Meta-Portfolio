import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Shahid Anwaar";
const SITE_URL = "https://shahid-web-developer.netlify.app";
const OG_IMAGE = "/images/16.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | React & Next.js Frontend Developer`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "React/Next.js frontend developer building admin dashboards, client portals, and responsive websites. Clean UI, API integration, and smooth performance.",
  keywords: [
    "Shahid Anwaar",
    "Shahid web developer",
    "Shahid frontend developer",
    "React developer",
    "React JS developer",
    "Next.js developer",
    "Next.js frontend developer",
    "Frontend developer",
    "Frontend engineer",
    "TypeScript developer",
    "JavaScript developer",
    "Admin panel developer",
    "Admin dashboard developer",
    "Dashboard developer",
    "SaaS dashboard developer",
    "Client portal developer",
    "Customer portal developer",
    "Web portal developer",
    "CRM dashboard developer",
    "UI developer",
    "Frontend UI developer",
    "Responsive web developer",
    "Landing page developer",
    "Portfolio website developer",
    "Website developer",
    "Figma to React",
    "Figma to Next.js",
    "Figma to Tailwind",
    "Pixel perfect UI",
    "UI/UX implementation",
    "Tailwind CSS developer",
    "Tailwind UI developer",
    "Bootstrap frontend developer",
    "REST API integration",
    "Frontend API integration",
    "Authentication UI",
    "Role based access UI",
    "CRUD app developer",
    "Performance optimization",
    "SEO friendly Next.js",
    "Core Web Vitals optimization",
    "React component development",
    "Reusable component library",
    "Design system implementation",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,

  // Publisher isn't a direct Metadata field in Next.js
  // so we add it as a meta tag using "other"
  other: {
    publisher: SITE_NAME,
  },
  
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | React & Next.js Frontend Developer`,
    description:
      "I build fast, modern web apps using React, Next.js & TypeScript—dashboards, admin panels, portals, and responsive UI.",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE, // e.g. "/images/16.png" in public
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | React & Next.js Frontend Developer`,
    description:
      "React/Next.js frontend developer building admin dashboards, client portals, and responsive websites.",
    images: [OG_IMAGE],
  },

  icons: {
    icon: [{ url: "/images/11.png" }],
    apple: [{ url: "/images/11.png" }], // optional but safe
  },

  category: "technology",

  verification: {
    google: "uUDVdwDVQMI4eKHqp8_p-6wCU1jjbR95jUNfAHv6BHA",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="uUDVdwDVQMI4eKHqp8_p-6wCU1jjbR95jUNfAHv6BHA"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
