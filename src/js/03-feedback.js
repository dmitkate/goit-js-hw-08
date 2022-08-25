import throttle from 'lodash.throttle';

const formElement = document.querySelector(".feedback-form")
const emailElement = document.querySelector("input[name='email']")
const messageElement = document.querySelector("textarea[name='message']")
const LOCAL_KEY = "feedback-form-state"

localStorageInformatoin()

const formInput = throttle((function(event) {
    const inputInformation = {
        email: formElement.elements.email.value,
        message: formElement.elements.message.value
    }
    localStorage.setItem(LOCAL_KEY, JSON.stringify(inputInformation))
}), 500)

function formSubmit (event) {
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)))
    event.target.reset()
    localStorage.removeItem(LOCAL_KEY)
}

function localStorageInformatoin() {
    const savedInfo = JSON.parse(localStorage.getItem(LOCAL_KEY))

    if(savedInfo) {
        emailElement.value = savedInfo.email
        messageElement.value = savedInfo.message
    }
}

formElement.addEventListener("input", formInput)
formElement.addEventListener("submit", formSubmit)