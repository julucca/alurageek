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