import Certified from "@/components/Certified";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-10">
      <section className="space-y-5 mt-10 lg:grid lg:grid-cols-2">
        <div className="text-3xl lg:text-4xl xl:text-5xl font-semibold lg:place-content-center">
          <h1>Hello, Iam</h1>
          <h2>Zaky Irsyad Rais</h2>
        </div>

        <section className="space-y-5">
          <div className="text-lg lg:text-xl xl:text-2xl font-medium">
            <h3>Freelance Website/Web App Developer</h3>
            <h3>Based in Yogyakarta, Indonesia</h3>
          </div>
          <div className="text-sm lg:text-base text-gray-500">
            <h4>Specialize in Frontend Developer to build best optimize web and mobile app</h4>
          </div>
          <div className="space-x-5">
            <Button asChild>
              <Link href='https://wa.link/8irt9b' target='_blank'>
                Contact Me
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href='#experience'>See Experience</Link>
            </Button>
          </div>
        </section>
      </section>

      <Experience />
      <Certified />
      <Project />
    </main>
  );
}
