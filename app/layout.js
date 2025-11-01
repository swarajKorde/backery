import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  UseDataContex  from "@/context/UseDataContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Backery",
  description: "just on trial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UseDataContex>
          {children}
        </UseDataContex>


      </body>
    </html>
  );
}
