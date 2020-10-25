export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const checkValidity = (value, rules) => {
  let isValid = false;
  let errorMessage = null;
  
  if (rules.required) {
    isValid = value.trim() !== '';
    if (!isValid) {
      errorMessage = 'please input form';
    }
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (!isValid && value.length <= rules.minLength) {
      errorMessage = `min length is ${rules.minLength}`;
    }
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (!isValid && value.length >= rules.maxLength) {
      errorMessage = `max length is ${rules.maxLength}`;
    }
  }

  return {
    isValid: isValid,
    errorMessage: errorMessage
  };
}