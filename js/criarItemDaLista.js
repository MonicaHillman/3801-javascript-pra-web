
import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";


let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");



    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkbox-" + contador++;

    checkboxInput.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
    
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
        }

    })

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem)

    
    const itemData = document.createElement("p");
    itemData.innerText = gerarDiaDaSemana();
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}