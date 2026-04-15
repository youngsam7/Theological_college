(function () {
  renderHeader();
  renderFooter();
  document.body.classList.add('fade-page');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'themeToggle') {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }
  });

  window.addEventListener('scroll', () => {
    const header = document.getElementById('stickyHeader');
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  if (window.AOS) AOS.init({ duration: 650, once: true });

  document.querySelectorAll('[data-skeleton-target]').forEach((target) => {
    target.classList.add('skeleton');
    setTimeout(() => target.classList.remove('skeleton'), 700);
  });

  const year = document.getElementById('yearText');
  if (year) year.textContent = new Date().getFullYear();
})();
