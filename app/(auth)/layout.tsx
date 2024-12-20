import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Script from "next/script";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SessionProvider from "../../components/SessionProvider";
import { getServerSession } from "next-auth";
import ProgressBar from "@/components/NpProgress";

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

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" />
      <body className={`  ${clashDisplay.variable}`}>
        <SessionProvider session={session}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
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
