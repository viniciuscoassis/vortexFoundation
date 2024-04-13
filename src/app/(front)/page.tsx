import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Vortex foundation
      </h1>
      <Image
        src="/logo.png"
        alt="Vortex"
        width={400}
        height={400}
        className="rounded-full"
      />
      {/* <ModeToggle /> */}
      <div className="bg-primary p-4 rounded-lg ">
      <p className="text-lg text-center text-primary-foreground">
        Embark on this cosmic journey.
      </p>
      </div>
    </main>
  );
}
