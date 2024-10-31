import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Head from 'next/head';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";

import localFont from "next/font/local"


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deutschsprachereise",
  description: "Objavte naše profesionálne online kurzy zamerané na firmy a jednotlivcov. Ponúkame odborné preklady z/do nemeckého jazyka a profesionálnu editorskú činnosť. Naša platforma zabezpečuje kvalitné vzdelávanie s dôrazom na praktické zručnosti a individuálny prístup. Pripojte sa k nám a posuňte svoje jazykové schopnosti na vyššiu úroveň!",
  icons: {
    icon: "/favicon.ico"
  }
};


const primaryFont = localFont({ 
  src: './font/EireneSans-Regular.otf'
})





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <body className={primaryFont.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
