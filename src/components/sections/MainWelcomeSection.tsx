import { Button } from "@/components/ui/button";

export default function MainWelcomeSection() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-52">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/background.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)',
            transform: 'scale(1.1)', // Prevents blur from showing edges
          }}
        />
        
        {/* Overlay to further reduce image intensity */}
        <div 
          className="absolute inset-0 z-0 bg-background/70"
        />

        {/* Gradients - now on top of the background image */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}

        {/* Content - ensure it's above the background */}
        <div className="relative z-20">
          <div className="container py-10 lg:py-16">
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Welcome to</p>
              {/* Title */}
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                Vortex Foundation 🌀
              </h1>
              {/* End Title */}
              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8">
                Your AI-powered NFT companion. Let us guide you through the digital art world with our smart NFT curation and trading assistance.
              </p>
              {/* End Description */}
              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://equalizer.exchange/swap?fromToken=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toToken=0xf316A1cB7376021ad52705c1403DF86C7A7A18d0" target="_blank" rel="noopener noreferrer">
                    Buy $VORTEX
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://paintswap.finance/marketplace/fantom/collections/oracles" target="_blank" rel="noopener noreferrer">
                    Buy Oracles NFT
                  </a>
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
