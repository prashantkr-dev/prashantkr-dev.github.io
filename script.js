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



// For the Projects page:
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filterValue === "all" || card.getAttribute('data-category') === filterValue) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

});
