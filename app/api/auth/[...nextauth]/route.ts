import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
    // maxAge: 10,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log("hello helloe");
        // Add logic here to look up the user from the credentials supplied
        const url = "http://localhost:4000";

        // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        try {
          const user = await axios.post(`${url}/auth/login/user`, credentials);
          console.log(user.data);
          return {
            id: user.data.user.id,
            name: user.data.user.name,
            email: user.data.user.email,
            token: user.data.accessToken,
          };
        } catch (error: any) {
          console.log(error.response.data.message);
          throw new Error(error.response.data.message);
        }
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        console.log("hello");
        console.log(user);
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
