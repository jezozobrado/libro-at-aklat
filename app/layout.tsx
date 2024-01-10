import { Inter, Bree_Serif, Young_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import QueryClientProvider from "./QueryClientProvider";

import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bree",
});
export const youngSerif = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-young",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider>
        <body className={`${inter.variable} ${youngSerif.variable} font-inter`}>
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </body>
      </QueryClientProvider>
    </html>
  );
}
