'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Header() {
    const { address, isConnected } = useAccount()
    
    return (
        <header className="w-full flex flex-col justify-center items-center py-8 absolute top-0 mx-auto z-10">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                    Open Crypto Foundation
                </h1>
                <div className="text-2xl md:text-3xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                        ERC-20 Token Creator
                    </span>
                </div>
            </div>
            
            <div className="w-full flex justify-center items-center max-w-7xl">
                <ConnectButton />
            </div>
        </header>
    );
}