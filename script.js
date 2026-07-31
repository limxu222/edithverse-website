// Progressive enhancement only. The page is complete with JS disabled.
// Highlights the nav link for the section currently in view.
(function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]:not(.btn)')
  );
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(function (s) { io.observe(s); });
})();
