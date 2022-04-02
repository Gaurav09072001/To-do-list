var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener("click", function() {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			//removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
	// revert input value back to nothing
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0 ) {
		createListElement();
		}
}

function addListAfterPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick )

input.addEventListener("keypress", addListAfterPress)





// function listStrikethrough(event) {
// 	var listItem = document.querySelector("li");
// 	listItem.classList.toggle("done");
// }

// function deleteListItem(event) {
// 	var itemToDelete = document.getElementById("list");
// 	var myRemovedLink = myLinkList.lastChild;
// 	myLinkList.removeChild(myRemovedLink);
// }

// li.addEventListener("click", listStrikethrough)

// deleteButton.addEventListener("click", deleteListItem)