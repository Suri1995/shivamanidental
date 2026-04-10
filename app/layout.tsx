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
  title: "Shivamani Dental – Premium Dental Care",
  description:
    "Experience world-class dental care at Shivamani Dental. Expert dentists, advanced technology, and compassionate service for your perfect smile",

  icons: {
    icon: "/favicon.ico",     
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  authors: [{ name: "Shivamani Dental" }],
  keywords: [
    "dental care",
    "dentist",
    "dental clinic",
    "teeth whitening",
    "orthodontics",
  ],
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
