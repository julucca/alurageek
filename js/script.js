// -------- Forms [check inputs + error message] 

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
        valueMissing: "O campo de senha não pode estar vazio.",
        patternMismatch: "Por favor, preencha uma senha válido. A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
    },
    name: {
        valueMissing: "O campo nome não pode estar vazio."
    },
    message: {
        valueMissing: "O campo mensagem não pode estar vazio."
    },
    url: {
        valueMissing: "O campo url não pode estar vazio."
    },
    categoria: {
        valueMissing: "O campo categoria não pode estar vazio."
    },
    produto: {
        valueMissing: "O campo produto não pode estar vazio."
    },
    preco: {
        valueMissing: "O campo preço não pode estar vazio."
    },
    descricao: {
        valueMissing: "O campo descrição não pode estar vazio."
    }
}

function checkInput(input) {
    let message = "";
    input.setCustomValidity("");

    typesOfErrors.forEach(error => {
        if (input.validity[error]) {
            message = messages[input.id][error];
        }

        const errorMessage = input.parentNode.querySelector(".message-error");
        const inputValidator = input.checkValidity();

        if (!inputValidator) {
            errorMessage.textContent = message;
            input.classList.add("input--invalid");
        } else {
            errorMessage.textContent = "";
            input.classList.remove("input--invalid");
        }
    })
}


// -------- Contact | Footer [submit form] 

const contactForm = document.querySelector("[data-contactForm]");
const contactInputs = document.querySelectorAll("[required]");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const alert = event.target.querySelector(".form__alert")

    const dataContact = {
        "name": event.target.elements["name"].value,
        "message": event.target.elements["message"].value
    }

    if (dataContact) {
        alert.innerText = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
        alert.classList.add("form__alert--success")

        setTimeout(() => {
            alert.classList.remove("form__alert--success")
            alert.innerText = "";
        }, 5000);
    } 

    contactForm.reset();
})