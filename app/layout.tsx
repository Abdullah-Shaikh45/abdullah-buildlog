import { Montserrat } from "next/font/google";
import "./globals.css";

const sg = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sg.className} bg-[#F2F2F2] text-[#111111] antialiased`}>

        {children}
      </body>
    </html>
  );
}
