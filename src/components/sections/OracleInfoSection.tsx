import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useOraclesStore from "@/store/oracles";

const integrations = [
  [
    {
      id: "integration-1",
      icon: <Image alt="Integration" fill src="/oracles/0.png" />,
    },
    {
      id: "integration-2",
      icon: <Image alt="Integration" fill src="/oracles/1.png" />,
    },
    {
      id: "integration-3",
      icon: <Image alt="Integration" fill src="/oracles/2.png" />,
    },
    {
      id: "integration-4",
      icon: <Image alt="Integration" fill src="/oracles/3.png" />,
    },
    {
      id: "integration-5",
      icon: <Image alt="Integration" fill src="/oracles/4.png" />,
    },
  ],
  [
    {
      id: "integration-6",
      icon: <Image alt="Integration" fill src="/oracles/20.png" />,
    },
    {
      id: "integration-7",
      icon: <Image alt="Integration" fill src="/oracles/21.png" />,
    },
    {
      id: "integration-8",
      icon: <Image alt="Integration" fill src="/oracles/22.png" />,
    },
    {
      id: "integration-9",
      icon: <Image alt="Integration" fill src="/oracles/23.png" />,
    },
    {
      id: "integration-10",
      icon: <Image alt="Integration" fill src="/oracles/24.png" />,
    },
  ],
  [
    {
      id: "integration-11",
      icon: <Image alt="Integration" fill src="/oracles/35.png" />,
    },
    {},
    {
      id: "integration-13",
      icon: <Image alt="Integration" fill src="/oracles/37.png" />,
    },
    {
      id: "integration-14",
      icon: <Image alt="Integration" fill src="/oracles/38.png" />,
    },
    {
      id: "integration-15",
      icon: <Image alt="Integration" fill src="/oracles/39.png" />,
    },
  ],
];

const Hero32 = () => {
  const router = useRouter();
  const totalSupply = useOraclesStore((state) => state.totalSupply);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
        <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block" key="gradient-overlay"></div>
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32" key="content-container">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  Oracles
                </h1>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
                  100 AI generated, unique black hole NFTs
                </h4>
                <p className="text-muted-foreground">
                  {totalSupply}/100 released, stay tuned for more!
                </p>
                <div className="flex gap-4 mt-4">
                  <Button>
                    <Link href="https://paintswap.finance/marketplace/fantom/collections/oracles">
                      Marketplace
                    </Link>
                  </Button>
                  <Button variant={"outline"} onClick={() => router.push("/oracles")}>
                    See More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className=" flex gap-x-24 odd:-translate-x-24">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-24 rounded-xl border border-background bg-background shadow-xl"
                    >
                      <div className="text-7xl flex justify-center items-center size-full bg-muted/20">
                        🌀
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero32;
