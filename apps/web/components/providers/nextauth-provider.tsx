"use client";

import React from "react";

import type { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";

export type NextAuthProviderProps = {
  children: React.ReactNode;
};

export const NextAuthProvider = ({
  children,
}: NextAuthProviderProps) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  );
};
