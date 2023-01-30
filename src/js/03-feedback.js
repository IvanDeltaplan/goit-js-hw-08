//Imort storage operation functions
import { saveToStorage, loadFromStorage } from './storage.js';

//Imort throttle function
import throttle from 'lodash.throttle';

//looking for form
const feedbackForm = document.querySelector('.feedback-form');

//create storage obj
const dataHolder = {
  email: '',
  message: '',
};

//LocalStorage filler function
function saveInput(event) {
  dataHolder.email = event.currentTarget[0].value;
  dataHolder.message = event.currentTarget[1].value;
  const savedInput = saveToStorage('feedback-form-state', dataHolder);
}
//on submit function
function onSubmit(submitObj) {
  submitObj.preventDefault();
  console.log(dataHolder);
  formCleaner();
  storageCleaner();
}

// form cleaning
function formCleaner() {
  feedbackForm[0].value = '';
  feedbackForm[1].value = '';
}

//LocalStorage cleaning
function storageCleaner() {
  localStorage.removeItem('feedback-form-state');
}

//setting listener to form input
feedbackForm.addEventListener('input', throttle(saveInput), 500);

//setting listener to form submit
feedbackForm.addEventListener('submit', onSubmit);

//manipulating data from storage on page reload
const retrivedData = loadFromStorage('feedback-form-state');
if (retrivedData === undefined) {
  // filling empty db
  const savedInput = saveToStorage('feedback-form-state', dataHolder);
} else if (retrivedData.email === '' || retrivedData.message === '') {
  return;
} else {
  // filling form from Local storage
  feedbackForm[0].value = retrivedData.email;
  feedbackForm[1].value = retrivedData.message;
}