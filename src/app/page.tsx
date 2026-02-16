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
            <li className="mr-5 text-xs">
              <a className="block hover:text-slate-200" href="https://github.com/Ran-Mori" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a className="block hover:text-slate-200" href="mailto:izumisakai-zy@outlook.com" aria-label="Email" title="Email">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
              </a>
            </li>
            {/*<li className="mr-5 text-xs">*/}
            {/*    <a href="#" className="block hover:text-slate-200">LINKEDIN</a>*/}
            {/*</li>*/}
        </ul>
      </header>

      <main className="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">About</h2>
          </div>
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
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Experience</h2>
          </div>
          {JOBS.map((job, i) => (
            <ExperienceCard key={i} job={job} />
          ))}
        </section>

        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 group/list">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Projects</h2>
            </div>
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
