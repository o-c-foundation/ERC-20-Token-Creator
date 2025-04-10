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
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white overflow-x-hidden`}
      >
        {/* Background gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/90 to-black/80 z-[-2]"></div>
        
        {/* Background grid pattern */}
        <div className="fixed inset-0 bg-[url('/bg-grid.svg')] bg-center opacity-10 z-[-1]"></div>
        
        <Toaster position="top-center" visibleToasts={1}/>
        <RainbowProvider>
          <div className="flex flex-col min-h-screen max-w-screen overflow-x-hidden">
            <Header/>
            <main className="flex-grow flex flex-col">
              {children}
            </main>
          </div>
        </RainbowProvider>
      </body>
    </html>
  );
}
