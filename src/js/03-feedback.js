import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const input = {};

const inputForm = document.querySelector('.feedback-form');
 
inputForm.addEventListener('input', throttle(newInput, 500));   
    
function newInput(event) {
    input.email = inputForm.elements.email.value;
    input.message = inputForm.elements.message.value;
  localStorage.setItem(KEY, JSON.stringify(input));
  
}
 
updatePage();

function updatePage() {
    
    const savedData = localStorage.getItem(KEY);

    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        inputForm.email.value = email;
        inputForm.message.value = message;
    }
}

inputForm.addEventListener('submit', onFormSubmit);  

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;
  if (email === '' || message === '') {
    alert('Please fill in all the fields!');
  } else {
    localStorage.removeItem('feedback-form-state');
    console.log({ email, message });
  }
  
    event.currentTarget.reset();
  localStorage.removeItem(KEY);
}