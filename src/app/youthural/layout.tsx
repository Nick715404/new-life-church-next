import { jetbrainsMono, lozungCaps, ceremoniousOne } from "@/constants/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ЮС Урал — Forever Youth 2026",
  description: "ЮС — это три дня глубокого поклонения среди тысяч христиан. 6–8 августа 2026.",
};

interface IProps {
  children: Readonly<React.ReactNode>;
}

export default function YouthUralLayout({ children }: IProps) {
  return (
    <div
      className={`${jetbrainsMono.variable} ${lozungCaps.variable} ${ceremoniousOne.variable}`}
      style={{ background: "#0A0A0A" }}
    >
      {children}
    </div>
  );
}
