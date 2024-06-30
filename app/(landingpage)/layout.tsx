import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavBar from "@/components/landingpage/home/NavBar/NavBar";
import Footer from "@/components/Footer";
import Faq from "@/components/landingpage/home/Faq";
import Script from "next/script";
import { getServerSession } from "next-auth";
import SessionProvider from "../../components/SessionProvider";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/NpProgress";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { NavigationMenuDemo } from "@/components/NavMenuExample";
import MobileNavBar from "@/components/landingpage/home/NavBar/MobileNavBar";

import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Skill2rural Home",
  description: "Bridging Opportunities, Transforming Lives",
  icons: [
    {
      url: "/skill2rural-logo-image.svg",
    },
  ],
};

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/clash-display/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "../../public/clash-display/ClashDisplay-SemiBold.woff2",
    //   weight: "600",
    //   style: "normal",
    // },
    {
      path: "../../public/clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export default async function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" />

      <body className={`relative ${clashDisplay.variable}`}>
        <SessionProvider session={session}>
          <ReactQueryProvider>
            <NavBar />
            <MobileNavBar />
            {/* <NavigationMenuDemo /> */}
            {children}
            <Faq />
            <Footer />
          </ReactQueryProvider>
          <ToastContainer />
        </SessionProvider>
        <ProgressBar
          height="4px"
          color="#60269E"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
