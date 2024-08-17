document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLink.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));

  const headerOffset = document.querySelector(".sticky-top").offsetHeight;

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");

      const targetSection = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: targetSection.offsetTop - headerOffset,
        behavior: "smooth",
      });
    });
  });
});
