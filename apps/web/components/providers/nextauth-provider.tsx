"use client";

import React from "react";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export type NextAuthProviderProps = {
  session?: Session | null | undefined;
  children: React.ReactNode;
};

export const NextAuthProvider = ({
  session = null,
  children,
}: NextAuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};


