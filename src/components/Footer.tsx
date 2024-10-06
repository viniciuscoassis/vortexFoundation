import Link from 'next/link';
import { FaDiscord, FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';
import { Separator } from './ui/separator';

const projectInfo = {
  name: "Vortex Foundation",
  description: "Exploring Web3 possibilities and enriching the Fantom ecosystem since 2021.",
  socialLinks: [
    { name: "Discord", url: "https://discord.gg/Frf25j3w", icon: FaDiscord },
    { name: "Twitter", url: "https://twitter.com/OracleFantom", icon: FaTwitter },
    { name: "Telegram", url: "https://t.me/oraclefantom", icon: FaTelegram },
    { name: "GitHub", url: "https://github.com/vortexfoundation", icon: FaGithub },
  ],
  sections: [
    {
      title: "Products",
      links: [
        { name: "Oracles", href: "/oracles" },
        { name: "Explorers", href: "/explorers" },
        { name: "$TEX Token", href: "https://equalizer.exchange/swap?fromToken=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toToken=0x16e17Bf68F99DA63326677431efEB1F6FfD46eDe" },
        { name: "Burn Races", href: "/races" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Docs", href: "/docs" },
        { name: "Whitepaper", href: "/whitepaper" },
        { name: "Roadmap", href: "/roadmap" },
        { name: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Forum", href: "/forum" },
        { name: "Events", href: "/events" },
        { name: "Partnerships", href: "/partnerships" },
      ],
    },
  ],
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">{projectInfo.name}</h2>
            <p className="mb-4 text-muted-foreground">{projectInfo.description}</p>
            <div className="flex space-x-4">
              {projectInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          {projectInfo.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {projectInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {projectInfo.legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
