// Select input fields and buttons
const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppingList");
const clearListButton = document.getElementById("clearList");
const searchInput = document.getElementById("searchItem");

// Array to store shopping list items
let shoppingListArray = [];

// Add Item Functionality when one add the items
addButton.addEventListener("click", () => {
  const itemName = itemNameInput.value.trim();
  const itemPrice = itemPriceInput.value.trim();

  if (itemName && itemPrice) {
    // Add item to the array
    const newItem = { name: itemName, price: itemPrice, purchased: false };
    shoppingListArray.push(newItem);

    // Render the shopping list
    renderShoppingList();

    // Clear input fields
    itemNameInput.value = "";
    itemPriceInput.value = "";
  }
});

// Function to render the shopping list from the array
function renderShoppingList() {
  // Clear the existing shopping list in the DOM
  shoppingList.innerHTML = "";

  // Loop through the array and create item elements
  shoppingListArray.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Add details (name and price)
    const details = document.createElement("div");
    details.className = "details";
    details.textContent = `${item.name} Ksh ${item.price}`;
    itemDiv.append(details);

    // Add checkbox for marking as purchased
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.purchased;
    checkbox.addEventListener("click", () => {
      shoppingListArray[index].purchased = checkbox.checked;
      renderShoppingList();
    });
    itemDiv.append(checkbox);

    // Append the item to the shopping list
    shoppingList.append(itemDiv);
  });
}

// Clear List Functionality
clearListButton.addEventListener("click", () => {
  // Clear the shopping list array and re-render
  shoppingListArray = [];
  renderShoppingList();
});
