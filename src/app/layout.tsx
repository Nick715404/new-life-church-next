import "@/styles/globals.css";
import "@/styles/swiper.scss";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import type { Metadata } from "next";

import { muller } from "@/constants/fonts";
import { META_DATA } from "@/seo/constants";

export const metadata: Metadata = {
  title: META_DATA.TITLE,
  description: META_DATA.DESCRIPTION,
};

interface IProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="ru">
      <body className={muller.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}