import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
    // 1 day
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const url = process.env.NEXT_PUBLIC_BASE_URL as string;

        console.log("credentials", credentials);

        //@ts-ignore
        const userType = credentials?.userType;
        console.log("userType", userType);

        try {
          const user = await axios.post(
            `${url}/auth/login/${userType}`,
            credentials
          );

          // console.log(user);
          return {
            id: user.data.data.user.id,
            name: user.data.data.user.name,
            email: user.data.data.accessToken,
            image: user.data.data.user.profile_photo,
            token: user.data.data.accessToken,
          };
        } catch (error: any) {
          // console.log(error);
          // console.log(error.response.data.message);
          throw new Error(error.response.data.message);
        }
      },
    }),
  ],

  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user?.id) {
  //       // console.log("hello");
  //       // console.log("user", user);
  //       // console.log("token", token);
  //       token.sub = user.id;
  //       token.picture = user.image;
  //       //@ts-ignore
  //       token.id = user?.token;
  //     }

  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     //@ts-ignore
  //     session.user.id = token.sub;
  //     //@ts-ignore
  //     session.user.token = token.id;
  //     session.user.image = token.picture;
  //     return session;
  //     // }
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
