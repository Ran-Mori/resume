import Nav from "@/components/Nav";
import ProfilePicture from "@/components/ProfilePicture";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { JOBS, PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <ProfilePicture />
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Yi Zheng</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Impact-driven software engineer</h2>
          <Nav />
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {/* Social Links Placeholder */}
            <li className="mr-5 text-xs">
                <a href="https://github.com/Ran-Mori" className="block hover:text-slate-200">GITHUB</a>
            </li>
            {/*<li className="mr-5 text-xs">*/}
            {/*    <a href="#" className="block hover:text-slate-200">LINKEDIN</a>*/}
            {/*</li>*/}
        </ul>
      </header>

      <main className="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <p className="mb-4">
              I’m a Senior Android Engineer with a passion for deep system architecture, focused on building high-performance, scalable mobile applications.
              To me, engineering is not just a profession but a craft; I enjoy diving into the source code to understand the 'how' and 'why' behind the screen. Nothing motivates me more than seeing the features I build being used by massive user bases—that real-world impact is my ultimate positive feedback.
          </p>
          <p className="mb-4">
              Currently, I&apos;m a Senior Engineer at <span className="font-medium text-slate-200">ByteDance</span> in Shanghai, where I architect the core Photo Album experience for the <span className="font-medium text-slate-200">Doubao mobile phone</span>. In this role, I tackle complex media rendering and storage challenges, optimizing performance for a system-level app that serves as the user&apos;s digital memory vault.
              <br />
              Previously, I drove development for the social module at <span className="font-medium text-slate-200">Douyin</span>, handling kinds of features that connect millions of users.
          </p>
          <p className="mb-4">
              Outside of work, you can usually find me exploring the city with my headphones on, catching up on tech podcasts, or relaxing to the timeless songs of <span className="font-medium text-slate-200">Izumi Sakai</span>.
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
            <p>@2026 Yi Zheng. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
