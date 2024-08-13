'use client';

import { defaultOptions } from "./defaultOptions";

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient(defaultOptions);

interface IProps {
  children: React.ReactNode;
}

const ReactQueryProvider = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export { ReactQueryProvider };