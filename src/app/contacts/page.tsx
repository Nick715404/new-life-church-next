import { Hero, Questions } from "@/sections/contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Контакты - Церковь Слово Жизни г. Челябинск'
}

export default function ContactsPage() {
  return (
    <main className='contacts children-page'>
      <Hero />
      <Questions />
    </main>
  );
};