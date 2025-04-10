import CreateCard from "@/components/CreateCard";
import SupportedChains from "@/components/SupportedChains";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-16 pt-36 md:pt-40">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <CreateCard />
        <SupportedChains />
      </div>
      
      <footer className="mt-10 text-center text-gray-500 text-sm pb-6 w-full">
        <p>© 2023 Open Crypto Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
