import { ReactQueryProvider } from "./ReactQueryProvider/ReactQueryProvider";

type TProps = {
  children: React.ReactNode;
}

const Providers = ({ children }: TProps) => {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}

export { Providers };