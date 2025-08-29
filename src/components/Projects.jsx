import { motion } from "motion/react";
import moneyWiseFront from "../assets/moneyWiseFront.png";
import moneyWiseBack from "../assets/moneyWiseBack.png";
import Card from "./Card";
import ERDiagram from "../assets/ER-card_generator.png";

function Projects() {
  const projects = [
    {
      name: "Money wise (Frontend)",
      description:
        "A personal expense tracker built with React, Tailwind CSS, and shadcn/ui, designed from scratch in Figma. It features user authentication, transaction management, and a responsive design.",
      demo: "https://money-wise-front.vercel.app/",
      repo: "https://github.com/CruzFM/money-wise-front",
      tags: ["Frontend", "React", "SPA", "Fullstack"],
      picture: moneyWiseFront
    },
    {
      name: "Money wise (backend)",
      description:
        "A backend service with authentication, transaction management, and API documentation powered by Node.js and MongoDB.",
      demo: "https://money-wise-service.onrender.com/api-docs/",
      repo: "https://github.com/CruzFM/money-wise-service",
      tags: ["Backend", "Node", "Express", "MongoDB"],
      picture: moneyWiseBack
    },
    {
      name: "Yu-Gi-Oh! Card Database - SQL & Data Modeling",
      description: "A relational database designed in PostgreSQL to model the complex relationships of the Yu-Gi-Oh! trading card game. \n It features a fully normalized schema covering cards, archetypes, attributes, subtypes, formats, and banlists, with an ER diagram.",
      demo: "/card_generator-readme.pdf",
      tags: ["Database", "PostgreSQL", "SQL"],
      picture: ERDiagram
    }
  ];
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4 ">
            02. Selected Projects
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;