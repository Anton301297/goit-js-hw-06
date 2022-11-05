const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const ingredientCreateLi = (ingredientsEl) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredientsEl;
  console.log(itemEl);
  return itemEl;
};
const ingredientsItems = ingredients.map(ingredientCreateLi);
ingredientsList.append(...ingredientsItems);
console.log(ingredientsItems);
