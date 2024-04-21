
// SELECTOR UNIVERSAL >> Se arma una funcion flecha con una palabra o simbolo y le decimos que lo que hace esa funcion es ir a buscar al documento por el id. De esa manera no escribimos document.getelementbyid.... cada vez que tenemos que buscar un elemento.

const $ = (selector) => document.getElementById(selector); 

// Luego para llamar al input se puede hacer directamnete >> const input = $("newItemInput");


const shoppingList = []

const addItem = () =>{
    let newItem = $("newItemInput").value.toUpperCase();
    shoppingList.push(newItem)

    let liContent = document.createTextNode(`${newItem}`);
    console.log(liContent);
    let liItem = document.createElement('li');
    liItem.classList.add("list-item");

    liItem.appendChild(liContent);
    $("list").appendChild(liItem);

    let deleteBtn = document.createElement("button");
    liItem.appendChild(deleteBtn);
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "⛔"

    let editBtn = document.createElement("button");
    liItem.appendChild(editBtn);
    editBtn.classList.add("btn");
    editBtn.innerText = "🖍"

    $("listForm").reset();
}


$("addButton").addEventListener('click', addItem)


const createList = (lista) =>{
    lista.forEach(item => {
        let liContent = document.createTextNode(`${item}`);
        console.log(liContent);
        let liItem = document.createElement('li');
        liItem.classList.add("list-item");
    
        liItem.appendChild(liContent);
        $("list").appendChild(liItem);
    
        let deleteBtn = document.createElement("button");
        liItem.appendChild(deleteBtn);
        deleteBtn.classList.add("btn");
        deleteBtn.innerText = "⛔"
    
        let editBtn = document.createElement("button");
        liItem.appendChild(editBtn);
        editBtn.classList.add("btn");
        editBtn.innerText = "🖍"
    
        $("listForm").reset();
    });
};











