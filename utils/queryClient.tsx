import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { QueryClientConfig } from "@tanstack/query-core";

// If you have global fetch options or other defaults, define them here
const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // Example: set a refetch interval for background updates
      refetchInterval: 5000,
    },
  },
};

interface ReactQueryProviderProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient(config);

export const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
