import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@handleIt/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db)
});
