console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaInput2.value); //hier bin ich nicht selbst drauf gekommen, macht tatsaechlich auch noch nicht so viel sinn fuer mich...
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaInput2.value); // siehe oben
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaInput1.value, pizzaSize2); // hier genau das gleiche wie oben... check ich einfach nicht, aber es funktioniert...
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaInput1.value, pizzaSize2); // siehe oben
});
// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2 ** 2);
  const area2 = Math.PI * (diameter2 / 2 ** 2);

  const pizzaGain = ((area2 - area1) / area1) * 100;
  const roundedPizzaGain = Math.round(pizzaGain);
  outputSection.textContent = roundedPizzaGain + "%";
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)"; // selbst gemacht nur nicht gecheckt, dass es backgroundColor heisst, anstelle von background-color
  } else {
    outputSection.style.backgroundColor = "var(--green)"; // siehe oben
  }
}
