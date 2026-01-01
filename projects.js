const projects = [
  {
    title: "Frontend Mentor Projects",
    category: "tech",
    img: "assets/frontend-mentor.png",
    description:
      "Here's the collection of Frontend Web Development Projects I did while learning. This is from the platform, Frontend Mentor, where developers can practice and improve their frontend web development skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        href: "https://github.com/prashantkr-dev/Frontend-Mentor-Projects",
        icon: "fa-brands fa-github",
        label: "GitHub Repo",
      },
      {
        href: "https://www.frontendmentor.io/profile/scaram0uche-128",
        icon: "fa-solid fa-code",
        label: "Frontend Mentor Profile",
      },
    ],
  },
  {
    title: "Singularity Website",
    category: "tech",
    img: "assets/singularity-gallery-page.png",
    description: `I built several major pages for the Singularity (the astronomy club of IISER-K) website. I am still working on additional pages and maintaining the site.<br>
Pages designed by me: Gallery, Blog, and Events.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        href: "https://github.com/thushi308/singularity",
        icon: "fa-brands fa-github",
        label: "GitHub Repo",
      },
      {
        href: "https://thushi308.github.io/singularity/",
        icon: "fa-solid fa-code",
        label: "Website Link",
      },
    ],
  },
  {
    title: "Portfolio Website",
    category: "tech",
    img: "assets/my-portfolio.png",
    description:
      "This is my personal portfolio website I designed to put all my work in one place. A basic static website created with HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        href: "https://github.com/prashantkr-dev/prashantkr-dev.github.io/",
        icon: "fa-brands fa-github",
        label: "GitHub Repo",
      },
      {
        href: "https://prashantkr-dev.github.io/",
        icon: "fa-solid fa-code",
        label: "Website Link",
      },
    ],
  },

  //   {
  //     title: "",
  //     category: "academic",
  //     img: "",
  //     description:
  //       "",
  //     technologies: [],
  //     links: [
  //       {
  //         href: "",
  //         icon: "fa-brands fa-github",
  //         label: "GitHub Repo",
  //       },
  //     ],
  //   },
];

const projectsGrid = document.querySelector(".projects-grid");

function renderProjects(projectList) {
  projectsGrid.innerHTML = "";

  projectList.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-category", project.category);

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.img}" alt="${project.title}">
      </div>
      <div class="project-description">
        <div class="project-header">
          <h3>${project.title}</h3>
          <div class="project-links">
            ${project.links
              .map(
                (link) =>
                  `<a href="${link.href}" target="_blank" class="project-link" aria-label="${link.label}"><i class="${link.icon}"></i></a>`
              )
              .join("")}
          </div>
        </div>
        <div class="project-technologies">
          ${project.technologies
            .map((tech) => {
              let techClass = tech.toLowerCase().replace(/\s/g, "-");
              return `<span class="tech-pill ${techClass}">${tech}</span>`;
            })
            .join("")}
        </div>
        <hr>
        <p>${project.description}</p>
      </div>
    `;

    projectsGrid.appendChild(card);
  });
}

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    const allCards = projectsGrid.querySelectorAll(".project-card");

    allCards.forEach((card, index) => {
      const category = card.getAttribute("data-category");
      setTimeout(() => {
        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      }, index * 50);
    });
  });
});

renderProjects(projects);
