// ---------------------Импорты------------------
import clearChipCart from "/clearChipCartActive.js";
import itogCost from "/itogCost.js";
import deleteCartItem from "./modules/cart/deleteCartItem.js";
import clearCart from "./modules/cart/clearCart.js";

// ----------------------Элементы--------------------
const itemsCart = document.querySelector(".items_container");
const cardRow = document.querySelector(".card_row");

// ---------------------Главная функция-------------------
async function cartProduct() {
  //-------Генерация контента карточек через json------
  const data = await fetch("assortiment.json"); // Получаю json в виде промисса
  const json = await data.json(); // Преобразую этот промисс в json

  for (let item of json) {
    const cardHTML = `<div class="card_item" data-id="${item.id}">
        <img
          src="source/popular/${item.img}"
          alt=""
          class="img_card_popular"
        />
        <div class="sale"><span class="number_sale">${item.sale}</span></div>
        <div class="card_text_container">
          <div class="price_text_item">
            <span class="price_card">${item.price}</span
            ><span class="sale_card">${item.old_price}</span>
          </div>
          <div class="card_description">
            ${item.description}
          </div>
        </div>
        <div class="card_hover none">
          <a data-cart href="#" class="btn_cart"
            ><img src="source/icons/icons_menu/cart.svg" alt=""
          /></a>
          <a href="#" class="icon_favorite"
            ><img src="source/popular/heart.svg" alt=""
          /></a>
        </div>
      </div>`;

    cardRow.insertAdjacentHTML("beforeend", cardHTML);
  }

  // Если в карточке товар без скидок, то они будут удалятся
  const zeroOldPrice = cardRow.querySelectorAll(".sale_card");
  const zeroSale = cardRow.querySelectorAll(".sale");

  // Удаление фиолетовой плашки с -% если = 0
  for (let item of zeroOldPrice) {
    if (item.innerText === "0 ₽") {
      item.remove();
    }
  }
  // Удаление перечеркнутого ценника если = 0
  for (let item of zeroSale) {
    if (+item.innerText === 0) {
      item.remove();
    }
  }
  //--------------------Конец функции---------------------------------

  //---------------Добавление карточек в корзину--------------
  const card = document.querySelectorAll(".card_item"); // Нашел все карточки после генерации из json

  // Обошел массив, получил каждый элемент
  card.forEach(function (item) {
    const btn = item.querySelector("[data-cart]"); // Нашел в каждом элементе кнопку
    btn.onclick = function (e) {
      const cardItem = e.target.closest(".card_item"); // При клике поднимаюсь до родителя, карточки работают отдельно

      // Отображение количества товаров в корзине и увеличение числа
      if (cardItem) {
        let count = document.querySelector(".count_product");
        +count.innerText++; // Преобразовал строку в число и увеличил при клике
        count.classList.remove("none"); // Отображаю чип с количеством, если был клик по корзине

        // Функция делает активным пункт "Корзина", если значение чипа не 0
        clearChipCart();
      }

      // Добавление товара в корзине
      // В объект записываю нужные мне свойства карточки, для последующей передачи
      const cardObject = {
        img: cardItem.querySelector(".img_card_popular").getAttribute("src"),
        description: cardItem.querySelector(".card_description").innerText,
        price: cardItem.querySelector(".price_card").innerText,
      };

      // Заменяю данные на данные с кликнутого объекта
      const cartHTML = `
          <!-- ----Cart item------- -->
          <div class="cart_item flex_space">
            <div class="img_text_container flex">
              <img
                src="${cardObject.img}"
                width="80px"
                alt=""
                class="img_item"
              />
              <div class="cart_item_desc">
                ${cardObject.description}
              </div>
            </div>
            <div class="clear_group flex">
              <span class="price_item_cart">${cardObject.price}</span>
              <div class="clear_btn"
                ><img data-delete
                  src="source/icons/icons_menu/Trash_light.svg"
                  alt=""
                  class="clear_icon"
              /></div>
            </div>
          </div>
        </div>
        `;

      itemsCart.insertAdjacentHTML("beforeend", cartHTML);

      // Подсчет общей стоимости товаров
      itogCost();

      return false; // Сбросил состояние ссылок по умолчанию (переход по ссылке)
    };
  });
}
deleteCartItem(); // Удаление товара из корзины
clearCart(); // Полная очистка корзины
cartProduct();
