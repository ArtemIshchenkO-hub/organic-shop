import { refs } from './refs';

let ticking = false;

function updateButton() {
  const isScrolledDown = window.scrollY > 700;
  refs.backToTopBtn.classList.toggle('is-visible', isScrolledDown);

  const sectionRect = refs.benefitsSection.getBoundingClientRect();

  const buttonTop = window.innerHeight - 30 - refs.backToTopBtn.offsetHeight;
  const buttonBottom = buttonTop + refs.backToTopBtn.offsetHeight;

  const isOverSection =
    buttonBottom > sectionRect.top && buttonTop < sectionRect.bottom;

  refs.backToTopBtn.classList.toggle('is-benefits', isOverSection);

  ticking = false;
}

export function animateScrollToTopBtn() {
  if (!document.body.classList.contains('is-open-menu') && !ticking) {
    ticking = true;
    requestAnimationFrame(updateButton);
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}
