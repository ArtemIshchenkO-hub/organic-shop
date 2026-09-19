import { animateScrollToTopBtn, scrollToTop } from './js/back-to-top';
import { toggleFaqs } from './js/faqs';
import {
  focusInputHandler,
  handleInputValidation,
  handleSubmit,
} from './js/form/form-handlers';
import { initActiveMenu } from './js/header/active-menu';
import { animateHeader } from './js/header/header';
import { handleMenuClick, toggleMenu } from './js/header/mobile-menu';
import { refs } from './js/refs';

initActiveMenu();

window.addEventListener('scroll', animateScrollToTopBtn, { passive: true });
window.addEventListener('scroll', animateHeader, { passive: true });
refs.headerEl.addEventListener('click', toggleMenu);
refs.headerEl.addEventListener('click', handleMenuClick);
refs.faqsList.addEventListener('click', toggleFaqs);

refs.contactsForm.addEventListener('focusout', handleInputValidation);
refs.contactsForm.addEventListener('focusin', focusInputHandler);
refs.contactsForm.addEventListener('submit', handleSubmit);

refs.backToTopBtn.addEventListener('click', scrollToTop);
