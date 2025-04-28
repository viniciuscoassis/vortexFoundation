"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAccount } from 'wagmi';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useOraclesStore from "@/store/oracles";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  const { oracles, loadingProgress, setOracles, getOraclesBalance, tokenOfOwnerByIndex } = useOraclesStore();
  const { address } = useAccount();
  const [nftBalance, setNftBalance] = useState<number>(0);
  const [userOracles, setUserOracles] = useState<any[]>([]);

  // Format the address to show only first and last 4 characters
  const formattedAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : 'Not connected';

  useEffect(() => {
    if (oracles.length === 0) setOracles();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (address) {
        const balance = await getOraclesBalance(address);
        setNftBalance(Number(balance));
      }
    };
    fetchBalance();
  }, [address]);

  useEffect(() => {
    const fetchUserOracles = async () => {
      if (address && nftBalance > 0) {
        const userOraclesArray = [];
        for (let i = 0; i < nftBalance; i++) {
          const tokenId = await tokenOfOwnerByIndex(address, i);
          const oracle = oracles.find((o) => o.tokenId === tokenId);
          if (oracle) {
            userOraclesArray.push(oracle);
          }
        }
        setUserOracles(userOraclesArray);
      }
    };
    fetchUserOracles();
  }, [address, nftBalance, oracles]);

  if (loadingProgress < 100) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
        <h1 className="text-6xl font-bold text-secondary-foreground">
          Loading...
        </h1>
        <p className="text-lg text-secondary-foreground">
          {loadingProgress.toFixed(2)}%
        </p>
        <Progress value={loadingProgress} className="w-[60%]" />
      </div>
    );
  }

  return (
    <section className="m-auto">
      <header className="py-10 mx-5 md:w-3/4 md:m-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Oracles: Embark On A Cosmic Journey 🌀
        </h1>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <p className="text-muted-foreground">Connected as: {formattedAddress}</p>
          <p className="text-muted-foreground">Balance: {nftBalance} Oracles</p>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 min-h-screen">
        {oracles.map((oracle, index) => (
          <Card key={index}>
            <CardHeader className="h-36">
              <CardTitle>{oracle.name}</CardTitle>
              <CardDescription className="overflow-auto">
                {oracle.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={oracle.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                alt={oracle.name}
                width={400}
                height={400}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
