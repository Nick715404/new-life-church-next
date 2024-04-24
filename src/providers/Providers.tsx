import { RouterTransitionProvider } from "./RouterTransitionProvider";

type TProps = {
  children: React.ReactNode;
}

const Providers = ({ children }: TProps) => {
  return (
    <RouterTransitionProvider>
      {children}
    </RouterTransitionProvider>
  )
}

export { Providers };