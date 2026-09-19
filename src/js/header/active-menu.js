import { refs } from '../refs';

function activeMenuObserver(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.id;
      const activeLink = document.querySelector(
        `.header-nav-link[href="#${activeId}"]`
      );

      if (activeLink) {
        refs.menuLinks.forEach(link => link.classList.remove('is-active'));
        activeLink.classList.add('is-active');
      } else {
        if (activeLink) activeLink.classList.remove('is-active');
      }
    }
  });
}

export function initActiveMenu() {
  const observer = new IntersectionObserver(activeMenuObserver, {
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0,
  });

  refs.sections.forEach(section => observer.observe(section));
}
