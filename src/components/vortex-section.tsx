import { BookOpenIcon, ChevronRightIcon, Copy, MessagesSquareIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import { useToast } from "./ui/use-toast";

export default function VortexSection() {
  const { toast } = useToast();
  
  return (
    <>
    {/* Icon Blocks */}
    <div className="container py-24 lg:py-32">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 bg-red-50">
        <div className="lg:w-3/4 bg-red-300" >
          <Image src="/logo.png" alt="Vortex" width={500} height={500} />
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Tokenomics
          </h2>
          <p className="mt-3 text-muted-foreground">
            We help businesses bring ideas to life in the digital world, by
            designing and implementing the technology tools that they need to
            win.
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
              href="#"
            >
              Contact sales to learn more
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
            </a>
          </p>
        </div>
        {/* End Col */}
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
              <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Industry-leading documentation
              </h3>
              <p className="mt-1 text-muted-foreground">
                Our documentation and extensive Client libraries contain
                everything a business needs to build a custom integration in a
                fraction of the time.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
              <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Developer community support
              </h3>
              <p className="mt-1 text-muted-foreground">
                We actively contribute to open-source projects—giving back to
                the community through development, patches, and sponsorships.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
              <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Simple and affordable
              </h3>
              <p className="mt-1 text-muted-foreground">
                From boarding passes to movie tickets, there&apos;s pretty
                much nothing you can&apos;t do.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
    {/* End Icon Blocks */}
    <section className="flex flex-col lg:grid lg:grid-cols-2 bg-secondary inset-0 min-h-screen p-11 mx-a md:p-6 lg:p-32">
      <div className="order-1 lg:order-1">
        <h1 className="text-4xl font-bold text-center text-secondary-foreground">
          Vortex
        </h1>
        <h2 className="text-2xl text-center text-secondary-foreground">$TEX</h2>
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Vortex"
            width={800}
            height={800}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="max-w-full break-all order-2 lg:order-2 p-0 mx-auto text-center flex flex-col gap-4 lg:justify-normal xl:justify-center lg:text-sm  text-2xl xl:text-2xl">
        <h1 className="text-4xl font-bold text-center text-secondary-foreground">
          Tokenomics
        </h1>
        <div className="flex flex-col gap-4 al">
          <p>First Vortex Foundation coin.</p>
          <p>Fair launched.</p>
          <p>LP burned.</p>
          <p>777 supply.</p>
          <p> Constantly burning until it reaches 1.</p>
          <p className="pb-10">Low cap. High potential.</p>
          <div className="flex gap-4 justify-center items-center border-t-2 pt-10">
          <p >0x16e17Bf68F99DA63326677431efEB1F6FfD46eDe</p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "0x16e17Bf68F99DA63326677431efEB1F6FfD46eDe"
              );
              toast({
                title: "Contract address copied to clipboard!",
                description: "Use it to buy $TEX on equalizer",
              })
            }
          }
            className=""
          >
            <Copy size={24} className="text-primary-foreground hover:text-primary-foreground hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out" />
            </button>
            </div>
            {/* next line redesign the button above with professional ui */}
            <button
              className="bg-primary text-primary-foreground p-2 rounded-md hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <a
                href="https://equalizer.exchange/swap"
                target="_blank"
                rel="noreferrer"
              >
                Buy on equalizer
              </a>
            </button>
        </div>
      </div>
    </section>
  </>
    
  );
}
