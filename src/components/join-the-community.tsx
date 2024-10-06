import { DiscordLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function JoinCommunity() {
    return (
        <div className="mx-auto px-4 py-40 lg:py-40">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-4">
                    <span className="block text-2xl md:text-3xl font-semibold text-primary mb-2">
                        Connect with Our
                    </span>
                    <span className="block text-4xl md:text-5xl font-bold text-secondary-foreground">
                        Thriving Community
                    </span>
                </h2>
                <p className="text-lg text-background-foreground mb-8">
                    For the latest news, updates and access to pre-release content.
                </p>
                <div className="grid grid-cols-3">
                    {[
                        { href: "https://discord.gg/Frf25j3w", icon: DiscordLogoIcon, label: "Discord" },
                        { href: "https://twitter.com/OracleFantom", icon: TwitterLogoIcon, label: "Twitter" },
                        { href: "https://t.me/oraclefantom", icon: PaperPlaneIcon, label: "Telegram" },
                    ].map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}>
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-36 h-12 rounded-md bg-gradient-to-br from-primary/80 to-primary hover:from-primary hover:to-primary/80 transition-all duration-300"
                            >
                                <Icon className="h-6 w-6 text-primary-foreground" />
                                <span className="sr-only">{label}</span>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}