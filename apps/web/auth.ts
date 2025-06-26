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
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session;
    },
    async jwt({ token, user }) {
      // If this is the first time the JWT callback is called (user object exists)
      if (user) {
        token.sub = user.id;
      }
      
      if (!token.sub) return token;
      
      // You can add additional user data to the token here
      // For example, fetch user role or other data from database
      // const userData = await db.user.findUnique({
      //   where: { id: token.sub },
      //   select: { role: true, ... }
      // });
      // token.role = userData?.role;
      
      return token;
    }
  },
});