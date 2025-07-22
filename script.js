window.addEventListener("DOMContentLoaded", () => {
  // --- Intro Animation ---
  const introSection = document.querySelector(".intro-section");
  if (introSection) {
    introSection.classList.add("show");
    startTyping();
  }

  // --- Resume Animation ---
  const resumeBoxes = document.querySelectorAll(".resume-box.hidden");
  resumeBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("reveal");
    }, index * 200);
  });

  // --- About Section Reveal on Scroll ---
  window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about-section");
    if (!aboutSection) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionTop < screenPosition) {
      aboutSection.classList.add("reveal");
    }
  });

  // --- Contact Page Animation ---
  const contactSection = document.querySelector(".contact-container.fade-in");
  if (contactSection) {
    contactSection.classList.add("show");
  }

  // --- Active Nav Highlight ---
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});

function startTyping() {
  const textElement = document.querySelector(".intro-text p");
  if (!textElement) return;

  const text = textElement.textContent;
  textElement.textContent = "";

  let i = 0;
  const speed = 30;

  function type() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
