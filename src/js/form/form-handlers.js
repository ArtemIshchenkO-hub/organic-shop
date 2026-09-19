import { validateInputs } from './form-validations';
import { hideError, showError, showAndResetFormData } from '../utils';

function validateField(element) {
  if (element.nodeName === 'BUTTON' || element.type === 'submit') return true;

  const { isValid, errorMsg } = validateInputs(element);

  if (!isValid) {
    showError(element, errorMsg);
  } else {
    hideError(element);
  }

  return isValid;
}

export function handleInputValidation({ target }) {
  if (target.nodeName === 'BUTTON') return;

  validateField(target);
}

export function focusInputHandler({ target }) {
  if (target.nodeName === 'BUTTON') return;

  hideError(target);
}

export function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const elements = [...form.elements].filter(
    el => el.nodeName !== 'BUTTON' && el.type !== 'submit'
  );

  let isValid = true;
  elements.forEach(element => {
    const isFieldValid = validateField(element);
    if (!isFieldValid) isValid = false;
  });

  if (!isValid) return;

  const { name, email, message } = form.elements;
  const formData = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
  };

  showAndResetFormData(form, formData);
}
