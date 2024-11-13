import fotoPerfil from "../assets/Foto-perfil.jpg";

function AboutMe() {
  return (
    <div className="hero min-h-screen md:px-24">
      <div className="hero-content flex-col lg:flex-row lg:gap-20 2xl:gap-32">
        <div className="md:self-start">
          <h2 className="text-2xl md:text-4xl font-semibold">03. About me</h2>
          <p className="pt-6 md:text-lg">
            I'm a self-taught software developer with a background in law, a
            field I left behind to pursue my true passion: technology. Since
            starting my coding journey in 2021, I've found in software
            development the perfect blend of problem-solving and creativity that
            I was looking for.
          </p>
          <p className="py-2 md:text-lg">
            Today, I'm a Software Developer at Boehringer-Ingelheim, working on
            full-stack development, accessibility, and impactful volunteer
            projects. My current tech stack includes Vue.js, React, Node.js,
            SASS, Bootstrap, and Tailwind.
          </p>
          <p className="py-2 md:text-lg">
            I believe collaboration and continuous learning are keys to creating
            meaningful, lasting solutions in tech. Let's connect and create
            something great together!
          </p>
        </div>
        <img
          src={fotoPerfil}
          className="w-full md:max-w-sm rounded-lg shadow-2xl"
          alt="Fernando Cruz, a man smiling at the camera in a formal shirt and professional pose"
        />
      </div>
    </div>
  );
}

export default AboutMe;
