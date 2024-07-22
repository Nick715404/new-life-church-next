import { foundationArrayTabs } from '@/constants/arrays';
import styles from './page.module.scss';
import { Hero } from "@/sections/about/foundation/Hero/Hero";
import { Metadata } from "next";
import Image from 'next/image';
import { halvar } from '@/constants/fonts';
import { FoundationTabs } from '@/components/FoundationTabs/FoundationTabs';

export const metadata: Metadata = {
  title: 'Основание - Церковь Слово Жизни г. Челябинск',
  alternates: {
    canonical: 'https://wolrus-chel.ru/about/foundation'
  }
}

export default function FoundationPage() {
  return (
    <main className="foundation children-page">
      <Hero />
      <FoundationTabs />
    </main>
  );
};