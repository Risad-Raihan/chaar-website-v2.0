import type { Metadata } from "next";
import { Inter, Source_Sans_3, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Font configurations for optimal performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaar BD - Discover Amazing Discounts in Bangladesh",
  description: "Find the best discounts on food, clothing, accessories, and groceries in Dhaka and Chittagong. Download the Chaar BD app for exclusive location-based deals.",
  keywords: ["discount", "offers", "Bangladesh", "Dhaka", "Chittagong", "food", "clothing", "accessories", "groceries", "deals"],
  authors: [{ name: "Chaar BD Team" }],
  creator: "Chaar BD",
  publisher: "Chaar BD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chaarbd.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chaar BD - Discover Amazing Discounts in Bangladesh",
    description: "Find the best discounts on food, clothing, accessories, and groceries in Dhaka and Chittagong. Download the Chaar BD app for exclusive location-based deals.",
    url: "https://chaarbd.com",
    siteName: "Chaar BD",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chaar BD - Discount App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaar BD - Discover Amazing Discounts in Bangladesh",
    description: "Find the best discounts on food, clothing, accessories, and groceries in Dhaka and Chittagong.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sourceSans3.variable} ${poppins.variable} antialiased min-h-screen bg-bgPrimary text-foreground`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
