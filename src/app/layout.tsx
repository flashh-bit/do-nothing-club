import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import { Toaster } from "sonner";
import { RoastController } from "@/components/RoastController";
import { CookieBanner } from "@/components/CookieBanner";
import { ProductivityToggle } from "@/components/ProductivityToggle";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { ShoutOut } from "@/components/ShoutOut";
import { LazySoundboard } from "@/components/LazySoundboard";
import { LazyLoader } from "@/components/LazyLoader";
import { DoNothingChallenge } from "@/components/DoNothingChallenge";
import "./globals.css";

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
});

export const metadata: Metadata = {
  title: "The Do Nothing Club",
  description: "Join the global movement of people who are currently lying down.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} antialiased`}
      >
        <LazyLoader />
        <LazySoundboard />
        <DoNothingChallenge />
        <ShoutOut />
        <RoastController />
        {children}
        <CookieBanner />
        <ProductivityToggle />
        <ExitIntentModal />
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: '#ffffff',
            color: '#000000',
            border: '3px solid #000000',
            boxShadow: '4px 4px 0px 0px #000000',
            fontFamily: 'var(--font-comic-neue)',
            borderRadius: '0.5rem',
          },
        }} />
      </body>
    </html>
  );
}
