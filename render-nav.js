document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const status = document.body.dataset.level;
  console.log('[debug] page level:', status)

  // Load nav CSS
  const css = `<link rel="stylesheet" href="/strngr.arn/ui-nav.css">`;
  document.head.insertAdjacentHTML('beforeend', css);

  // Global navigation
  const primary_navigation = `
    <nav role="navigation" aria-label="primary navigation">
      <div class="parent-wrapper">
        <a href="/strngr.arn/">@strngr.arn</a>
        <ul>
          <li><a href="/strngr.arn/music">music</a></li>
          <li><a href="/strngr.arn/projects">projects</a></li>
          <li><a href="/strngr.arn/work">work</a></li>
          <li><a href="/strngr.arn/wireframe">wireframe</a></li>
          <li><a href="/strngr.arn/wallpapers">wallpapers</a></li>
        </ul>
      </div>
    </nav>
  `.trim();

  document.body.insertAdjacentHTML('afterbegin', primary_navigation);

  // Local navigation
  if (!status.includes('main')) {
    const sections = main.querySelectorAll('section[id]');
    let links = '';

    sections.forEach(section => {
      const id = section.id;
      const label = section.getAttribute('aria-label') || id;
      links += `<li><a href="#${id}">${label}</a></li>`;
    });

    const secondary_navigation = `
      <nav role="navigation" aria-label="secondary navigation">
        <div class="parent-wrapper">
          <a href="${window.location.pathname}">${document.title}</a>
          <ul>
            ${links}
          </ul>
        </div>
      </nav>
    `.trim();

    main.insertAdjacentHTML('afterbegin', secondary_navigation);
  }
});
