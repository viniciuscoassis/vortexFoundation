// Layout.tsx
"use client"

import { NavMenu } from "@/components/mainLayout/NavMenu"
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
import { Search, CircleUser, Menu } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen z-10">
      <header className="sticky top-0 flex h-32 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
        <nav className="hidden md:flex flex-col md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Image src={Logo} alt="Logo" width={180} height={180} />
          <NavMenu className="flex gap-6 font-medium" linkClassName="text-muted-foreground transition-colors hover:text-foreground" />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex items-center justify-center">
              <Image height={200} width={200} src={Logo} alt="Logo" />
            </div>
            <NavMenu className="grid gap-6 text-lg font-medium" linkClassName="text-muted-foreground hover:text-foreground" />
          </SheetContent>
        </Sheet>

        <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-4 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search oracles..."
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

      <main>{children}</main>

      <footer className="p-4 bg-background text-background-foreground text-center">
        &copy; {new Date().getFullYear()} Vortex Foundation
      </footer>
    </div>
  )
}