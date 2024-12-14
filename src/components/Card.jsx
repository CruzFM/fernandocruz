import { motion } from "motion/react";
import underConstruction from "../assets/undraw_under_construction_-46-pa.svg";

function Card({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <figure className="relative h-48 bg-base-200">
        <img
          src={project.picture || underConstruction}
          alt="Project preview"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body bg-[#0f172a] text-white">
        <motion.h3
          className="card-title text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.name}
        </motion.h3>

        <p className="text-slate-300 mb-4">{project.description}</p>

        <div className="card-actions justify-start gap-3">
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Watch Demo
          </a>
          <a href={project.repo}  target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm text-white">
            Repository
          </a>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-slate-700 text-slate-300 flex items-center"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
