class Book {

    public title: string;
    public author: string;
    public isbn: number;
    public isAvailable: boolean;

    constructor(title: string, author: string, isbn: number, isAvailable: boolean = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable
    }

    borrowBook(): string {
        if (this.isAvailable) {
            this.isAvailable = false
            return `${this.title} has been borrowed.`
        } else {
            return `${this.title} is not available.`
        }
    }

    returnBook(): string {
        this.isAvailable = true
        return `${this.title} has been returned.`;
    }
}

class Library {
    private books: Book[] = []

    addBook(book: Book): string {
        this.books.push(book)
        return `${book.title} added successfully!`
    }

    findBook(isbnNumber: number): string {
        const isFindBook = this.books.find(b => b.isbn === isbnNumber)
        if (isFindBook) {
            return "Book found."
        } else {
            return "book not found."
        }
    }
}

const book10 = new Book("title-1", "author-1", 1, true);
const book20 = new Book("title-2", "author-2", 2, true);

console.log(book10.borrowBook())
console.log(book10.borrowBook())
console.log(book10.returnBook())

const Library10 = new Library();

console.log(Library10.addBook(book10))
console.log(Library10.addBook(book20))
console.log(Library10.findBook(2))
console.log(Library10.findBook(3))