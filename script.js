// -------- responsive nav-bar -------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function toggleMenu() {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Experience Section
const experiences = [
  {
    title: "Frontend Developer",
    company: "Singularity (Astronomy Club of IISER-K)",
    date: "September 2025 - Present",
    description: "Built few major pages for the club's official website.",
    links: [
      { label: "GitHub", url: "https://github.com/thushi308/singularity" },
      { label: "Live Demo", url: "https://thushi308.github.io/singularity/" },
    ],
  },
];

const experienceList = document.getElementById("experience-list");

function renderExperiences() {
  experienceList.innerHTML = "";

  experiences.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "experience-card";

    let linksHTML = "";
    if (exp.links && exp.links.length > 0) {
      linksHTML = `
        <div class="experience-links">
          ${exp.links
            .map(
              (link) =>
                `<a href="${link.url}" target="_blank" rel="noopener noreferrer">
                  ${link.label}
                </a>`
            )
            .join("")}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="experience-title">${exp.title}</div>
      <div class="experience-company">${exp.company}</div>
      <div class="experience-date">${exp.date}</div>
      <div class="experience-desc">${exp.description}</div>
      ${linksHTML}
    `;

    experienceList.appendChild(card);
  });
}

renderExperiences();


