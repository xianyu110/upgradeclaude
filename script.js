const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const faqItems = document.querySelectorAll(".faq-item");

const syncHeader = () => {
  if (window.scrollY > 16) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

const closeMenu = () => {
  header.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileMenu?.classList.remove("open");
};

const toggleMenu = () => {
  const isOpen = header.classList.toggle("menu-open");
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  mobileMenu?.classList.toggle("open", isOpen);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
menuToggle?.addEventListener("click", toggleMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((entry) => entry.classList.remove("open"));

    if (!isOpen) {
      item.classList.add("open");
    }
  });
});
