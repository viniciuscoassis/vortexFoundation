import { DiscordLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function JoinCommunity() {
    return (
    <div className="grid gap-4 mt-20 lg:mt-0 mx-auto ">
        <h1 className="text-4xl text-center md:text-start font-bold text-secondary-foreground"
        >Join the community</h1>
        <p className="text-lg text-center md:text-start text-background-foreground"
        >For the latest news, updates and access to pre-release content.</p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Button variant="outline" size="icon" className="bg-primary text-sm py-8 text-primary-foreground w-full">
        <DiscordLogoIcon height={35} width={35}/>
        </Button>
        <Button variant="outline" size="icon" className="bg-primary text-sm py-8 text-primary-foreground w-full">
        <TwitterLogoIcon height={35} width={35}/>
        </Button>
        <Button variant="outline" size="icon" className="bg-primary text-sm py-8 text-primary-foreground w-full">
        <PaperPlaneIcon height={35} width={35}/>
        </Button>
        </div>
    </div>
    )
}