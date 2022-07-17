import addAdress from "./addAdress.js";

const inputAdress = document.querySelector(".adress");
const adressContainer = document.querySelector(".adress_container");
let arr = [];

// При отсутствии фокуса на поле подсказки скрываются
document.onclick = () => {
  if (document.activeElement !== inputAdress) {
    adressContainer.classList.add("none");
  }
};

// Главная функция
inputAdress.addEventListener("input", () => {
  // ============== Тело запроса ======================
  var url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  var token = "e2136234a4f82ff0f77052378b236e0ca114dbc4";
  var query = inputAdress.value;
  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };

  // ========== Отправка запроса ============
  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      let json = result.suggestions;

      // Получение адресов из json
      // Перебираю все адреса
      for (let item of json) {
        arr.push(item.value); // Добавляю значение адресов в пустой массив
        if (arr.length > 10) {
          arr.shift(); // Если длина массива больше 10 (она больше 10), то удаляю все значения сверху, пока не останется 10 нижних (самые актуальные значения)
          const adressHTML = `
            <div class="hint">${arr[0]}</div>
            <div class="hint">${arr[1]}</div>
            <div class="hint">${arr[2]}</div>
            <div class="hint">${arr[3]}</div>
            <div class="hint">${arr[4]}</div>
            <div class="hint">${arr[5]}</div>
            <div class="hint">${arr[6]}</div>
            <div class="hint">${arr[7]}</div>
            <div class="hint">${arr[8]}</div>
            <div class="hint last_hint">${arr[9]}</div>`;

          // Покажи подсказки
          adressContainer.classList.remove("none");

          // Замени HTML контейнера на разметку
          adressContainer.innerHTML = adressHTML;
          // focus()
          // Добавление значения подсказки в поле
          addAdress();
        }
      }
    })
    .catch((error) => console.log("error", error));
});
