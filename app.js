let addBtn = document.getElementById("addButon");
let inputField = document.getElementById("inputField");
let todoContainer = document.getElementById("todoContainer")

addBtn.addEventListener("click", () => {

    var paragraf = document.createElement("li")
     
    paragraf.innerHTML=inputField.value;

    todoContainer.appendChild(paragraf)
})