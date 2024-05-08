import JoinCommunity from "@/components/join-the-community";
import Roadmap from "@/components/roadmap";

export default function RoadmapPage(){
    return (
        <>
        <Roadmap/>
        <section className="bg-secondary grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-12 inset-0 items-center justify-between py-12 px-3 lg:p-24">
        <JoinCommunity  />
        </section>
        </>
    )
}