"use client";
import JoinCommunity from "@/components/join-the-community";
import Roadmap from "@/components/roadmap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import VortexSection from "@/components/vortex-section";
import useOraclesStore from "@/store/oracles";
import useVortexStore from "@/store/vortex";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect } from "react";

export default function Home() {
  const { oracles, loadingProgress, setOracles } = useOraclesStore();
  const { totalBurned, setBurns } = useVortexStore();

  useEffect(() => {
    if (totalBurned === 0) setBurns();
    [];
  });

  useEffect(() => {
    if (oracles.length === 0) setOracles();
  }, [setOracles, oracles.length]);

  return (
    <>
      <header
        className="flex inset-0 min-h-screen flex-col items-center justify-between p-36 bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}
      >
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to the Vortex foundation
        </h1>
        <Image
          src="/logo.png"
          alt="Vortex"
          width={400}
          height={400}
          className="rounded-full"
        />
        <Button className="bg-card text-lg py-8 px-6 text-card-foreground">
          <Link href="/roadmap"> Embark on this cosmic journey.</Link>
        </Button>
      </header>
      <section className="flex bg-background inset-0 min-h-screen flex-col items-center justify-between p-11  md:p-24">
        <div className="grid gap-4">
          <h1 className="text-4xl font-bold text-center text-secondary-foreground">
            Oracles
          </h1>
          <Button className="bg-primary text-lg py-8 text-primary-foreground">
            <Link href="https://paintswap.finance/marketplace/fantom/collections/oracles">
              Check out the marketplace
            </Link>
          </Button>
          <p className="text-lg text-center text-background-foreground">
            100 AI generated, unique oracle NFTs
          </p>
        </div>

        <Carousel
          className="w-full z-0"
          opts={{
            dragFree: true,
            active: true,
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 ">
            {oracles.map((oracle, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={oracle.image.replace(
                          "ipfs://",
                          "https://ipfs.io/ipfs/"
                        )}
                        alt="Oracle"
                        width={700}
                        height={700}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <VortexSection />

      <Roadmap />
      {/* about us section, talking a little about the dev bumble and the project manager tuco */}
      <section className="flex bg-secondary inset-0 flex-col gap-14 items-center justify-between p-11 md:p-24">
        <div className="grid gap-4">
          <h1 className="text-4xl font-bold text-center text-secondary-foreground">
            About us
          </h1>
          <p className="text-lg text-center text-background-foreground">
            We are Bumble and Tuco, the two developers who have been working on
            this project for the past 6 months. Fantom has been our home since
            2021, and we have witnessed the transformative power of both the
            community and the technology in enriching lives and bringing people
            together. Now, it is our opportunity to share our vision and ideas
            with the Fantom blockchain, contributing to the creation of a
            collaborative and innovative space where ideas propel the
            advancement of the ecosystem.
          </p>
          <p className="text-lg text-center text-background-foreground">
            We are here to explore the boundless possibilities of Web3, crafting
            DApps, NFT collections, and tokens inspired by our passion for the
            $FTM community.
          </p>
        </div>
        {/* section on the left with an icon from shadcn and some text about the role of bumble */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col gap-4 items-center p-8 ">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src="https://raw.githubusercontent.com/viniciuscoassis/vortexFoundation/main/public/bumblepfp.png"
                alt="@shadcn"
              />
              <AvatarFallback>Bumble</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-secondary-foreground">
              Bumble
            </h2>
            <p className="text-lg text-center text-background-foreground">
              Bumble is a developer with a passion for AI and blockchain
              technology. He is the tech-savvy mind behing the project, bringing
              his expertise as a Full Stack Dev to fuel the development of the
              Vortex Foundation.
            </p>
          </div>
          {/* section on the right with an icon from shadcn and some text about the role of tuco */}

          <div className="flex flex-col gap-4 items-center  p-8">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src="https://raw.githubusercontent.com/viniciuscoassis/vortexFoundation/main/public/tucopfp.png"
                alt="@shadcn"
              />
              <AvatarFallback>Tuco</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-secondary-foreground">
              Tuco
            </h2>
            <p className="text-lg text-center text-background-foreground">
              Tuco is our project manager, aiming to foster connections and
              cultivate a vibrant community around our shared vision. Through
              his communication, he articulates the dream behind the Oracles and
              the Vortex Foundation, aligning it with the aspirations of the
              Fantom community.
            </p>
          </div>
        </div>
      </section>
      <section className="flex bg-background inset-0 flex-col items-center justify-between p-11 md:p-24">
        <JoinCommunity />
      </section>
    </>
  );
}
