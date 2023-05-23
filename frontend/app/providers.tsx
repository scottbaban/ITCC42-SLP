"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React, { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
