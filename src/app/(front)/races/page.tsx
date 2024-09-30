"use client";
import React from "react";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold">Tex Races</h1>
      </header>
      <main className="container mx-auto px-4">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">Upcoming Races</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {races.map((race: any) => (
              <div
                key={race.id}
                onClick={() => handleRaceClick(race.id)}
                className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition"
              >
                <h3 className="text-xl font-bold mb-2">{race.label}</h3>
                <p>{race.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}