const STORAGEFORM = 'feedback-form-state';
import { saveToStorage, loadFromStorage } from './storage.js';
import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const dataHolder = {
  email: '',
  message: '',
};
function saveInput(event) {
  dataHolder.email = event.currentTarget[0].value;
  dataHolder.message = event.currentTarget[1].value;
  const savedInput = saveToStorage(STORAGEFORM, dataHolder);
  console.log
}

function onSubmit(submitObj) {
  submitObj.preventDefault();
  console.log(dataHolder);
  formCleaner();
  storageCleaner();
}
function formCleaner() {
  feedbackForm[0].value = '';
  feedbackForm[1].value = '';
}
function storageCleaner() {
  localStorage.removeItem(STORAGEFORM);
}
feedbackForm.addEventListener('input', throttle(saveInput), 500);
feedbackForm.addEventListener('submit', onSubmit);
const retrivedData = loadFromStorage(STORAGEFORM);
//console.log(retrivedData)


if (retrivedData === undefined) {
  const savedInput = saveToStorage(STORAGEFORM, dataHolder);
} 
// else if (retrivedData.email === '' || retrivedData.message === '') {
//   return;
// }
 else {
  feedbackForm[0].value = retrivedData.email;
  feedbackForm[1].value = retrivedData.message;
}

//console.log(retrivedData.email) 