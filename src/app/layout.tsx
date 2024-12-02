import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/Header";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Zaky Irsyad Rais Porfolio",
  description: "Zaky Irsyad Rais is a Freelance Website/Web App Developer. Based in Yogyakarta, Indonesia",
  keywords: "Zaky Irsyad Rais, Jeky, Frontend Developer, Website Developer, Frontend Engineer, Web Development, Web Application, zakyirsyaad, zakyirsyad, zaky, irsyad, rais, freelance website, jasa bikin website murah",
  openGraph: {
    title: "Zaky Irsyad Rais Porfolio",
    description: "Zaky Irsyad Rais is a Freelance Website/Web App Developer. Based in Yogyakarta, Indonesia",
    images: "https://kowtddhwakkqmlntjbws.supabase.co/storage/v1/object/public/My/WhatsApp%20Image%202024-11-20%20at%2015.35.34_da0f0b4b.jpg", // Gantilah dengan URL gambar yang sesuai
    url: "https://zakyirsyad.my.id" // Gantilah dengan URL halaman Anda
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased m-5 lg:m-10 2xl:mx-20`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
