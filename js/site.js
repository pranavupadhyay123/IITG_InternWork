document.addEventListener("DOMContentLoaded", () => {
  const navCards = document.querySelectorAll(".site-nav-card");

  navCards.forEach((card) => {
    const toggle = card.querySelector("[data-nav-toggle]");
    const nav = card.querySelector("[data-site-nav]");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(`.site-nav-link[data-nav-target="${page}"]`).forEach((link) => {
      link.classList.add("is-active");
    });
  }
});
