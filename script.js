// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Typed.js Effect
const typed = new Typed("#typed", {
  strings: ["Creative Coder", "UI Dreamer", "Web Wizard"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});

// AOS Init
AOS.init({
  duration: 1000,
});

// particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00f0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
});

// Background audio control
const audio = document.getElementById("background-audio");
const audioToggle = document.getElementById("audioToggle");
let isMuted = false;

audioToggle.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  audioToggle.textContent = isMuted ? "🔇" : "🔈";
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-bar");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const skill = bar.getAttribute("data-skill");
    let width = 0;
    if (skill === "HTML") width = 90;
    if (skill === "CSS") width = 85;
    if (skill === "JavaScript") width = 80;
    bar.style.width = width + "%";
  });
}

document.addEventListener("DOMContentLoaded", animateSkillBars);
