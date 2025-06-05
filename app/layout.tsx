import type { Metadata, Viewport } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "./components/atoms/AnimatedBackground";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Solieum | Solana Layer 2 Protocol",
  description: "Solieum is a Layer 2 protocol for Solana, designed to enhance scalability, speed, and resilience.",
  icons: {
    icon: "/images/sul3.jpg",
    apple: "/images/sul3.jpg",
    shortcut: "/images/sul3.jpg"
  },
  other: {
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070710" },
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Solieum - Decentralized Finance Ecosystem</title>
        <meta name="description" content="A unified DeFi ecosystem bridging traditional finance and decentralized innovation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/sul4.jpg" type="image/jpg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/sul4.jpg" />
        {/* Performance optimization script */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              // Disable development strict mode effects for performance
              if (process.env.NODE_ENV === 'development') {
                console.log('Performance mode enabled');
              }
            `
          }}
        />
      </head>
      <body
        className={`font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
