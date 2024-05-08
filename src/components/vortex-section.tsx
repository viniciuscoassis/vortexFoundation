import { Copy } from "lucide-react";
import Image from "next/image";
import { useToast } from "./ui/use-toast";

export default function VortexSection() {
  const {toast} = useToast();
  
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
                Ape
              </a>
            </button>
        </div>
      </div>
    </section>
  );
}
