import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})
export const metadata = {
  title: "Bhushan Pardeshi",
  description: "Bhushan Pardeshi portfolio",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
