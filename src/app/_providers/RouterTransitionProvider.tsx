'use client';

import { useRouter } from "next/router";

interface IProps {
  children: React.ReactNode;
}

function RouterTransitionProvider({ children }: IProps) {
  const router = useRouter();

  return (
    <div key={router.pathname}>
      {children}
    </div>
  )
}

export { RouterTransitionProvider };