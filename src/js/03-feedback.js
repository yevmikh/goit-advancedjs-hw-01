import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const textInput = document.querySelector('textarea[name="message"]');

// get the data from localSore
const savedFormData = localStorage.getItem('feedback-form-state');

// if the data exist in local store ==>
if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);

  emailInput.value = parsedData.email;
  textInput.value = parsedData.message;
}

feedbackForm.addEventListener('input', throttle(handlerInput, 500));
feedbackForm.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  evt.preventDefault();
  const formSaved = {
    email: emailInput.value,
    message: textInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formSaved));
}

// removing data from localStorage & input if form submitted
function handlerSubmit(evt) {
  evt.preventDefault();
  const formSaved = {
    email: emailInput.value,
    message: textInput.value,
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = ' ';
  textInput.value = ' ';

  console.log(formSaved);
}
// saving text in fields
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('output-email').innerHTML = emailInput.value;
  document.getElementById('output-message').innerHTML = textInput.value;
});
