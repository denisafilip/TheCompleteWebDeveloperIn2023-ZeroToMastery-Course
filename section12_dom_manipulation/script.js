var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var shoppingListElements = document.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("delete");

function removeListItem(event) {
	event.target.removeEventListener("click", removeListItem, false);
	event.target.parentNode.remove();
}

for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", removeListItem, false);
}

function toggleDoneClass(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}	
}

function createDeleteButton(shoppingListElement) {
	var deleteButton = document.createElement("BUTTON");
	deleteButton.innerHTML = "Delete Item";
	deleteButton.classList.add("delete");
	deleteButton.addEventListener("click", removeListItem, false);
	shoppingListElement.innerHTML = shoppingListElement.innerHTML + " ";
	shoppingListElement.appendChild(deleteButton);
}

function inputLength(event) {
	return input.value.length > 0;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}
	

function addListElementAfterClick() {
	if (inputLength()) {
		createListElement();
	}
}

function addListElementAfterKeypress(event) {
	if (inputLength() && event.key === "Enter") {
		createListElement();
	}
} 

button.addEventListener("click", addListElementAfterClick);

input.addEventListener("keydown", addListElementAfterKeypress);

ul.addEventListener("click", toggleDoneClass);

// shoppingListElements.forEach((element) => element.addEventListener("click", function() {
// 	element.classList.toggle("done");
// }));

// document.getElementById("first")
// // document.getElementsByClassName("second")

// document.getElementsByClassName("second")
// // HTMLCollection [p.second]

// document.querySelector("h1");
// // <h1>Shopping List </h1>

// document.querySelectorAll("li");
// /* [li, li, li, li, li, li] */

// document.querySelectorAll("li")[1];
// //Jello
// document.querySelectorAll("li")[1].parentElement;
// //<ul>...</ul>

// document.querySelector("li").getAttribute("random");
// // '123'

// document.querySelector("li").setAttribute("random", "1000");

// document.querySelector("li").classList;
// //DOMToken:ist(2) ['bold', 'red', value: 'bold red']

// //Change CSS styles
// document.querySelector("h1").style.background = "yellow";
// //BUT separation of concerns

// document.querySelector("h1").innerHTML = "<strong>!!</strong>";

// //CACHE the selectors in variables
// var h1 = document.querySelector("h1");
// //we do not need the document to look up the h1 everytime

/*input.addEventListener("keydown", function (event) {
	if (input.value.length > 0 && event.key === "Enter") {

	}
})*/