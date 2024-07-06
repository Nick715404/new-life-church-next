import { Hero, Questions } from "@/sections/contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Контакты'
}

export default function ContactsPage() {
  return (
    <main className='contacts children-page'>
      <Hero />
      <Questions />
    </main>
  );
};