const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras")

botaoSalvarItem.addEventListener("click", adicionarItem)

function adicionarItem(evento){
    evento.preventDefault()
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");
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
    containerBotoes.appendChild(botaoRemover)


    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista)



}