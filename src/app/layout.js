import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provide";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Zaky Irsyad Rais",
  description: "i'am Jeky as a Frontend Developer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <hr className="md:hidden" />
          {children}
        </ThemeProvider>
        <Script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" />
      </body>
    </html>
  );
}
