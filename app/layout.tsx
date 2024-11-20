
import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


const jetbrainsMono = JetBrains_Mono({subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800"],
variable : "--font-jetbrainsMono",
})
export const metadata: Metadata = {
  title: "Islem Fortas Portfolio",
  description: "Welcome to my portfolio, do not forget to say HELLO!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable}  antialiased`}>
          <SpeedInsights/>
          <Analytics/>
          <Header />
          <StairEffect />
          <PageTransition>
            {children}
          </PageTransition>

        
      </body>
    </html>
  );
}
