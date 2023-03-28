# Level-1-Task-17--Programming-in-JavaScript-II-Event-handling

## Task

Follow these steps:

● In this task, you will be required to modify your files from the previous task.

● Follow these steps:

○ main.js: Modify your function which displays each item as list elements as follows:

■ Each created list element should contain a span element with a class named close. Each span element should have a value of ‘\u00D7’, which represents the character ‘x’ in unicode.

■ As the last line of this function, call a function (described below) to delete an item from the shopping list.

■ Create a function which will update the grocery items array by getting the value of the text in the <input> tag and adding it to the array.

■ If the input text field is empty, display an alert to the user indicating that they should insert an item. Else, add the input text to the array.

■ Once the item has been added to the array or the alert displayed, reset the input text’s value to an empty string.

■ As the last line of this function, call the function created in the previous task to display the updated array items.

■ Create a function to delete items from both the array and the Shopping List display.

■ Add a click event listener to each <span> element with a close class — when the event is triggered, delete the item from the array and set the display style to none for the specific list parent element.

■ Add a click event listener to the html element with the ID of itemList.

■ If the event’s tag name is a list tag, toggle a checked class on the event element.

■ Add a key up event listener to the HTML element with an input ID.

■ If the event key code is equal to ‘13’ (the key code for the ‘Enter’ key), trigger a click() function on the element with an addButton ID.

○ CSS:

■ All elements with a checked class should have styling which indicates that the item has been checked off the shopping list.

○ HTML:
