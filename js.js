const cl = console.log

let myProxLectures = [];
let myYearReads = [];
let newBook = "";

//Constructor
function Book(title, author) {
  this.title = title
  this.author = author
}

const $submit = document.getElementById("submit");
$submit.addEventListener("click", addBook);

//Recibe libros del input
function addBook() {
  newBook = new Book(`${document.getElementById("lname").value}, ${document.getElementById("aname").value}`)
  showNextBC()
}

// const $h1= document.createElement("h1");
// $h1.textContent="Este es un titulo";
// $div= document.getElementById("div");
// $div.appendChild($h1)


//Agrega y muestra libros de "próximas lecturas"
const showNextBC = function () {
  myProxLectures.push(newBook);
  bookCreator();
}



const $proxlect2 = document.getElementById("proxlect2")

const bookCreator = () => {
  const $div = document.createElement("div");
  const $p = document.createElement("p");
  $p.textContent = `${newBook.title}`;
  const $buttonV = document.createElement("button");
  $buttonV.textContent = "V"
  const $buttonF = document.createElement("button");
  $buttonF.textContent = "F"
  $proxlect2.appendChild($div);
  $div.appendChild($p);
  $div.appendChild($buttonV);
  $div.appendChild($buttonF);
  $divStyle=document.querySelector("div");
  $divStyle.style.display="flex"
  $buttonEvent = document.querySelector("button");
  $buttonEvent.addEventListener("click", () => adr());
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