import { Hero, Messages } from "@/sections/about/valuation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ценности - Церковь Слово Жизни г. Челябинск'
}

export default function ValuationPage() {
  return (
    <div className="valuation children-page">
      <Hero />
      <Messages />
    </div>
  );
};