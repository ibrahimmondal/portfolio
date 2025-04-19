import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project10.jpg",
    title: "Job portal website",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://job-website-lovat.vercel.app/",
  },
  {
    imgSrc: "/images/project-11.jpg",
    title: "eCommerce website",
    tags: ["API", "SPA"],
    projectLink: "https://context-api-mu-one.vercel.app/",
  },
  {
    imgSrc: "/images/project-12.jpg",
    title: "Landing page",
    tags: ["Development", "API"],
    projectLink: "https://question-02.vercel.app/",
  },
  {
    imgSrc: "/images/project-13.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://dental-website-kappa.vercel.app/",
  },
  {
    imgSrc: "/images/project-14.jpg",
    title: "Movie website",
    tags: ["React", "Development", "API"],
    projectLink: "https://finel-api-yqzt.vercel.app/",
  },
  {
    imgSrc: "/images/project-15.jpg",
    title: "Landing page",
    tags: ["Web-design", "Development", "Bootstrap"],
    projectLink: "https://bootstrap-website-amber.vercel.app/",
  },
  {
    imgSrc: "/images/project-16.jpg",
    title: "Landing page",
    tags: ["Web-design", "Development", "Tailwind CSS"],
    projectLink: "https://tailwindcss-website-xi.vercel.app/",
  },
  {
    imgSrc: "/images/project-17.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development", "Tailwind CSS"],
    projectLink: "https://real-estate-ivory-beta.vercel.app/",
  },
  {
    imgSrc: "/images/my.jpg",
    title: "Banking website",
    tags: ["Web-design", "Development", "Tailwind CSS", "Next.js"],
    projectLink: "https://banquee-1245.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
