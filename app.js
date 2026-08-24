const { useEffect } = React;
const h = React.createElement;

const navLinks = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const quickFacts = [
  ["Degree", "B.Tech in Artificial Intelligence and Data Science"],
  ["Current Semester", "2nd Semester"],
  ["Location", "Bangalore 560064"],
];

const education = [
  {
    label: "University",
    title: "Reva University",
    body: "B.Tech in Artificial Intelligence and Data Science",
    meta: "2nd Semester | Bangalore 560064",
  },
  {
    label: "School",
    title: "DPS Bangalore North",
    body: "IGCSE curriculum",
  },
];

const skills = [
  "Video Editing",
  "Content Creation",
  "Business Analytics",
  "IoT Prototyping",
  "Presentation Design",
  "Research & Analysis",
  "Problem Solving",
  "Project Coordination",
  "Budget Planning",
  "Adaptability & Continuous Learning",
];

const projects = [
  {
    title: "3D-Printed Modular and Foldable Housing",
    body:
      "A concept focused on adaptable, space-conscious housing using modular structures and 3D-printing possibilities.",
  },
  {
    title: "2D Graphics Editor",
    body:
      "A menu-driven graphics editor built in C to practice programming logic, user choices, and drawing operations.",
  },
  {
    title: "AI-Based Skill Analyzer with Resume",
    body:
      "A project idea that studies a resume and analyzes skills to help users understand their strengths and gaps.",
  },
  {
    title: "Automated Fire Fighting System",
    body:
      "An IoT-based prototype using sensors and connected components to detect fire risk and support faster response.",
  },
];

const achievements = [
  ["IBM SkillsBuild Online Course", "Completed online learning and received certification."],
  [
    "Instagram Design System Course",
    "Completed an online course covering design systems and subject learning.",
  ],
  ["Wadhwani Foundation Certificate", "Completed foundation-led learning and certification."],
];

function SectionHeading({ eyebrow, title }) {
  return h(
    "div",
    { className: "section-heading reveal" },
    h("p", { className: "eyebrow" }, eyebrow),
    h("h2", null, title)
  );
}

function Header() {
  return h(
    "header",
    { className: "site-header" },
    h(
      "a",
      { className: "brand", href: "#top", "aria-label": "Nikhilesh Kosagi home" },
      h("span", null, "NK")
    ),
    h(
      "nav",
      { className: "nav-links", "aria-label": "Main navigation" },
      navLinks.map(([label, href]) => h("a", { key: href, href }, label))
    )
  );
}

function Hero() {
  return h(
    "section",
    { className: "hero section-shell" },
    h(
      "div",
      { className: "hero-copy reveal" },
      h("p", { className: "eyebrow" }, "Portfolio"),
      h("h1", null, "Nikhilesh Kosagi"),
      h("p", { className: "tagline" }, "Computer Science Student and Entrepreneur"),
      h(
        "p",
        { className: "hero-text" },
        "Hello! I am Nikhilesh, a technically minded engineering student focused on building a better physique, style, social life, and income while staying practical about time and money."
      ),
      h(
        "div",
        { className: "hero-actions", "aria-label": "Primary actions" },
        h("a", { className: "button primary", href: "#projects" }, "View Projects"),
        h("a", { className: "button secondary", href: "mailto:nikhil4507@gmail.com" }, "Contact Me")
      )
    ),
    h(
      "figure",
      { className: "portrait-card reveal" },
      h("img", {
        src: "assets/profile.png",
        alt: "Nikhilesh Kosagi speaking at a podium in formal attire",
      }),
      h(
        "figcaption",
        null,
        h("span", null, "B.Tech AI & Data Science"),
        h("strong", null, "Reva University")
      )
    )
  );
}

function About() {
  return h(
    "section",
    { id: "about", className: "section-shell split-section" },
    h(SectionHeading, { eyebrow: "About Me", title: "Practical, curious, and builder-minded." }),
    h(
      "div",
      { className: "about-panel reveal" },
      h(
        "p",
        null,
        "I enjoy working at the intersection of technology, presentation, and entrepreneurship. My current academic path is B.Tech in Artificial Intelligence and Data Science, and I am actively developing skills across analytics, IoT prototyping, design systems, and project coordination."
      ),
      h(
        "div",
        { className: "quick-facts", "aria-label": "Quick facts" },
        quickFacts.map(([label, value]) =>
          h("div", { key: label }, h("span", null, label), h("strong", null, value))
        )
      )
    )
  );
}

function Education() {
  return h(
    "section",
    { id: "education", className: "section-shell" },
    h(SectionHeading, { eyebrow: "Education", title: "Academic background" }),
    h(
      "div",
      { className: "timeline" },
      education.map((item) =>
        h(
          "article",
          { className: "timeline-item reveal", key: item.title },
          h("span", { className: "timeline-dot", "aria-hidden": "true" }),
          h("p", { className: "timeline-label" }, item.label),
          h("h3", null, item.title),
          h("p", null, item.body),
          item.meta ? h("small", null, item.meta) : null
        )
      )
    )
  );
}

function Skills() {
  return h(
    "section",
    { id: "skills", className: "section-shell" },
    h(SectionHeading, {
      eyebrow: "Skills",
      title: "Technical, creative, and management strengths.",
    }),
    h(
      "div",
      { className: "skills-grid reveal", "aria-label": "Skills list" },
      skills.map((skill) => h("span", { key: skill }, skill))
    )
  );
}

function Projects() {
  return h(
    "section",
    { id: "projects", className: "section-shell" },
    h(SectionHeading, { eyebrow: "Projects", title: "Selected academic and innovation work." }),
    h(
      "div",
      { className: "project-grid" },
      projects.map((project, index) =>
        h(
          "article",
          { className: "project-card reveal", key: project.title },
          h("span", null, String(index + 1).padStart(2, "0")),
          h("h3", null, project.title),
          h("p", null, project.body)
        )
      )
    )
  );
}

function Achievements() {
  return h(
    "section",
    { id: "achievements", className: "section-shell split-section" },
    h(SectionHeading, { eyebrow: "Achievements", title: "Certifications and learning milestones." }),
    h(
      "div",
      { className: "achievement-list reveal" },
      achievements.map(([title, body]) =>
        h("article", { key: title }, h("h3", null, title), h("p", null, body))
      )
    )
  );
}

function Contact() {
  return h(
    "section",
    { id: "contact", className: "contact-section section-shell" },
    h(
      "div",
      { className: "contact-card reveal" },
      h("p", { className: "eyebrow" }, "Contact"),
      h("h2", null, "Let us connect."),
      h(
        "p",
        null,
        "I am open to academic collaborations, entrepreneurship ideas, and project discussions."
      ),
      h(
        "div",
        { className: "contact-links" },
        h("a", { href: "mailto:nikhil4507@gmail.com" }, "nikhil4507@gmail.com"),
        h("a", { href: "tel:+916366651567" }, "+91 6366651567"),
        h(
          "a",
          {
            href: "https://www.linkedin.com/in/nikhilesh-kosagi-436687384",
            target: "_blank",
            rel: "noreferrer",
          },
          "LinkedIn Profile"
        )
      )
    )
  );
}

function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h("p", null, "Designed with a soft mist, navy, and burgundy color palette."),
    h("p", null, `© ${new Date().getFullYear()} Nikhilesh Kosagi`)
  );
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return h(
    React.Fragment,
    null,
    h(Header),
    h("main", { id: "top" }, h(Hero), h(About), h(Education), h(Skills), h(Projects), h(Achievements), h(Contact)),
    h(Footer)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
