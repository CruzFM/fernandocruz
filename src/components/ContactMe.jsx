import gmailSvg from "../assets/gmail-svg.svg";
import linkedinSvg from "../assets/linkedin-svg.svg";
import downloadSvg from "../assets/download-svg.svg";
import resumeSvg from "../assets/cv-pdf.svg";

function ContactMe() {
  return (
    <div className="hero bg-base-200 lg:py-24 xl:py-0  xl:min-h-screen ">
      <div className="hero-content md:text-center">
        <div className="max-w-md">
          <h2 className="text-2xl md:text-4xl font-semibold">
            04. Get in touch
          </h2>
          <p className="pt-6 md:text-lg">
            I love connecting with people, so whether you're looking for a
            developer for your next project or simply want to chat about code,
            feel free to reach out.
          </p>
          <p className="py-3 md:text-lg">
            Let's grab a virtual coffee and discuss how we can work together!
          </p>
          <div className="flex flex-row items-center justify-center gap-3 mt-6">
            <a href="mailto:cruzfernandomartin94@gmail.com" className="btn rounded-none btn-square btn-outline hover:bg-neutral-300">
              <img src={gmailSvg} alt="Gmail Icon" className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/cruzfernandomartin/" rel="noopener noreferrer" target="_blank" className="btn rounded-none btn-square btn-outline hover:bg-neutral-300">
              <img src={linkedinSvg} alt="LinkedIn Icon" className="h-6 w-6" />
            </a>
            <a href="/Fernando-Cruz-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn rounded-none btn-square btn-outline hover:bg-neutral-300">
              <img src={resumeSvg} alt="View Resume Icon" className="h-7 w-7" />
            </a>
            <a href="/Fernando-Cruz-resume.pdf" download className="btn rounded-none btn-square btn-outline hover:bg-neutral-300">
              <img src={downloadSvg} alt="Download Resume Icon" className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
