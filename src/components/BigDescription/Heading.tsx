import { halvar } from "@/constants/fonts";

type HeadingProps = {
  level: number,
  children: React.ReactNode,
};

export const Heading = ({ level, children }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`title-${level} description-title ${halvar.className}`}>{children}</Tag>;
};
