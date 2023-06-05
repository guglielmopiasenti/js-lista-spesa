// getting the element from the DOM
const shoppingListPrint = document.getElementById('shopping');


// For loop
let shoppingList = ["Bread", "Milk", "Eggs", "Fruit", "Vegetables"];

// for (var i = 0; i < shoppingList.length; i++) {
//     var listItem = document.createElement("li");
//     listItem.innerText = shoppingList[i];
//     shoppingListPrint.appendChild(listItem);
// }

// Print with a while loop
var i = 0;
while (i < shoppingList.length) {
    var listItem = document.createElement("li");
    listItem.innerText = shoppingList[i];
    shoppingListPrint.appendChild(listItem);
    i++;
}