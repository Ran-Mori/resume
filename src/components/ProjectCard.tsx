"use client";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <div className="z-10 sm:col-span-8">
        <h3 className="font-medium leading-snug text-slate-200">
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-green group/link" href={project.link} target="_blank">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 md:block"></span>
            <span>{project.title}</span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.skills.map((skill, i) => (
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
