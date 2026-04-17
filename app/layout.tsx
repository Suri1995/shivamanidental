import type { Metadata, Viewport } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivamanidental.vercel.app"),

  title: "Shivamani Dental – Premium Dental Care",
  description:
    "Experience world-class dental care at Shivamani Dental. Expert dentists, advanced technology, and compassionate service for your perfect smile",

  keywords: [
    "dental care",
    "dentist",
    "dental clinic",
    "teeth whitening",
    "orthodontics",
  ],

  authors: [{ name: "Shivamani Dental" }],
  creator: "Shivamani Dental",
  publisher: "Shivamani Dental",

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon.png", sizes: "512x512", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/", 
  },

  openGraph: {
    title: "Shivamani Dental – Premium Dental Care",
    description:
      "Experience world-class dental care with expert dentists and advanced technology.",
    url: "https://shivamanidental.vercel.app",
    siteName: "Shivamani Dental",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#00a891",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${montserrat.variable} ${roboto.variable} font-body antialiased`}
      >
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
