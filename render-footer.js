document.addEventListener('DOMContentLoaded', () => {
  const head = document.querySelector('head');

  // Load footer CSS dynamically
  const css = `<link rel="stylesheet" href="/strngr.arn/ui-footer.css">`;
  head.insertAdjacentHTML('beforeend', css);

  const path = window.location.pathname.split('/').filter(Boolean);

  // Start with homepage crumb (adjust href as needed)
  const crumbs = [{ name: '@strngr.arn', href: '/strngr.arn/' }];

  // Build crumbs from path segments
  path.forEach((part, i) => {
    // Build href up to this part
    const href = '/' + path.slice(0, i + 1).join('/') + '/';

    // For display name, you could:
    // - Use part as is (raw folder name)
    // - Or map nicer names here if needed

    crumbs.push({ name: decodeURIComponent(part), href });
  });

  // Build breadcrumb list items:
  let crumbsHTML = crumbs
    .map((crumb, idx) => {
      const isLast = idx === crumbs.length - 1;

      if (isLast) {
        // Last crumb: current page, no link, add aria-current
        return `<li aria-current="page">${crumb.name}</li>`;
      } else {
        return `<li><a href="${crumb.href}">${crumb.name}</a></li>`;
      }
    })
    .join('<span aria-hidden="true"> → </span>'); // separator

  // Build main footer nav links (adjust hrefs to your site structure)
  const mainNavLinks = `
    <ul>
      <li><a href="/strngr.arn/music">music</a></li>
      <li><a href="/strngr.arn/projects">projects</a></li>
      <li><a href="/strngr.arn/work">work</a></li>
      <li><a href="/strngr.arn/wireframe">wireframe</a></li>
    </ul>
  `;

  const footerHTML = `
    <footer role="contentinfo" aria-label="site footer">
      <div class="parent-wrapper">
        <nav aria-label="breadcrumb">
          <ol>
            ${crumbsHTML}
          </ol>
        </nav>
        ${mainNavLinks}
        <small>site version 1.3</small>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
