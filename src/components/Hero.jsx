import { motion } from "motion/react";

function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    const navbarOffset = 80;

    if (projectsSection) {
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-slate-800 mb-4"
          >
            Fernando Martin Cruz
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl text-slate-600 mb-6"
          >
            Software developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-slate-600 mb-8"
          >
            Coding with passion, delivering with precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={scrollToProjects}
              aria-label="Scroll to projects section"
              type="button"
              className="px-8 py-3 bg-slate-800 text-white rounded-lg transition-all hover:bg-slate-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            >
              Selected projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
