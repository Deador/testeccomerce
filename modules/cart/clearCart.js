import clearChipCart from "modules/cart/clearChipCartActive.js";
export default clearCart;

function clearCart() {
  const clearCart = document.querySelector(".clear_cart");
  const itemsContainer = document.querySelector(".items_container");
  let count = document.querySelector(".count_product");

  // Очистка всей корзины
  clearCart.addEventListener("click", function () {
    const itemCart = itemsContainer.querySelectorAll(".cart_item"); // Нашел все карточки

    // Перебрал каждый элемент
    for (let item of itemCart) {
      item.remove(); // Удаляю каждый полученный элемент
      count.innerText = 0; // Присваиваю чипу в корзине 0
      clearChipCart(); // Запускаю функцию, которая скрывает чип в корзине
    }
  });
}
