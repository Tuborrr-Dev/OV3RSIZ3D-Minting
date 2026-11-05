import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WrongNetworkBanner } from "@/components/WrongNetworkBanner";
import { MobileBottomDock } from "@/components/MobileBottomDock";

export const metadata: Metadata = {
  title: "OV3RSIZ3D // 2,222 hooded entities on Robinhood Chain",
  description: "2,222 hand-drawn, hooded entities in oversized clothing, on Robinhood Chain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-canvas text-white min-h-screen flex flex-col font-body selection:bg-electricYellow selection:text-black antialiased pb-16 md:pb-0">
        <Providers>
          <WrongNetworkBanner />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <MobileBottomDock />
        </Providers>
      </body>
    </html>
  );
}
