import "@/styles/globals.scss";
import "@/styles/typography.scss";
import "@/styles/swiper.scss";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

import { montserrat } from "@/constants/fonts";
import { META_DATA } from "@/seo/constants";
import { StoreProvider } from "@/store";

export const metadata = META_DATA;

interface IProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: IProps) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className={montserrat.className}>
          <div className="page">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}