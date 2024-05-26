import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
    // 3 hours
    maxAge: 3 * 60 * 60,

    // maxAge: 10,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log("hello helloe");
        // Add logic here to look up the user from the credentials supplied
        const url = process.env.NEXT_PUBLIC_BASE_URL as string;

        // console.log("hello heloo adele");

        // console.log("base", url);

        // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        try {
          const user = await axios.post(`${url}/auth/login/user`, credentials);
          // console.log(user);
          return {
            id: user.data.data.user.id,
            name: user.data.data.user.name,
            email: user.data.data.user.email,
            image: user.data.data.user.profile_photo,
            token: user.data.data.accessToken,
          };
        } catch (error: any) {
          // console.log(error);
          // console.log(error.response.data.message);
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
        // console.log("hello");
        console.log("user", user);
        console.log("token", token);
        token.sub = user.id;
        token.picture = user.image;
        //@ts-ignore
        token.id = user?.token;
      }

      return token;
    },
    async session({ session, token, user }) {
      // if (token?.id) {
      //console.log("session", session);
      // console.log("token", token);
      //@ts-ignore
      session.user.id = token.sub;
      //@ts-ignore
      session.user.token = token.id;
      session.user.image = token.picture;
      return session;
      // }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
