import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

// adicionar icone do documento
export const metadata: Metadata = {
  title: "Vortex foundation",
  description: "Embark on this cosmic journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/logo.png"
        type="image/png"
        sizes="32x32"
      />
      </head>
      <body className={inter.className}>
        {/* <ModeToggle /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            {children}
         
          </ThemeProvider>
          <Toaster />
      </body>
    </html>
  );
}
