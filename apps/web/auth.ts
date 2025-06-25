import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@handleIt/db"

const MAX_COOKIE_AGE = 30 * 24 * 60 * 60

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
    maxAge: MAX_COOKIE_AGE
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(db),
  callbacks: {
   async session({session , token, user}) {
      if(token.sub && session.user) {
        session.user.id = token.sub
      }
      if(token.role && session.user) {
      
      }
    },
    async jwt({ token }) {
      if(!token.sub) return token;
      return token;
    }
  }
});
