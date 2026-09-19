export function toggleMenu({ currentTarget, target }) {
  if (!target.closest('.close-menu-btn') && !target.closest('.burger-menu-btn'))
    return;

  const navigation = currentTarget.querySelector('.header-nav');

  navigation.classList.toggle('is-open');
  document.body.classList.toggle('is-open-menu');
}

export function handleMenuClick({ currentTarget, target }) {
  if (
    !target.classList.contains('header-nav-link') &&
    !target.classList.contains('header-order-button-menu')
  ) {
    return;
  }
  const navigation = currentTarget.querySelector('.header-nav');

  document.body.classList.remove('is-open-menu');
  navigation.classList.remove('is-open');
}
