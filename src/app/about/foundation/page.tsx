import { Hero } from "@/sections/about/foundation/Hero/Hero";
import { Confession } from "@/sections/about/foundation/Confession/Confession";
import { TextContent } from "@/sections/about/foundation/TextContent/TextContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Основание - Церковь Слово Жизни г. Челябинск'
}

export default function FoundationPage() {
  return (
    <main className="foundation children-page">
      <Hero />
      <TextContent />
      <Confession />
    </main>
  );
};