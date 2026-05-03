import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://krivva.vercel.app'),
  title: "Krivva by rethika",
  description: "Long lasting Clothings crafted in Tiruppur",
  openGraph: {
    title: "Krivva by rethika",
    description: "Long lasting Clothings crafted in Tiruppur",
    url: "https://krivva.vercel.app",
    siteName: "Krivva by rethika",
    images: [
      {
        url: "/assets/Krivva_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Krivva by rethika Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/Krivva_logo.jpg",
  },
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Navigation />
          <main style={{ minHeight: 'calc(100vh - 72px)' }}>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
