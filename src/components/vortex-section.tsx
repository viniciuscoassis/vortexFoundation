import Image from "next/image";

export default function VortexSection() {
  return (
    <section className="grid grid-cols-2 bg-secondary inset-0 min-h-screen p-11 md:p-32">
      <div
        className=" p-11 mx-auto
      "
      >
        <h1 className="text-4xl font-bold text-center text-secondary-foreground">
          Vortex
        </h1>
        <h2 className="text-2xl text-center text-secondary-foreground">$TEX</h2>
        <Image
          src="/logo.png"
          alt="Vortex"
          width={800}
          height={800}
          className="rounded-full"
        />
      </div>
      <div className=" p-11 mx-auto text-center flex flex-col gap-4 justify-center text-2xl uppercase">
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
