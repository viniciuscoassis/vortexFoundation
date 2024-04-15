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

      <Carousel className="w-full z-0" >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 39 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={`/oracles/${index}.png`}
                    alt="Oracle"
                    width={300}
                    height={300}
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
    <section className="bg-secondary grid grid-cols-1 md:grid-cols-3 gap- inset-0 min-h-screen items-center justify-between p-12 md:p-24">
      <div className="">
        <Image src="/explorer.jpeg" alt="Galaxy Explorer" width={400} height={400} className="mx-auto "/>
      </div>
      <div className="col-span-2">
        <div className="grid gap-8">
        <h1 className="text-4xl font-bold text-center text-secondary-foreground">
        Welcome to Galaxy Explorers. The Cosmos Awaits!
      </h1>
      <div className="bg-card rounded-md text-card-foreground ">
        <div className="grid gap-4 p-6 text-center md:text-start">
          <h3 className="text-2xl font-bold"
          >Coming Soon</h3>
          <p className="text-lg"
          >Join us on a journey across the stars with 1111 explorers, brimming with untold stories and potential. Your adventure into the blockchain cosmos starts here.</p>
        </div>
        </div>
        <div className="grid gap-4 text-center md:text-start">
          <p>As we prepare for the public minting, these explorers await their destiny. Venture into the unknown — a narrative woven into each Explorer, promising a saga like no other.</p>
          <p className="italic">In the infinity of space, each Galaxy Explorer holds a destiny untold. Chart the uncharted.</p>
        </div>
        </div>
      </div>
      <div className="grid gap-4 ">
        <h1 className="text-4xl font-bold text-secondary-foreground"
        >Join the community</h1>
        <p className="text-lg text-background-foreground"
        >For the latest news, updates and access to pre-release content.</p>
        <div className="grid gap-4 grid-cols-3">
        <Button className="bg-primary text-sm py-8 text-primary-foreground">
          Join the Discord
        </Button>
          <Button className="bg-primary text-sm py-8 text-primary-foreground">
            Follow us on Twitter
          </Button>
          <Button className="bg-primary text-sm py-8 text-primary-foreground">
            Join the Telegram
          </Button>
          </div>
      </div>
    </section>
    </>
  );

}
