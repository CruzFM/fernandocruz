import { motion } from "motion/react";
import moneyWiseFront from "../assets/moneyWiseFront.png";
import moneyWiseBack from "../assets/moneyWiseBack.png";
import pokeapiChallenge from "../assets/pokeapiChallenge.png"
import Card from "./Card";

function Projects() {
  const projects = [
    {
      name: "Money wise (Frontend)",
      description:
        "A personal expense tracker built with React.",
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
      name: "Pokeapi Challenge",
      description:
        "A custom-designed Pokédex app built with Vue.js3, based on a custom Figma design, built for a coding challenge.",
      demo: "https://pokeapi-challenge-my24.vercel.app",
      repo: "https://github.com/CruzFM/pokeapi-challenge",
      tags: ["Frontend","Vue.js","Pinia", "Tailwind", "SPA"],
      picture: pokeapiChallenge
    },
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