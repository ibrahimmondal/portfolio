import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    // desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    // desc: "User Interface",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    // desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    // desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    // desc: "Interaction",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    // desc: "Framework",
  },
  {
    imgSrc: "/images/nextjs.svg",
    label: "Next js",
    // desc: "Framework",
  },
  {
    imgSrc: "/images/php.svg",
    label: "Php",
    // desc: "Web Server",
  },
  // {
  //   imgSrc: "/images/expressjs.svg",
  //   label: "ExpressJS",
  //   desc: "Node Framework",
  // },
  // {
  //   imgSrc: "/images/mongodb.svg",
  //   label: "MongoDB",
  //   desc: "Database",
  // },
  {
    imgSrc: "/images/wordpress.svg",
    label: "Wordpress",
    // desc: "CMS",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
