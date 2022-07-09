export default itogCost;

function itogCost() {
  let startPrice = 0;
  const itemsContainer = document.querySelector(".items_container");
  const itemCart = itemsContainer.querySelectorAll(".cart_item"); // Нашел все карточки
  let itogPrice = document.querySelector(".itog_price");

  // Перебираю все товары в коризне
  itemCart.forEach(function (item) {
    const cost = item.querySelector(".price_item_cart"); // У каждого нахожу цену
    const costNumber = parseInt(cost.innerText); // Преобразую строку в число
    startPrice += costNumber; // Присваиваю новое число к старому
    itogPrice.innerText = startPrice; // Меняю внутренний текст Итого на общий итог
  });

  // Проверяю количество товаров в коризне, если 0, то сумма равна 0
  if (itemsContainer.children.length < 1) {
    itogPrice.innerText = 0;
  }
}
