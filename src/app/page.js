import Navbar from "@/components/Navbar";
import Banner from "@/organism/Banner";
import Contact from "@/organism/Contact";
import Footer from "@/organism/Footer";
import Project from "@/organism/Project";

export default function Home() {
  return (
    <main>
      <Navbar />
      <hr className="md:hidden" />
      <Banner />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
