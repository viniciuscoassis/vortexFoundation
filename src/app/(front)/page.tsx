"use client";
import FeaturesSection from "@/components/features";
import JoinCommunity from "@/components/join-the-community";
import Roadmap from "@/components/roadmap";
import AboutUsSection from "@/components/sections/AboutUsSection";
import MainWelcomeSection from "@/components/sections/MainWelcomeSection";
import OracleInfoSection from "@/components/sections/OracleInfoSection";
import OraclesCarrousel from "@/components/sections/OraclesCarrousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VortexSection from "@/components/vortex-section";
import useOraclesStore from "@/store/oracles";
import useVortexStore from "@/store/vortex";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <MainWelcomeSection />
      <OracleInfoSection />
      <OraclesCarrousel />
      <VortexSection />
      <FeaturesSection />
      <Roadmap />
      <AboutUsSection />
      <JoinCommunity />
    </>
  );
}
