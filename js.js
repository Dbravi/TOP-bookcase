const cl = console.log

let myProxLectures = [];
let myYearReads = [];
let newBook = ""

//Constructor
function Book(title, author) {
  this.title = title
  this.author = author
}

//Recibe libros del input
function addBook() {
  newBook = new Book(`${document.getElementById("lname").value}, ${document.getElementById("aname").value}`)
  showNextBC()
}



//Agrega y muestra libros de "próximas lecturas"
const showNextBC = function () {
  myProxLectures.push(newBook)
  const para = document.createElement("p");
  para.innerText = newBook.title;
  document.getElementById("proximos").append(para);

  const buttonOk = document.createElement("button");
  buttonOk.innerText = "V";
  document.getElementById("leido").prepend(buttonOk);

  const buttonDel = document.createElement("button");
  buttonDel.innerText = "X";
  document.getElementById("eliminar").prepend(buttonDel);
}

//Elimina libros de proximas Lecturas

function removeBook() {
  myProxLectures.pop();
  const element = document.getElementById('proximos');
  element.remove();
}


//Recibe input de proximas lecturas y pasa a Mis leidos 2022

const adr = function addReadBook() {
  myYearReads.push(this.newBook)
  const para2 = document.createElement("h4");
  para2.innerText = newBook.title;
  document.getElementById("lecturas").appendChild(para2);
}

console.log(myProxLectures)