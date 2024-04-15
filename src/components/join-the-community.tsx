import { DiscordLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function JoinCommunity() {
    return (
    <div className="grid gap-4 mt-20 lg:mt-0 mx-auto ">
        <h1 className="text-4xl text-center md:text-start font-bold text-secondary-foreground"
        >Join the community</h1>
        <p className="text-lg text-center md:text-start text-background-foreground"
        >For the latest news, updates and access to pre-release content.</p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Link href="https://discord.gg/Frf25j3w">
        <Button variant="outline" size="icon" className="bg-primary text-sm py-8 text-primary-foreground w-full">
            <DiscordLogoIcon height={35} width={35}/>
        </Button>
        </Link>
        <Link href="https://twitter.com/OracleFantom">
        <Button variant="outline" size="icon" className="bg-primary text-sm py-8 text-primary-foreground w-full">
        <TwitterLogoIcon height={35} width={35}/>
        </Button>
        </Link>
        <Link href="https://t.me/oraclefantom">
        <Button variant="outline" size="icon" className="bg-primary text-sm py-8 text-primary-foreground w-full">
        <PaperPlaneIcon height={35} width={35}/>
        </Button>
        </Link>
        </div>
    </div>
    )
}