"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  const projects = [
    {
      id: 1,
      name: "Oracles",
      description: "nft mixed with token",
      twitter: "https://twitter.com/oracleFantom",
      telegram: "https://t.me/oracleFantom",
    },
  ];

  const races = [
    {
      id: "tex-race-1",
      label: "Tex Race: first edition",
      description: "First tex race",
      details: "There's something sus on the farm…",
      backgroundImage: "",
      image: "",
      projectId: 1,
      startDate: "2024-09-28",
      endDate: "2024-10-10",
    },
  ];

  const router = useRouter();

  const handleRaceClick = (raceId: number) => {
    router.push(`/races/${raceId}`);
  };

  return (
    <div className="min-h-screen w-3/4 m-auto">
      <header className="py-10 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Tex Burn Races 🔥: Do. Or Do Not. There is no try.
        </h1>
      </header>
      <main className="container mx-auto px-4">
        <section className="mb-10">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Upcoming Races
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {races.map((race: any) => (
              <Card
                key={race.id}
                onClick={() => handleRaceClick(race.id)}
                className="w-[350px] cursor-pointer hover:bg-muted transition"
              >
                <CardHeader className="relative h-80 mb-10">
                  <Image
                    fill
                    src="/background.jpeg"
                    alt="Logo"
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent className="mx-auto">
                  <CardTitle>{race.label}</CardTitle>
                  <CardDescription>{race.description}</CardDescription>
                  <CardDescription>$TEX</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Ended
          </h2>
        </section>
      </main>
    </div>
  );
}