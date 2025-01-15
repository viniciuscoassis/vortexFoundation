import { Copy, Zap, Flame, Hash, TrendingDown, TrendingUp, ArrowRight, Brain, Bot } from "lucide-react";
import Image from "next/image";
import { useToast } from "./ui/use-toast";

export default function VortexSection() {
  const { toast } = useToast();
  
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <Image src="/goldenOracle.jpeg" alt="Vortex" width={500} height={500} className="rounded-xl mx-auto lg:mx-0 w-full max-w-md lg:max-w-none" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Tokenomics
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground">
              Discover the innovative tokenomics of $VORTEX, your AI-powered NFT companion.
            </p>
            <div className="space-y-4 sm:space-y-6 mb-10">
              <TokenomicsItem icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />} text="Fair launched" />
              <TokenomicsItem icon={<Flame className="w-5 h-5 sm:w-6 sm:h-6" />} text="LP Equalizer/WAGMI(soon)" />
              <TokenomicsItem icon={<Hash className="w-5 h-5 sm:w-6 sm:h-6" />} text="10M supply" />
              <TokenomicsItem icon={<Bot className="w-5 h-5 sm:w-6 sm:h-6" />} text="AI NFT Trading Assistant" />
              <TokenomicsItem icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />} text="Smart Portfolio Management" />
            </div>
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Contract Address</h3>
              <div className="flex items-center space-x-2 bg-muted/50 p-3 sm:p-4 rounded-lg shadow-sm">
                <code className="text-xs sm:text-sm flex-grow break-all">0xf316A1cB7376021ad52705c1403DF86C7A7A18d0</code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("0xf316A1cB7376021ad52705c1403DF86C7A7A18d0");
                    toast({
                      title: "Contract address copied!",
                      description: "Use it to buy $VORTEX on equalizer",
                    })
                  }}
                  className="p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
                >
                  <Copy size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            <a
              href="https://equalizer.exchange/swap?fromToken=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toToken=0xf316A1cB7376021ad52705c1403DF86C7A7A18d0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Buy on Equalizer
              <ArrowRight className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenomicsItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
        {icon}
      </div>
      <p className="text-base sm:text-lg font-medium">{text}</p>
    </div>
  );
}