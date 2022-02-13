

var sp1 = document.createElement("span");

let ingrediente = document.createTextNode(ingredient)
// Guarda a referência do elemento atraś do qual nos queremos inserir o novo elemento
var sp2 = document.getElementById("elementoFilho");
// Guarda a referência do elemento pai
var divPai = sp2.parentNode;

// Insere o novo elemento no DOM antes de sp2
divPai.insertBefore(sp1, sp2);
