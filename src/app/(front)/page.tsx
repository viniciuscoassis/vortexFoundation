import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <header className="flex inset-0 min-h-screen bg-secondary flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center text-secondary-foreground">
        Welcome to the Vortex foundation
      </h1>
      <Image
        src="/logo.png"
        alt="Vortex"
        width={400}
        height={400}
        className="rounded-full"
        />
      <Button className="bg-primary text-lg  py-8 px-6 text-primary-foreground">
        Embark on this cosmic journey.
      </Button>
    </header>
    <section className="flex bg-background inset-0 min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4">
      <h1 className="text-4xl font-bold text-center text-secondary-foreground">
        Oracles
      </h1>
      <Button className="bg-primary text-lg py-8 text-primary-foreground">
        Check out the marketplace
      </Button>
      <p className="text-lg text-center text-background-foreground">
        100 AI generated, unique oracle NFTs
      </p>
      </div>

      <Carousel
        opts={{ loop: true, active: true}}
        className=" w-full max-w-xs"
      >
        <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image
                    src={`/oracles/10.png`}
                    alt="Oracle"
                    layout="fill"
                    className="w-full h-full object-cover "                    
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

      {/* infinite loop carousel that shows all oracles cards without stopping */}
    </section>
    </>
  );

}
