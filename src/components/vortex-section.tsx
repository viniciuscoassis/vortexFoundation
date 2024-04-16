import Image from "next/image";

export default function VortexSection() {
  return (
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
      <div className="max-w-full break-all order-2 lg:order-2 p-0 mx-auto text-center flex flex-col gap-4 lg:justify-normal xl:justify-center lg:text-sm  text-2xl xl:text-2xl uppercase">
        <h1 className="text-4xl font-bold text-center text-secondary-foreground">
          Tokenomics
        </h1>
        <p>777 $TEX</p>
        <p>No Allocations</p>
        <p>No Presale</p>
        <p>No Taxes</p>
        <p>No BS</p>
        <p>0x16e17Bf68F99DA63326677431efEB1F6FfD46eDe</p>
      </div>
    </section>
  );
}
