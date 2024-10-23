import type { Metadata } from "next";
import { Work_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./(landing)/_components/navbar";
import Footer from "./(landing)/_components/footer";
import FirstFooter from "./(landing)/_components/first_footer";
const WorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-paragraph",
});

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

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
        className={`${WorkSans.variable} ${BricolageGrotesque.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <FirstFooter />
        <Footer />
      </body>
    </html>
  );
}
