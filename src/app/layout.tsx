import "@/styles/globals.scss";
import "@/styles/typography.scss";
import "@/styles/swiper.scss";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import { montserrat } from "@/constants/fonts";
import { META_DATA } from "@/seo/constants";

export const metadata = META_DATA;

interface IProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}