const main = document.querySelector("main");
const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
}

addBookToLibrary("Hobbit", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary("Złodziejka książek", "Markus Zusak", 576, "not read yet");
addBookToLibrary(
	"Harry Potter i Kamień Filozoficzny",
	"J.K. Rowling",
	256,
	"not read yet"
);
addBookToLibrary("Władca Pierścieni", "J.R.R. Tolkien", 1216, "not read yet");
addBookToLibrary("1984", "George Orwell", 328, "not read yet");
addBookToLibrary(
	"Mistrz i Małgorzata",
	"Michaił Bułhakow",
	496,
	"not read yet"
);
addBookToLibrary("Dziennik Anny Frank", "Anne Frank", 352, "not read yet");
addBookToLibrary(
	"Mężczyźni, którzy nienawidzą kobiet",
	"Stieg Larsson",
	644,
	"not read yet"
);
addBookToLibrary("Przygody Toma Sawyera", "Mark Twain", 256, "not read yet");

function createCard() {
	for (i = 0; i < myLibrary.length; i++) {
		const card = document.createElement("article");
		const h4 = document.createElement("h4");
		const ul = document.createElement("ul");
		main.appendChild(card);
		card.appendChild(h4);
		card.appendChild(ul);
		for (let j = 0; j <= 3; j++) {
			const li = document.createElement("li");
			ul.appendChild(li);
		}
		// Screen values
		h4.textContent = myLibrary[i].title;
		ul.childNodes[0].textContent = myLibrary[i].author;
		ul.childNodes[1].textContent = myLibrary[i].pages;
		ul.childNodes[2].textContent = myLibrary[i].read;
	}
	if (myLibrary.length) {
		const button = document.createElement("button");
		button.classList.add("plus");
		main.appendChild(button);
		button.textContent = "Add new book";
	}
}

createCard();
// button
const plus = document.querySelector(".plus");
function createForm() {
	const form = document.createElement("form");
	main.appendChild(form);

	for (let j = 0; j <= 4; j++) {
		// const div = document.createElement("div");
		const label = document.createElement("label");
		form.appendChild(label);
		if (j === 3) {
			label.textContent = "Readed?";
		}
		if (j === 4) {
			label.innerHTML = "<!--  -->";
		}
	}
	const labels = document.querySelectorAll("label");
	labels.forEach(label => {
		const input = document.createElement("input");
		if (label.textContent.trim() === "Readed?") {
			input.setAttribute("type", "checkbox");
		} else if (label.innerHTML.trim() === "<!--  -->") {
			input.setAttribute("type", "submit");
		} else {
			input.setAttribute("type", "text");
		}
		label.appendChild(input);
	});
	// Screen values
	labels[0].childNodes[0].setAttribute("placeholder", "title");
	labels[1].childNodes[0].setAttribute("placeholder", "author");
	labels[2].childNodes[0].setAttribute("placeholder", "pages");

	// exit
	const exit = document.createElement("button");
	exit.classList.add("exit");
	exit.textContent = "Exit";
	form.appendChild(exit);
}
plus.addEventListener("click", function handler() {
	createForm();
	plus.removeEventListener("click", handler);
});
