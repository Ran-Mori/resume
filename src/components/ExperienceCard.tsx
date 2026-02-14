"use client";
import { motion } from "framer-motion";
import { Job } from "@/lib/data";

export default function ExperienceCard({ job }: { job: Job }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid pb-4 mb-12 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {job.start} — {job.end}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 lg:group-hover:text-green focus-visible:text-green group/link" href={job.link} target="_blank" rel="noreferrer noopener" aria-label={`${job.role} at ${job.company} (opens in a new tab)`}>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 md:block"></span>
            <span>
              {job.role} ·{" "}
              <span className="inline-block">
                {job.company}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 focus-visible/link:-translate-y-1 focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">{job.description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {job.skills.map((skill, i) => (
            <li key={i} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-green">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
