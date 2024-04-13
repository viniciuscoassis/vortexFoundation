"use client"
import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import { ModeToggle } from "@/components/mode-toggle"

export default function Layout({ children } : {children: React.ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image src={Logo} alt="Image" width={300} height={300} className="rounded-md object-cover" />
          </Link>
         Vortex Foundation
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Oracles
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Vortex
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Roadmap
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Market
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                {/* stay in the middle */}
                <div className="flex items-center justify-center">
                    <Image height={100} width={200} src={Logo} alt="Logo"/>
                </div>
                <span className="sr-only">Vortex Foundation</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Oracles
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Vortex
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Roadmap
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Market
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-4 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
            &copy; {new Date().getFullYear()} Vortex foundation
        </footer>
        </div>
    );
    }