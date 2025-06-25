import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { credentialsSchema } from "@/types";

export const authConfig: NextAuthConfig = {
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
          const validateCredentials = credentialsSchema.safeParse(credentials)
          if(validateCredentials) {
            // WIP
          }
        }
      }),
    ],
};