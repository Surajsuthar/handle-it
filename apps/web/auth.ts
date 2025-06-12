import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@handleIt/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId:  process.env.GOOGLE_CLIENT_ID,
      clientSecret:  process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      async authorize(credentials,req) {
        if(!credentials.email || !credentials.password) return null
        
      }
    }),
  ],
});
