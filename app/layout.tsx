
import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";


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
  title: "Create Next App",
  description: "Generated by create next app",
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
          <Header />
          <StairEffect />
          <PageTransition>
            {children}
          </PageTransition>

        
      </body>
    </html>
  );
}
