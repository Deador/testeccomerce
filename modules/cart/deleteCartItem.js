import clearChipCart from "modules/cart/clearChipCartActive.js";
import itogCost from "modules/cart/itogCost.js";
export default deleteCartItem;

// Удаление одного товара из корзины
function deleteCartItem() {
  let count = document.querySelector(".count_product");
  const modaleCart = document.querySelector(".modale_cart");

  modaleCart.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-delete")) {
      // Если кликнутый элемент содержит артрибут data
      const item = e.target.closest(".cart_item"); // То поднимись до родителя и удали конкретно его
      item.remove();

      // ------ Чип с количеством в корзине
      // Также уменьши количество товаров в чипе на один
      +count.innerText--;
      clearChipCart(); // Буду скрывать чип если 0
    }
    // При клике на кнопку удалить будет пересчитываться общая стоимость товара
    itogCost();
  });
}
