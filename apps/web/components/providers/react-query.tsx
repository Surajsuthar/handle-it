"use client"

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


interface props {
  children: React.ReactNode;
}

export const ReactQueryProvider = ({ children }: props) => {
  const Query = new QueryClient();
  return <QueryClientProvider client={Query}>{children}</QueryClientProvider>;
};