(function () {
  const nav = [
    ['Home', '/index.html'],
    ['About', '/about.html'],
    ['Academics', '/academics.html'],
    ['Admissions', '/admissions.html'],
    ['Campus Life', '/campus-life.html'],
    ['Sermons & Resources', '/sermons-resources.html'],
    ['News & Events', '/news-events.html'],
    ['Contact', '/contact.html']
  ];

  const path = window.location.pathname || '/index.html';

  window.renderHeader = function renderHeader() {
    const links = nav
      .map(([name, href]) => {
        const active = path === href || (path === '/' && href === '/index.html');
        return `<a class="${active ? 'active' : ''}" href="${href}">${name}</a>`;
      })
      .join('');
    document.getElementById('site-header').innerHTML = `
      <header class="site-header" id="stickyHeader">
        <div class="container nav-wrap">
          <a href="/index.html" class="logo">Covenant Theological College</a>
          <nav class="nav-links">${links}</nav>
          <div class="header-tools">
            <button id="themeToggle" class="btn btn-secondary">Dark mode</button>
            <a class="btn btn-primary" href="/admissions/apply.html">Apply</a>
          </div>
        </div>
      </header>
    `;
  };

  window.renderFooter = function renderFooter() {
    document.getElementById('site-footer').innerHTML = `
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            <h3>Covenant Theological College</h3>
            <p>Forming faithful scholars, resilient pastors, and Spirit-led leaders for the Church and the world.</p>
          </div>
          <div><h4>Academics</h4><a href="/academics.html">Programs</a><br><a href="/academics/faculty.html">Faculty</a></div>
          <div><h4>Admissions</h4><a href="/admissions.html">Requirements</a><br><a href="/admissions/apply.html">Apply now</a></div>
          <div><h4>Contact</h4><a href="/contact.html">Departments</a><br><a href="/news-events.html">Events</a></div>
        </div>
      </footer>
    `;
  };

  window.renderBreadcrumb = function renderBreadcrumb(items) {
    const html = items.map((item, i) => i < items.length - 1 ? `<a href="${item.href}">${item.label}</a>` : `<span>${item.label}</span>`).join(' / ');
    const el = document.getElementById('breadcrumb');
    if (el) el.innerHTML = `<div class="container breadcrumb">${html}</div>`;
  };
})();
