import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/common/lenis-provider";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { cookies } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mehmet Akif Ozdemir - Full Stack Developer & Computer Engineer",
  description:
    "I am a full stack developer and computer engineer with expertise in web development. I specialize in building scalable and efficient applications using modern technologies. Contact me for your software development needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("theme") || { value: "light " };
  return (
    <html lang="en" className={`${theme.value}`}>
      <body
        className={`${poppins.className} transition-colors
         custom-cursor antialiased dark:bg-text dark:text-bg bg-bg text-text`}
      >
        <LenisProvider>
          <Header theme={theme.value} />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
