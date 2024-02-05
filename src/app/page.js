import About from "@/organism/About";
import Banner from "@/organism/Banner";
import Contact from "@/organism/Contact";
import Project from "@/organism/Project";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <About /> */}
      <Project />
      <Contact />
    </main>
  );
}
