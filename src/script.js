const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollPosition = window.scrollY;
  const scrollBottom = window.innerHeight + scrollPosition;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= pageHeight - 1) {
    // Scroll mentok bawah → aktifkan section terakhir
    current = sections[sections.length - 1].id;
  } else {
    // Cek section mana yang sedang berada di viewport atas
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        current = section.id;
      }
    });
  }

  // Update link
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});
