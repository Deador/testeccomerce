export default addAdress;

function addAdress() {
  const adressHints = document.querySelectorAll(".hint"); // Нахожу все подсказки
  // Обхожу циклом
  for (let hint of adressHints) {
    // Отслеживаю клик по конкретной подсказке
    hint.onclick = () => {
      const inputAdress = document.querySelector(".adress"); // Нахожу поле с адресом и подставляю в value значение кликнутой подсказки
      inputAdress.value = hint.innerText;

      const adressContainer = document.querySelector(".adress_container");
      adressContainer.classList.add("none");
    };
  }
}
