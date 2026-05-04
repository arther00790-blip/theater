(function () {
  const links = document.querySelectorAll('.nav a[data-link]');
  const sections = ['top', 'story', 'cast', 'performance', 'ticket', 'news']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const headerH = 80;

  function update() {
    const y = window.scrollY + headerH + 20;
    let current = sections[0]?.id || 'top';
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id;
    }
    links.forEach(a => {
      a.classList.toggle('is-current', a.dataset.link === current);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('load', update);
  update();
})();
