import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import useOraclesStore from "@/store/oracles";
import useVortexStore from "@/store/vortex";
import { useEffect } from "react";

export default function OraclesCarrousel() {
  const { oracles, loadingProgress, setOracles } = useOraclesStore();
  const { totalBurned, setBurns } = useVortexStore();

  useEffect(() => {
    if (totalBurned === 0) setBurns();
    [];
  });

  useEffect(() => {
    if (oracles.length === 0) setOracles();
  }, [setOracles, oracles.length]);

  return (
    <section className="flex inset-0  flex-col items-center justify-between p-11 md:p-24">
      <Carousel
        className="w-full z-0"
        opts={{
          dragFree: true,
          active: true,
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1 ">
          {oracles.map((oracle, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={oracle.image.replace(
                        "ipfs://",
                        "https://ipfs.io/ipfs/"
                      )}
                      alt="Oracle"
                      width={400}
                      height={400}
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
  );
}
