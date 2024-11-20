
const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

let formData = { email: "", message: "" };

//Local storage
const localStorageKey = "feedback-form-state";
const savedData = localStorage.getItem(localStorageKey) ?? "";

if (savedData) {
  formData = JSON.parse(savedData);
  email.value = formData.email;
  message.value = formData.message;
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


//Submit 
form.addEventListener("submit", (event) => {
  event.preventDefault()

 if (!email.value || !message.value) {
        console.log("All form fields must be filled in")
    } else {
  
        console.log(formData);
    }
    localStorage.removeItem("feedback-form-state");
    form.reset();
    formData = { email: "", message: "" };
});







function changePlaceholderOnFocus(event) {
  event.target.placeholder = "Type area"; 
}

email.addEventListener("focus", changePlaceholderOnFocus);
message.addEventListener("focus", changePlaceholderOnFocus);


function resetPlaceholderOnBlur(event) {
  event.target.placeholder = ""; 
}
email.addEventListener("blur", resetPlaceholderOnBlur);
message.addEventListener("blur", resetPlaceholderOnBlur);








