import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { RainbowProvider } from "@/providers/WalletProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Open Crypto Foundation ERC-20 Token Creator",
  description: "Create your ERC-20 token instantly on multiple networks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-sm text-white`}
      >
        <div className="fixed inset-0 bg-[url('/bg-grid.svg')] bg-center opacity-10 z-[-1]"></div>
        <Toaster position="top-center" visibleToasts={1}/>
        <RainbowProvider>
          <Header/>
          {children}
        </RainbowProvider>
      </body>
    </html>
  );
}
