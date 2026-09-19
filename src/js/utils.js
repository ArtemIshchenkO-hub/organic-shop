export function showError(element, errorMsg) {
  const errorEl = element.nextElementSibling;

  element.classList.add('has-error');
  errorEl.textContent = errorMsg;
  errorEl.classList.remove('is-hidden');
}

export function hideError(element) {
  const errorEl = element.nextElementSibling;

  element.classList.remove('has-error');
  errorEl.textContent = '';
  errorEl.classList.add('is-hidden');
}

export function showAndResetFormData(form, data) {
  alert(`${JSON.stringify(data)}`);
  form.reset();
}
