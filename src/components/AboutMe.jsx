import fotoPerfil from "../assets/Foto-perfil.jpg";
import { motion } from "framer-motion";

function AboutMe() {
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  return (
    <section
      className="min-h-screen py-20 grid xl:place-items-center bg-gradient-to-b from-slate-50 to-slate-100"
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-20 2xl:gap-32 items-center">
          {/* Text Content */}
          <motion.div
            className="flex-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUpVariants} className="mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                03. About me
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-slate-700 leading-relaxed"
            >
              I'm a self-taught software developer with a law degree, a
              field I left behind to pursue my true passion: technology. Since
              starting my coding journey in 2021, I've found in software
              development the perfect blend of problem-solving and creativity
              that I was looking for.
            </motion.p>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-slate-700 leading-relaxed"
            >
              After two years at Boehringer-Ingelheim, I've joined Telecentro S.A. as a full-stack developer. My work involves designing and building robust APIs and modern front-ends, database design, and modernizing legacy systems to improve performance and user experience.
              <motion.div
                variants={fadeInUpVariants}
                className="mt-4 flex flex-wrap gap-2"
              >
                {[
                  ".NET Core",
                  "Oracle",
                  "PostgreSQL",
                  "React",
                  "TypeScript",
                  "Vue.js",
                  "Node.js",
                  "SASS",
                  "Bootstrap",
                  "Tailwind",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.p>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-slate-700 leading-relaxed"
            >
              I believe collaboration and continuous learning are keys to
              creating meaningful, lasting solutions in tech. Let's connect and
              create something great together!
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:flex-1 mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                duration: 1.5,
                ease: [0.25, 0.8, 0.25, 1],
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative group"
            >
              <motion.div className="absolute -inset-6 rounded-lg -z-10 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out" />
              <img
                src={fotoPerfil}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                alt="Fernando Cruz, a man smiling at the camera in a formal shirt and professional pose"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
