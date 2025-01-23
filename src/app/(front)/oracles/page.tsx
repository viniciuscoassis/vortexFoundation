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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

export default function Page() {
  const { oracles, loadingProgress, setOracles, getOraclesBalance, tokenOfOwnerByIndex } = useOraclesStore();
  const { address } = useAccount();
  const [nftBalance, setNftBalance] = useState<number>(0);
  const [userOracles, setUserOracles] = useState<any[]>([]);
  const [selectedNfts, setSelectedNfts] = useState<number[]>([]);
  const { toast } = useToast();

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
      if (address && oracles.length > 0) {
        const userTokens = [];
        for (let i = 0; i < nftBalance; i++) {
          const tokenIndex = await tokenOfOwnerByIndex(address, i);
          userTokens.push(oracles[Number(tokenIndex)]);
        }
        setUserOracles(userTokens);
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
    <section className=" m-auto">
      <header className="py-10 mx-5 md:w-3/4 md:m-auto ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Oracles: Embark On A Cosmic Journey 🌀
        </h1>
        <div className="flex justify-center mt-4">
          <Dialog>
            <DialogTrigger>
              <Button variant="default">Migrate Oracles</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Migrate Your Oracles</DialogTitle>
                <DialogDescription>
                  Enter the details to migrate your oracles to the new contract.
                </DialogDescription>
                <div className="mb-4 space-y-2">
                  <p className="text-sm text-gray-500">Connected: {formattedAddress}</p>
                  <p className="text-sm text-gray-500">NFT Balance: {nftBalance}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {userOracles.length > 0 ? (
                    userOracles.map((oracle, index) => (
                      <div 
                        key={index} 
                        className={`aspect-square relative cursor-pointer transition-all duration-200 ${
                          selectedNfts.includes(index) ? 'ring-4 ring-primary' : ''
                        }`}
                        onClick={() => {
                          setSelectedNfts(prev => 
                            prev.includes(index) 
                              ? prev.filter(i => i !== index)
                              : [...prev, index]
                          );
                        }}
                      >
                        <Image
                          src={oracle.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                          alt={oracle.name}
                          fill
                          className="rounded-lg object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                          <p className="text-sm truncate">{oracle.name}</p>
                        </div>
                        {selectedNfts.includes(index) && (
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full aspect-square bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-400">No Oracles Found</p>
                    </div>
                  )}
                </div>
              </DialogHeader>
              <DialogFooter>
                <Button 
                  type="submit" 
                  disabled={selectedNfts.length === 0}
                  onClick={() => {
                    toast({
                      title: "Success!",
                      description: `${selectedNfts.length} Oracle${selectedNfts.length > 1 ? 's' : ''} migrated successfully.`,
                      duration: 5000,
                    });
                  }}
                >
                  Migrate {selectedNfts.length > 0 && `(${selectedNfts.length})`}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 min-h-screen">
        {oracles.map((oracle, index) => (
          <Card key={index}>
            <CardHeader className=" h-36">
              <CardTitle>{oracle.name}</CardTitle>
              <CardDescription className=" overflow-auto">
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
            {/* <Dialog>
              <DialogTrigger className="w-full">
                <Button className="w-full" variant="secondary">
                  Details
                </Button>
              </DialogTrigger>
                <DialogContent className="sm:min-w-[600] sm:min-h-0 md:min-w-[900] lg:min-w-[1000] xl:min-w-[1200px] 2xl:min-w-[1500px]">
                <DialogHeader className="grid-cols-2">
                    <DialogTitle>{oracle.name}</DialogTitle>
                    <DialogDescription>{oracle.description}</DialogDescription>
                  </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="col-span-1">
                    <Image
                      src={oracle.image.replace(
                        "ipfs://",
                        "https://ipfs.io/ipfs/"
                      )}
                      alt={oracle.name}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="text-2xl font-bold text-center text-secondary-foreground">
                        Tokenomics
                        </h1>
                  </div>
              
                </div>

                <DialogFooter>
                  <Button type="submit">Check on Paintswap</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog> */}
          </Card>
        ))}
      </div>
    </section>
  );
}
