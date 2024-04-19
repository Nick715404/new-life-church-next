import "@/styles/globals.css";

import { META_DATA } from "@/seo/constants";
import type { Metadata } from "next";
import { muller } from "@/constants/fonts";

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
        <div className="page">
          {children}
        </div>
      </body>
    </html>
  );
}
