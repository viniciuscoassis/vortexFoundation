import JoinCommunity from "@/components/join-the-community";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import VortexSection from "@/components/vortex-section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <header className="flex inset-0 min-h-screen bg-secondary flex-col items-center justify-between p-24 bg-cover bg-center"
  style={{ backgroundImage: `url('/background.png')`}}
  >
  <h1 className="text-4xl font-bold text-center text-white">
    Welcome to the Vortex foundation
  </h1>
  <Image
    src="/logo.png"
    alt="Vortex"
    width={400}
    height={400}
    className="rounded-full"
  />
  <Button className="bg-card text-lg py-8 px-6 text-card-foreground">
    <Link href="/roadmap"> Embark on this cosmic journey.</Link>
  </Button>
</header>
    <section className="flex bg-background inset-0 min-h-screen flex-col items-center justify-between p-11  md:p-24">
      <div className="grid gap-4">
      <h1 className="text-4xl font-bold text-center text-secondary-foreground">
        Oracles
      </h1>
      <Button className="bg-primary text-lg py-8 text-primary-foreground">
        <Link href="https://paintswap.finance/marketplace/fantom/collections/oracles">
          Check out the marketplace
        </Link>
      </Button>
      <p className="text-lg text-center text-background-foreground">
        100 AI generated, unique oracle NFTs
      </p>
      </div>

      <Carousel className="w-full z-0"  opts={{
    dragFree: true,
    active: true,
    loop: true,
  }} >
      <CarouselContent className="-ml-1 ">
        {Array.from({ length: 44 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={`/oracles/${index}.png`}
                    alt="Oracle"
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
    <VortexSection/>
    <section className="flex bg-background inset-0 flex-col items-center justify-between p-11 md:p-24">
    <JoinCommunity/>
    </section>
    </>
  );

}
