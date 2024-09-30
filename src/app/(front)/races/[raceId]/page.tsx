"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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

const mockLeaderboard = [
    { place: 1, address: "0x1234...abcd", amount: 500 },
    { place: 2, address: "0x5678...efgh", amount: 300 },
    { place: 3, address: "0x9abc...ijkl", amount: 200 },
];

const RacePage = ({params} : { params: { raceId: string}}) => {
  const router = useRouter();
  const raceId = params.raceId;
  
  const race = races.find(r => r.id === raceId);

  if (!race) {
    return <div className="text-white">Race not found</div>;
  }

  const now = new Date();
  const isRaceLive = new Date(race.startDate) <= now && now <= new Date(race.endDate);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold">{race.label}</h1>
      </header>
      <main className="container mx-auto px-4">
        <section className="mb-10">
          <p>{race.details}</p>
          <div className="mb-4">
            <p>Total Burnt: 1000 TEX</p>
            <p>Total Entrants: 150</p>
            <p>My Burn: 200 TEX</p>
            <Button className="mt-4 w-full">BURN</Button>
            <div className="mt-4">
              <p>
                Status:{" "}
                <span className={`inline-block rounded-full px-2 py-1 text-xs ${isRaceLive ? "bg-green-500" : "bg-red-500"}`}>
                  {isRaceLive ? "Live" : "Not Live"}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Leaderboard</h3>
            <table className="min-w-full divide-y divide-gray-700 border border-gray-700">
              <thead>
                <tr>
                  <th className="py-2 border-r border-gray-700">Place</th>
                  <th className="py-2 border-r border-gray-700">Address</th>
                  <th className="py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {mockLeaderboard.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-700">
                    <td className="py-2 border-r border-gray-700">{item.place}</td>
                    <td className="py-2 border-r border-gray-700">{item.address}</td>
                    <td className="py-2">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RacePage;