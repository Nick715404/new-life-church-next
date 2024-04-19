import { QueryClientConfig } from "react-query";

export const defaultOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 6 * 1000,
      refetchInterval: 6 * 1000,
    }
  }
}