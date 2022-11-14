// -------- Add Form [submit form]

const addForm = document.querySelector("[data-addForm]");

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataAdd = {
        "url": event.target.elements["url"].value,
        "categoria": event.target.elements["categoria"].value,
        "produto": event.target.elements["produto"].value,
        "preco": event.target.elements["preco"].value,
        "descricao": event.target.elements["descricao"].value
    }

    localStorage.setItem("add", JSON.stringify(dataAdd));

    window.location.href = "../pages/all-products.html";
})