'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RocketIcon, InfoIcon } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useState } from "react";
import { toast } from "sonner";
import useDeploy from "@/hooks/useDeploy";

export default function CreateCard() {
    const { address, isConnected } = useAccount()
    const { deploy, isPending } = useDeploy()
    const [tokenName, setTokenName] = useState("")
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [tokenSupply, setTokenSupply] = useState(1000)
    const [tokenDecimals, setTokenDecimals] = useState(18)
    const [tokenAddress, setTokenAddress] = useState("");
    const [showInstructions, setShowInstructions] = useState(false);

    const handleDeploy = async () => {
        if (!isConnected) {
            toast.warning("Connect Wallet");
            return
        };
        if (!tokenName) {
            toast.warning("Enter Token Name");
            return
        }
        if (!tokenSymbol) {
            toast.warning("Enter Token Symbol");
            return
        }
        if (!tokenSupply) {
            toast.warning("Enter Token Supply");
            return
        }
        if (tokenSupply < 1) {
            toast.warning("Token Supply must be greater than 1");
            return
        }
        if (!tokenDecimals) {
            toast.warning("Enter Token Decimals");
            return
        }
        if (tokenDecimals > 18) {
            toast.warning("Token Decimals must be less than 18");
            return
        }
        if (tokenDecimals < 1) {
            toast.warning("Token Decimals must be greater than 1");
            return
        }
        try {
            const supplyToMint = tokenSupply * 10 ** tokenDecimals
            await deploy(tokenName, tokenSymbol, supplyToMint, tokenDecimals);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Card className="w-full max-w-lg md:max-w-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 bg-black/50 border border-gray-800 shadow-xl rounded-xl text-white backdrop-filter backdrop-blur-sm">
            <div className="flex justify-between items-center">
                <CardTitle>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                        Token Creator
                    </h2>
                </CardTitle>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowInstructions(!showInstructions)}
                    className="text-blue-400 hover:text-blue-300"
                >
                    <InfoIcon size={18} />
                </Button>
            </div>
            
            {showInstructions ? (
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg border border-blue-900/50">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">How to Deploy Your Token</h3>
                    <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                        <li>Connect your wallet using the button at the top</li>
                        <li>Enter your token details below:
                            <ul className="list-disc list-inside ml-4 sm:ml-6 mt-1 text-gray-400 text-xs sm:text-sm">
                                <li><span className="font-medium text-white">Name:</span> Full name of your token (e.g., "Open Crypto Token")</li>
                                <li><span className="font-medium text-white">Symbol:</span> Trading symbol, usually 3-4 letters (e.g., "OCT")</li>
                                <li><span className="font-medium text-white">Decimals:</span> Divisibility of your token (18 is standard like ETH)</li>
                                <li><span className="font-medium text-white">Supply:</span> Total number of tokens to create</li>
                            </ul>
                        </li>
                        <li>Select your desired network via the wallet connector</li>
                        <li>Click Deploy and confirm the transaction in your wallet</li>
                        <li>Once confirmed, your tokens will be minted to your connected wallet address</li>
                    </ol>
                    <p className="mt-3 text-blue-300 text-xs sm:text-sm">Supported on multiple networks including Ethereum, Arbitrum, Base, Polygon, BSC, Avalanche, and more!</p>
                </div>
            ) : (
                <CardDescription>
                    <p className="text-gray-400 text-sm">
                        Enter your token details below and deploy your ERC-20 token with a single click.
                    </p>
                </CardDescription>
            )}
            
            <CardContent className='w-full p-0 sm:p-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 justify-items-center items-center'>
                <div className="space-y-1 sm:space-y-2 w-full">
                    <label className="font-medium text-gray-300 text-sm">
                        Name
                    </label>
                    <Input 
                        value={tokenName} 
                        onChange={(e) => setTokenName(e.target.value)} 
                        placeholder="Open Crypto Token" 
                        className="bg-black/30 border-gray-700 text-white"
                    />
                </div>
                <div className="space-y-1 sm:space-y-2 w-full">
                    <label className="font-medium text-gray-300 text-sm">
                        Symbol
                    </label>
                    <Input 
                        value={tokenSymbol} 
                        onChange={(e) => setTokenSymbol(e.target.value)} 
                        placeholder="OCT" 
                        className="bg-black/30 border-gray-700 text-white"
                    />
                </div>
                <div className="space-y-1 sm:space-y-2 w-full">
                    <label className="font-medium text-gray-300 text-sm">
                        Decimals
                    </label>
                    <Input 
                        min={1} 
                        max={18} 
                        value={tokenDecimals} 
                        onChange={(e) => setTokenDecimals(Number(e.target.value))} 
                        type="number" 
                        placeholder="18" 
                        className="bg-black/30 border-gray-700 text-white"
                    />
                </div>
                <div className="space-y-1 sm:space-y-2 w-full">
                    <label className="font-medium text-gray-300 text-sm">
                        Supply
                    </label>
                    <Input 
                        min={1} 
                        value={tokenSupply} 
                        onChange={(e) => setTokenSupply(Number(e.target.value))} 
                        type="number" 
                        placeholder="1000000" 
                        className="bg-black/30 border-gray-700 text-white"
                    />
                </div>
            </CardContent>
            
            <div className="flex justify-center pt-2">
                {!isConnected ? (
                    <ConnectButton />
                ) : (
                    <Button 
                        disabled={isPending} 
                        onClick={() => handleDeploy()}
                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                    >
                        <RocketIcon className="mr-2" size={16} />Deploy Token
                    </Button>
                )}
            </div>
        </Card>
    );
}