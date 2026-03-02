const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.06,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${index * 80}ms`;
  revealObserver.observe(el);
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const countdownEl = document.getElementById('countdown');
if (countdownEl) {
  const openingDate = new Date('2026-03-06T19:00:00-06:00');
  const now = new Date();
  const diff = openingDate.getTime() - now.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  if (diff > 0) {
    const days = Math.ceil(diff / oneDay);
    countdownEl.textContent = `Faltan ${days} dias para abrir`;
  } else {
    countdownEl.textContent = 'Ya inauguramos, te esperamos';
  }
}
