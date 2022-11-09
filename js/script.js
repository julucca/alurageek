// -------- Login Form [check inputs + error message] 

const formInputs = document.querySelectorAll("[required]");

formInputs.forEach((input) => {
    input.addEventListener("blur", () => checkInput(input));
    input.addEventListener("invalid", event => event.preventDefault());
}) 

const typesOfErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
]

const messages = {
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        patternMismatch: "Por favor, preencha um e-mail válido.",
        tooShort: "Por favor, peencha um e-mail válido."
    },
    password: {
        valueMissing: "O campo de senha não pode estar vazio."
    }
}

function checkInput(input) {
    let message = "";
    input.setCustomValidity("");

    typesOfErrors.forEach(error => {
        if (input.validity[error]) {
            message = messages[input.id][error];
            console.log(message);
        }

        const errorMessage = input.parentNode.querySelector(".message-error");
        const inputValidator = input.checkValidity();

        if (!inputValidator) {
            errorMessage.textContent = message;
            input.style.border = "2px solid red";
        } else {
            errorMessage.textContent = "";
            input.style.border = "none";
        }
    })
}


// -------- Login Form [submit form]

const formLogin = document.querySelector("[data-formLogin]");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataLogin = {
        "email": event.target.elements["email"].value,
        "password": event.target.elements["password"].value
    }

    localStorage.setItem("data", JSON.stringify(dataLogin));

    window.location.href = "../pages/all-products.html";
})