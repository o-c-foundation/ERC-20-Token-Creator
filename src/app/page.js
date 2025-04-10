import CreateCard from "@/components/CreateCard";
import SupportedChains from "@/components/SupportedChains";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-7xl mx-auto flex-col items-center p-4 pt-40 bg-gradient-to-b from-black/90 to-black/80 text-white">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        <CreateCard />
        <SupportedChains />
      </div>
      
      <footer className="mt-10 text-center text-gray-500 text-sm pb-6">
        <p>© 2023 Open Crypto Foundation. All rights reserved.</p>
      </footer>
    </main>
  );
}
