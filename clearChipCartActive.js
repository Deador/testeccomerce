export default clearChipCart;

function clearChipCart() {
  const cartIcon = document.querySelector(".icon--mode");
  const modaleCart = document.querySelector(".modale_cart");
  let count = document.querySelector(".count_product");

  // Если число чипа = 0, то скрываю его
  if (+count.innerText === 0) {
    count.classList.add("none"); // Переменная count находится в cart_02

    // Если текст чипа 0, то делаю иконку корзины не активной
    cartIcon.classList.remove("active--icon");

    // Меняю определенный контент в корзине
    modaleCart.querySelector(".empty_content").classList.remove("none");
    modaleCart.querySelector(".full_content").classList.add("none");
  }
  // Если 1 и больше (товар добавлен в козину) то активной
  else if (+count.innerText > 0) {
    cartIcon.classList.add("active--icon");

    // Меняю определенный контент в корзине
    modaleCart.querySelector(".empty_content").classList.add("none");
    modaleCart.querySelector(".full_content").classList.remove("none");
  }
}
