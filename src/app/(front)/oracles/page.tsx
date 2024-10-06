"use client";
import { useEffect } from "react";
import Image from "next/image";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Page() {
  const { oracles, loadingProgress, setOracles } = useOraclesStore();

  useEffect(() => {
    if (oracles.length === 0) setOracles();
  }, [setOracles, oracles.length]);

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
