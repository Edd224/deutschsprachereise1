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
  description: "Profesionálne online kurzy a odborné preklady z/do nemčiny pre firmy a jednotlivcov. Zlepšite svoje jazykové zručnosti s individuálnym prístupom.",
  icons: {
    icon: "/favicon.ico"
  },
  keywords: ["online kurzy", "kurzy pre firmy", "kurzy pre jednotlivcov", "preklady do nemčiny", "editorské služby", "profesionálny rozvoj"]
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
    <html lang="sk" suppressHydrationWarning>
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
