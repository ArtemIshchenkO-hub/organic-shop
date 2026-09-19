export function toggleMenu({ currentTarget, target }) {
  console.log(target);
  if (!target.closest('.close-menu-btn') && !target.closest('.burger-menu-btn'))
    return;

  const navigation = currentTarget.querySelector('.header-nav');

  navigation.classList.toggle('is-open');
  document.body.classList.toggle('is-open-menu');
}
