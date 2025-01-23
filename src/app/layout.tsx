import { ContextProvider } from "@/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
