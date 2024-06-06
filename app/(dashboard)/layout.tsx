import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavBar from "@/components/landingpage/home/NavBar/NavBar";
import Footer from "@/components/Footer";
import Faq from "@/components/landingpage/home/Faq";
import Script from "next/script";
import TopBar from "@/components/dashboard/TopBar";
import { Inter } from "next/font/google";
import SessionProvider from "../../components/SessionProvider";
import { usePathname } from "next/navigation";

import { getServerSession } from "next-auth";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "@/components/NpProgress";
import MobileNavBar from "@/components/landingpage/home/NavBar/MobileNavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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

const avenir = localFont({
  src: [
    {
      path: "../../public/Avenir/AvenirRegular/AvenirRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

export default async function DashbaordPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" />
      <body
        className={`relative ${clashDisplay.variable} ${inter.variable} bg-greyBg3 ${avenir.variable}`}
      >
        <SessionProvider session={session}>
          <ReactQueryProvider>
            <NavBar />
            <MobileNavBar />
            <TopBar />
            {children}
            <Footer bgColor="bg-greyBg3" />
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
