import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

interface IProps {
  children: Readonly<React.ReactNode>;
}

export default function MainLayout({ children }: IProps) {
  return (
    <div className="page">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
