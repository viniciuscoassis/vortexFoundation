"use client";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { AirplayIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const races = [
  {
    id: "tex-race-1",
    label: "Tex Race: first edition",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
    details:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    backgroundImage: "",
    image: "",
    projectId: 1,
    startDate: "2024-09-28",
    endDate: "2024-10-10",
    creator: [
      {
        name: "bumble",
        socials: [
          {
            name: "twitter",
            url: "https://twitter.com/bumblebeed11",
          },
        ],
      },
      {
        name: "tuco",
        socials: [
          {
            name: "twitter",
            url: "https://twitter.com/oracleFantom",
          },
        ],
      },
    ],
    projectSocials: [
      {
        name: "twitter",
        url: "https://twitter.com/oracleFantom",
      },
      {
        name: "telegram",
        url: "https://t.me/oracleFantom",
      },
    ],
  },
];

const socialsIcon: Record<string, any> = {
  twitter: {
    small: <TwitterLogoIcon width={10} height={10} />,
    medium: <TwitterLogoIcon width={30} height={30} />,
    large: <TwitterLogoIcon width={100} height={100} />,
  },
  telegram: {
    small: <PaperPlaneIcon width={10} height={10} />,
    medium: <PaperPlaneIcon width={30} height={30} />,
    large: <PaperPlaneIcon width={100} height={100} />,
  },
};

type Leaderboard = {
  id: number;
  address: string;
  amount: number;
  rank: string;
};
function getData(): Leaderboard[] {
  return [
    { id: 1, address: "0x1234...abcd", amount: 500, rank: "Oracle Master" },
    { id: 2, address: "0x5678...efgh", amount: 300, rank: "Oracle Apprentice" },
    { id: 3, address: "0x9abc...ijkl", amount: 200, rank: "Oracle Apprentice" },
  ];
}

const RacePage = ({ params }: { params: { raceId: string } }) => {
  const raceId = params.raceId;

  const data = getData();

  const race = races.find((r) => r.id === raceId);

  if (!race) {
    return <div className="text-white">Race not found</div>;
  }

  const now = new Date();
  const isRaceLive =
    new Date(race.startDate) <= now && now <= new Date(race.endDate);

  return (
    <div className="bg-muted/40 w-full">
      <div className="min-h-screen container  m-auto">
        <header className="py-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {race.label}
          </h1>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
            by: <a href="https://twitter.com/oracleFantom"></a>
            @oracleFantom
          </h4>
          <div className="mt-4 flex w-full gap-4">
            {race.projectSocials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-blue-300 hover:text-blue-200"
              >
                {socialsIcon[social.name].medium}
              </a>
            ))}
          </div>
          <p>{race.description}</p>
          <div className="mt-4 flex w-3/4 justify-between">
            <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">StartDate</span>
                  <span className=" font-bold">2024-10-10</span>
                  <span
                className={`inline-block ml-5 font-bold rounded-full px-2 py-1 text-xs ${
                  isRaceLive ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {isRaceLive ? "Live" : "Not Live"}
              </span>
                </Button>
            <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">EndDate</span>
                  <span className=" font-bold">2024-10-10</span>
                </Button>
            <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">Entrants</span>
                  <span className=" font-bold">116</span>
                </Button>
            <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">Transactions</span>
                  <span className=" font-bold">2679</span>
                </Button>
            <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">Total burned</span>
                  <span className=" font-bold">55.64</span>
                </Button>
          </div>
        </header>
        <main className="container mx-auto px-4">
          {/* Accordion Section */}
          <section className="mb-10">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Details</AccordionTrigger>
                <AccordionContent>{race.details}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Reports</AccordionTrigger>
                <AccordionContent>
                  TODO - Graphs about total burned and total entrants over the
                  time
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          {/* Wallet Section */}
          <section className="mb-10">
            <div className="mb-4">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                My Wallet
              </h2>
              <div className="flex gap-4 w-1/12 my-5">
                <Button variant={"secondary"} className=" h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">
                    TEX Available
                  </span>
                  <span className=" font-bold">15</span>
                </Button>
                <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">TEX Burned</span>
                  <span className=" font-bold">2.35 $TEX</span>
                </Button>
                <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">Position</span>
                  <span className=" font-bold">5</span>
                </Button>
                <Button variant={"secondary"} className="h-8 cursor-default">
                  <span className="text-muted-foreground mr-5">Rank</span>
                  <span className=" font-bold">Oracle Apprendice</span>
                </Button>
              </div>
              <div className="mx-auto">
                <Card className="w-[350px] mx-auto">
                  <CardHeader>
                    <CardTitle>Climb the leaderboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="amount">Amount</Label>
                          <Input id="amount" type="number" placeholder="Amount in $TEX" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex items-center">
                    <Button variant="destructive" className="w-full">BURN</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section className="mb-10">
            <div className=" mx-auto py-10">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Leaderboard
              </h2>
              <div className="mt-10">
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RacePage;
