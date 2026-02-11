import Nav from "@/components/Nav";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { JOBS, PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Your Name</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Android Engineer</h2>
          <p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, accessible, and high-performance mobile experiences.</p>
          <Nav />
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {/* Social Links Placeholder */}
            <li className="mr-5 text-xs">
                <a href="#" className="block hover:text-slate-200">GITHUB</a>
            </li>
            <li className="mr-5 text-xs">
                <a href="#" className="block hover:text-slate-200">LINKEDIN</a>
            </li>
        </ul>
      </header>

      <main className="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <p className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
          </p>
          <p className="mb-4">
            My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to know to build a web app with the Spotify API.
          </p>
        </section>

        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 group/list">
          {JOBS.map((job, i) => (
            <ExperienceCard key={i} job={job} />
          ))}
        </section>

        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 group/list">
            {PROJECTS.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </section>
        
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>Built with Next.js and Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}
