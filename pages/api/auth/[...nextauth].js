import NextAuth from "next-auth";
import CredentialsProvider from "@/helper/auth/providers/credentials";
import redirect from "@/helper/auth/callbacks/redirect";
import session from "@/helper/auth/callbacks/session";
import jwt from "@/helper/auth/callbacks/jwt";

export default NextAuth({
  providers: [CredentialsProvider],
  pages: {
    error: "/auth/signin",
    newUser: "/welcome",
  },
  callbacks: {
    redirect,
    session,
    jwt,
  },
  session: { jwt: true },
  secret: process.env.NEXTAUTH_SECRET,
});
