import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateFormStorage();

const obj = {
    email: '',
    message: '',
}

function onFormInput(event) {
    if (event.target.nodeName == 'INPUT') {
        obj.email = event.target.value;
    } else if (event.target.nodeName == 'TEXTAREA') {
        obj.message = event.target.value;
    };
    
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(obj);
}

function populateFormStorage() {
    const savedFormValue = localStorage.getItem('feedback-form-state');

    if (savedFormValue) {
        console.log('savedFormValue:', savedFormValue);
        form.value = JSON.parse(savedFormValue)
        console.log(input.value = form.value.email);
        console.log(textarea.value =form.value.message);
    }
};