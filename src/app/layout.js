import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provide";
import Navbar from "@/components/Navbar";
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/Footer';


export const metadata = {
  title: "Zaky Irsyad Rais",
  description: "i'am Jeky as a Frontend Developer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Toaster />
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
