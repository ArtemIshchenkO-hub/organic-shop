export function toggleFaqs({ target }) {
  const item = target.closest('.faqs-question-item');
  item.classList.toggle('is-open');
}
