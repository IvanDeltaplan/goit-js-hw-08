//*===============================================================
//* додаємо з бібліотеки lodash метод throttle
import throttle from 'lodash.throttle';
//*===============================================================
//* створюємо ключ для локального сховища
const LOCAL_KEY = 'feedback-form-state';


//!=================== варіант 2 робочий ==============================
// * доступ до форми
const form = document.querySelector('.feedback-form');
// console.log(form);

// * слухачі кнопки та інпутів
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500)); // ставимо час для обновлення рядків

// * провіряємо після перезагрузки вікна чи є щось в локальному сховищі
const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
form.elements.email.value = dataFromLocalStorage?.email || '';
form.elements.message.value = dataFromLocalStorage?.message || '';

// * створюємо об'єкт
const formData = {};
// console.log(formData);

// * блокуємо обновлення сторінки та ресетуємо інпути + локальне сховище
function onFormSubmit(e) {
  e.preventDefault();

  const dataLocal = localStorage.getItem(LOCAL_KEY);
  // console.log(dataLocal);

  const autDataLocalStorage = JSON.parse(dataLocal);

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  console.log(autDataLocalStorage);
}

// * виводимо значення з інпутів та записуємо в локальне сховище
function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
  localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify({ ...dataFromLocalStorage, [e.target.name]: e.target.value })
  );
}

