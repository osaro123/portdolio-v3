import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "regular"
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "semibold"
    }
  ],
  variable: "--generalSans"
})

export const metadata: Metadata = {
  title: "Osaro - Developer",
  description: "Portfolio ''24 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
