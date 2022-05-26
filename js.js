const cl=console.log

let myLibrary = [];

function addBookToLibrary() {
  // do stuff here
}

function Book(title, author,pages,readcheck) {
    this.title = title
    this.author = author
    this.pages = pages
    this.marker = readcheck
    }
  
  Book.prototype.info = function() {
    return this.title
  }

  const Book1 = new Book('Lord of the rings', 'Tolkien', 623, 'read')
  const Book2 = new Book('Aleph', 'JLB', 253, 'read')


  cl(Book1)

