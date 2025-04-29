"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useAccount } from 'wagmi';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useExplorersStore from "@/store/explorers";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import traits from "@/data/traits.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { createPublicClient, getContract, http, formatEther } from "viem";
import { getChainConfig } from "@/config/chains";
import { explorersABI } from "@/data/abi/explorers";

const IPFS_GATEWAY = "https://gateway.lighthouse.storage/ipfs/";

export default function Page() {
  const { explorers, loadingProgress, setExplorers, getExplorersBalance } = useExplorersStore();
  const { address } = useAccount();
  const [nftBalance, setNftBalance] = useState<number>(0);
  const [userExplorers, setUserExplorers] = useState<any[]>([]);
  const [mintPrice, setMintPrice] = useState<string>("0");
  const [maxSupply, setMaxSupply] = useState<number>(0);
  const { toast } = useToast();

  // Trait selection state
  const [selectedTraits, setSelectedTraits] = useState({
    species: "",
    hat: "",
    weapon: "",
    background: "",
    outfit: ""
  });

  // Format the address to show only first and last 4 characters
  const formattedAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : 'Not connected';

  // Get random explorer images
  const randomExplorers = useMemo(() => {
    const exampleImages = [
      "/explorers/1.jpeg",
      "/explorers/2.jpeg",
      "/explorers/3.jpeg",
      "/explorers/4.jpeg",
      "/explorers/5.jpeg",
      "/explorers/6.jpeg",
      "/explorers/7.jpeg",
      "/explorers/8.jpeg",
      "/explorers/9.jpeg",
      "/explorers/10.jpeg",
      "/explorers/11.jpeg",
      "/explorers/12.jpeg",
      "/explorers/13.jpeg",
      "/explorers/14.jpeg",
      "/explorers/15.jpeg",
      "/explorers/16.jpeg",
      "/explorers/17.jpeg",
      "/explorers/18.jpeg",
    ];

    return exampleImages
      .sort(() => Math.random() - 0.5)
      .slice(0, 18)
      .map((image, index) => ({
        tokenId: index + 1,
        name: `Explorer #${index + 1}`,
        description: "A unique space explorer with special traits",
        image: image,
        attributes: [
          { trait_type: "Species", value: "Martian" },
          { trait_type: "Hat", value: "Space Helmet" },
          { trait_type: "Weapon", value: "Laser Gun" },
          { trait_type: "Background", value: "Space Station" },
          { trait_type: "Outfit", value: "Space Suit" },
        ],
      }));
  }, []);

  useEffect(() => {
    if (explorers.length === 0) setExplorers();
  }, []);

  useEffect(() => {
    const fetchContractInfo = async () => {
      try {
        const { chain, rpcUrl, contracts } = getChainConfig();
        const client = createPublicClient({
          chain,
          transport: http(rpcUrl),
        });

        const contract = getContract({
          address: contracts.explorers,
          abi: explorersABI,
          client,
        });

        const [price, supply] = await Promise.all([
          contract.read.MINT_PRICE() as Promise<bigint>,
          contract.read.MAX_SUPPLY() as Promise<bigint>,
        ]);

        setMintPrice(price.toString());
        setMaxSupply(Number(supply));
      } catch (error) {
        console.error('Error fetching contract info:', error);
      }
    };

    fetchContractInfo();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (address) {
        const balance = await getExplorersBalance(address);
        setNftBalance(Number(balance));
      }
    };
    fetchBalance();
  }, [address]);

  useEffect(() => {
    const fetchUserExplorers = async () => {
      if (address && nftBalance > 0) {
        setUserExplorers(explorers);
      }
    };
    fetchUserExplorers();
  }, [address, nftBalance, explorers]);

  const handleTraitChange = (trait: string, value: string) => {
    setSelectedTraits(prev => ({
      ...prev,
      [trait]: value
    }));
  };

  const handleMint = async () => {
    // TODO: Implement minting logic
    toast({
      title: "Coming Soon",
      description: "Minting functionality will be available soon!",
    });
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-7xl">
      {/* Cool Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Space Explorers
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Mint your unique space explorer and join the cosmic adventure. Each explorer is a one-of-a-kind NFT with unique traits and attributes.
        </p>
      </div>

      {/* Mint Information Banner */}
      <div className="bg-primary/10 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h3 className="font-semibold text-base">Mint Price</h3>
            <p className="text-xl font-bold">{formatEther(BigInt(mintPrice))} S</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-base">Total Supply</h3>
            <p className="text-xl font-bold">{maxSupply.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-base">Minted</h3>
            <p className="text-xl font-bold">{explorers.length.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Trait Selection Form */}
        <Card className="h-fit">
          <CardHeader className="pb-4">
            <CardTitle>Select Traits</CardTitle>
            <CardDescription>Choose your explorer's traits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Species</label>
              <Select
                value={selectedTraits.species}
                onValueChange={(value) => handleTraitChange("species", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select species" />
                </SelectTrigger>
                <SelectContent>
                  {traits.species.map((species, index) => (
                    <SelectItem key={index} value={species}>
                      {species}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Hat</label>
              <Select
                value={selectedTraits.hat}
                onValueChange={(value) => handleTraitChange("hat", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select hat" />
                </SelectTrigger>
                <SelectContent>
                  {traits.hats.map((hat, index) => (
                    <SelectItem key={index} value={hat}>
                      {hat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Weapon</label>
              <Select
                value={selectedTraits.weapon}
                onValueChange={(value) => handleTraitChange("weapon", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select weapon" />
                </SelectTrigger>
                <SelectContent>
                  {traits.weapons.map((weapon, index) => (
                    <SelectItem key={index} value={weapon}>
                      {weapon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Background</label>
              <Select
                value={selectedTraits.background}
                onValueChange={(value) => handleTraitChange("background", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select background" />
                </SelectTrigger>
                <SelectContent>
                  {traits.backgrounds.map((background, index) => (
                    <SelectItem key={index} value={background}>
                      {background}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Outfit</label>
              <Select
                value={selectedTraits.outfit}
                onValueChange={(value) => handleTraitChange("outfit", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select outfit" />
                </SelectTrigger>
                <SelectContent>
                  {traits.outfits.map((outfit, index) => (
                    <SelectItem key={index} value={outfit}>
                      {outfit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full mt-4"
              onClick={handleMint}
              disabled={!Object.values(selectedTraits).every(trait => trait !== "")}
            >
              Mint Explorer
            </Button>
          </CardContent>
        </Card>

        {/* Explorer Examples Carousel */}
        <Card>
          <CardHeader>
            <CardTitle>Explorer Examples</CardTitle>
            <CardDescription>Browse through existing explorers</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                {randomExplorers.map((explorer) => (
                  <CarouselItem key={explorer.tokenId} className="basis-full">
                    <div className="relative w-96 h-96 mx-auto overflow-hidden rounded-lg">
                      <Image
                        src={explorer.image}
                        alt={explorer.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-semibold">{explorer.name}</h3>
                      <p className="text-sm text-muted-foreground">{explorer.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>

      {/* Owned Explorers Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Explorers</h2>
          <p className="text-muted-foreground">
            Connected as: {formattedAddress}
          </p>
          <p className="text-muted-foreground">
            Balance: {nftBalance} Explorers
          </p>
        </div>

        {loadingProgress < 100 ? (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-lg text-muted-foreground mb-4">
              Loading your explorers... {loadingProgress.toFixed(2)}%
            </p>
            <Progress value={loadingProgress} className="w-full" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userExplorers.map((explorer) => (
              <Card key={explorer.tokenId}>
                <CardHeader>
                  <CardTitle>{explorer.name}</CardTitle>
                  <CardDescription>{explorer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={explorer.image.replace("ipfs://", IPFS_GATEWAY)}
                      alt={explorer.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized={explorer.image.endsWith('.gif')}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold">Attributes:</h3>
                    <ul className="mt-2 space-y-2">
                      {explorer.attributes.map((attr: any, index: number) => (
                        <li key={index} className="text-sm">
                          <span className="font-medium">{attr.trait_type}:</span>{" "}
                          {attr.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
