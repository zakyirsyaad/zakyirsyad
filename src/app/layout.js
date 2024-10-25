
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provide";
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: "Zaky Irsyad Rais",
  description: "I am Jeky, a Frontend Developer!",
  keywords: "Zaky Irsyad Rais, Jeky, Frontend Developer, Website Developer, Frontend Engineer, Web Development, Web Application, zakyirsyaad, zakyirsyad, zaky, irsyad, rais",
  ogTitle: "Zaky Irsyad Rais - Frontend Developer",
  ogDescription: "Passionate Frontend Developer with expertise in Web Development and creating engaging user experiences.",
  ogImage: "https://uta boiwoepvwdhnczsgd.supabase.co/storage/v1/object/sign/project/og:img?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L29nOmltZyIsImlhdCI6MTcwNzE4MDQ5MCwiZXhwIjoxNzM4NzE2NDkwfQ.QYeRr26prSezV06jCQwjJCaOLXutCc2LXAYejDQNqtc&t=2024-02-06T00%3A48%3A09.798Z", // Gantilah dengan URL gambar yang sesuai
  ogUrl: "https://zakyirsyad.my.id" // Gantilah dengan URL halaman Anda
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* OpenGraph Metadata */}
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={GeistSans.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {children}

        </ThemeProvider>
        <Script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" />
      </body>
    </html>
  );
}
