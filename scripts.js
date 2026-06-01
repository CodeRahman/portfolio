
// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
mx = e.clientX; my = e.clientY;
cursor.style.left = mx + 'px';
cursor.style.top = my + 'px';
});

function animateRing() {
rx += (mx - rx) * 0.12;
ry += (my - ry) * 0.12;
ring.style.left = rx + 'px';
ring.style.top = ry + 'px';
requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .skill-block, .social-link').forEach(el => {
el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
    ring.style.borderColor = 'rgba(232,168,56,0.8)';
});
el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.borderColor = 'rgba(232,168,56,0.5)';
});
});

// Navbar scroll
window.addEventListener('scroll', () => {
document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-up').forEach((el, i) => {
el.style.transitionDelay = (i % 4) * 0.1 + 's';
observer.observe(el);
});

// Hero entrance
document.querySelector('#hero .status-pill').style.animation = 'none';
const heroEls = document.querySelectorAll('#hero .status-pill, #hero .hero-eyebrow, #hero h1, #hero .hero-sub, #hero .hero-actions, #hero .hero-stats');
heroEls.forEach((el, i) => {
el.style.opacity = '0';
el.style.transform = 'translateY(20px)';
el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
}));
});

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xnjreqbw", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
    form.reset();

    const button = form.querySelector("button");

    button.textContent = "Message Sent ✓";
    button.style.backgroundColor = "var(--green)";
    button.style.color = "#fff";

    setTimeout(() => {
        button.textContent = "Send Message →";
        button.style.backgroundColor = "";
        button.style.color = "";
    }, 3000);
    } else {
        alert("Failed to send message. Please try again.");
    }
  });
}