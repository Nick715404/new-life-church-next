import { Confession } from "@/sections/about/foundation/Confession/Confession";
import { Hero } from "@/sections/about/foundation/Hero/Hero";
import { TextContent } from "@/sections/about/foundation/TextContent/TextContent";

export default function FoundationPage() {
  return (
    <div className="foundation children-page">
      <Hero />
      <TextContent />
      <Confession />
    </div>
  );
};