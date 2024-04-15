import JoinCommunity from "@/components/join-the-community";
import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <section className="bg-secondary grid grid-cols-1 lg:grid-cols-3 gap-12 inset-0 min-h-screen items-center justify-between py-12 px-3 lg:p-24">
        <div className="col-span-1 ">
          <Image src="/explorer.jpeg" alt="Galaxy Explorer" width={600} height={600} className="mx-auto lg:mx-0"/>
        </div>
        <div className="col-span-2">
          <div className="grid gap-24 md:32 lg:gap-8">
          <h1 className="text-4xl font-bold text-center lg:text-start text-secondary-foreground">
          Welcome to Galaxy Explorers. The Cosmos Awaits!
        </h1>
        <div className="bg-card rounded-md text-card-foreground ">
          <div className="grid gap-2 p-6 text-center lg:text-start">
            <h3 className="text-2xl font-bold"
            >Coming Soon - (Q3)</h3>
            <p className="text-lg"
            >Join us on a journey across the stars with 1111 explorers, brimming with untold stories and potential. Your adventure into the blockchain cosmos starts here.</p>
          </div>
          </div>
          <div className="grid gap-4 text-center lg:text-start">
            <p>As we prepare for the public minting, these explorers await their destiny. Venture into the unknown — a narrative woven into each Explorer, promising a saga like no other.</p>
            <p className="italic">In the infinity of space, each Galaxy Explorer holds a destiny untold. Chart the uncharted.</p>
          </div>
          </div>
        </div>
        <JoinCommunity/>
      </section>
    )
}