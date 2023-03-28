var groceryList = ["apples", "bread", "banana", "soda"]; //Array of list items

let list = document.getElementById("list"); // get the unordered list element

displayList();

function delItem(index) {
  //delete a item function from the list
  groceryList.splice(index, 1);
  displayList();
}

function displayList() {
  // display item list function
  list.innerHTML = ""; //once the display list is shown after the item is added to the list it shows an empty string in the field
  for (i = 0; i < groceryList.length; i++) {
    // Adds array of items to page
    let listItem = document.createElement("li"); //creating listItem element

    listItem.innerHTML = `${groceryList[i]} <span class ="close" onclick = "delItem(${i})">\u00D7</span>`; //setting value for each listItem in html
    list.appendChild(listItem); //adding listItem to the unordered list
  }
}

//toggle check
var ul = document.getElementById("list");
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function addItem() {
  //add item function
  let item = document.getElementById("textValue"); //getting the value of the text by the getElementById
  if (item.value == "") {
    //If add button is clicked and the string is empty alert is shown
    alert("Please insert an item");
  } else {
    groceryList.push(item.value); //adds an item to the list
    displayList();
  }
  item.value = ""; // reset input value into an empty string
}
