'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Header() {
    const { address, isConnected } = useAccount();
    
    return (
        <header className="w-full flex flex-col justify-center items-center py-6 sm:py-8 px-4 fixed top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm">
            <div className="text-center mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 tracking-tight">
                    Open Crypto Foundation
                </h1>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                        ERC-20 Token Creator
                    </span>
                </div>
            </div>
            
            <div className="w-full flex justify-center items-center">
                <ConnectButton />
            </div>
        </header>
    );
}