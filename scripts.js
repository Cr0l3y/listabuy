const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault()
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxinput = document.createElement("input")
    checkboxinput.type = "checkbox";
    checkboxinput.classList.add("checkbox-input");
    checkboxinput.id = "checkbox-" + contador++;
    

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxinput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxinput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);




    const NomeDoItem = document.createElement("p");
    NomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(NomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover"

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);


}