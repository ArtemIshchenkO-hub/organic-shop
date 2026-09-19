const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex =
  /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’-]+(?: [A-Za-zА-Яа-яЇїІіЄєҐґ'’-]+)*$/;

function validateEmail(value) {
  return emailRegex.test(value);
}

function validateName(value) {
  return value.length >= 3 && nameRegex.test(value);
}

function validateMessage(value) {
  return value.length > 16;
}

export function validateInputs(element) {
  const value = element.value.trim();

  let validator;
  let errorMsg;

  switch (element.name) {
    case 'name':
      validator = validateName;
      errorMsg = 'Name must be at least 3 letters';
      break;

    case 'email':
      validator = validateEmail;
      errorMsg = 'Please enter a valid email';
      break;

    case 'message':
      validator = validateMessage;
      errorMsg = 'Message must be longer than 16 symbols';
      break;

    default:
      return {
        isValid: true,
        errorMsg: '',
      };
  }

  const isValid = validator(value);

  return {
    isValid,
    errorMsg: isValid ? '' : errorMsg,
  };
}
