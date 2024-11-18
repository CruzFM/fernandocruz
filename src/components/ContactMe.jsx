import { motion } from "motion/react";
import gmailSvg from "../assets/gmail-svg.svg";
import linkedinSvg from "../assets/linkedin-svg.svg";
import downloadSvg from "../assets/download-svg.svg";
import resumeSvg from "../assets/cv-pdf.svg";

function ContactMe() {
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const socialLinks = [
    {
      href: "mailto:cruzfernandomartin94@gmail.com",
      icon: gmailSvg,
      alt: "Gmail Icon",
      label: "Email me"
    },
    {
      href: "https://www.linkedin.com/in/cruzfernandomartin/",
      icon: linkedinSvg,
      alt: "LinkedIn Icon",
      label: "LinkedIn Profile",
      external: true
    },
    {
      href: "/Fernando-Cruz-resume.pdf",
      icon: resumeSvg,
      alt: "View Resume Icon",
      label: "View Resume",
      external: true
    },
    {
      href: "/Fernando-Cruz-resume.pdf",
      icon: downloadSvg,
      alt: "Download Resume Icon",
      label: "Download Resume",
      download: true
    }
  ];
  
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center justify-center py-20" id="contact">
    <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
    
    <motion.div 
      className="container mx-auto px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeInUpVariants}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            04. Get in touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <motion.p 
          variants={fadeInUpVariants}
          className="text-lg text-slate-700 leading-relaxed mb-6"
        >
          I love connecting with people, so whether you're looking for a
          developer for your next project or simply want to chat about code,
          feel free to reach out.
        </motion.p>

        <motion.p 
          variants={fadeInUpVariants}
          className="text-lg text-slate-700 leading-relaxed mb-12"
        >
          Let's grab a virtual coffee and discuss how we can work together!
        </motion.p>
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeInUpVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <a
                href={link.href}
                className="group relative flex items-center justify-center w-14 h-14 border-2 border-primary hover:border-primary/80 bg-white hover:bg-primary/5 transition-all duration-300"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download}
              >
                <img 
                  src={link.icon} 
                  alt={link.alt} 
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
  );
}

export default ContactMe;
