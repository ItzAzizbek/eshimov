import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Education />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
