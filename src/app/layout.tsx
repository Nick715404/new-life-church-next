import "@/styles/globals.scss";
import "@/styles/typography.scss";
import "@/styles/swiper.scss";

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
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}