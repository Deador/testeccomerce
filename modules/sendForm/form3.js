// export default formOrder;

const form = document.querySelector("form");

// -------------  VAR 3  -----------------
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   function testValidate() {
//     const mainPromise = new Promise(function (resolve, reject) {
//       const inputReq = document.querySelectorAll("._req"); // Получаю все обязательные поля
//       for (let input of inputReq) {
//         if (input.classList.contains("phone_num")) {
//           resolve(input);
//         } else if (input.classList.contains("email")) {
//           console.log("Проверяю email");
//         } else {
//           reject();
//         }
//       }
//     });
//     // Проверка номера телефона
//     mainPromise.then(function numberTest(input) {
//       const numberValidate =
//         /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/; // Регулярка для проверки телефона
//       const phoneRegexp = input.value.match(numberValidate); // Проверяю что ввел пользователь с регулярным выражением, input передаю из for of
//       if (phoneRegexp) {
//         console.log("Номер подходит");
//         removeError(input); // Если номер подходит, то удали ошибку и передай конретное поле
//       } else {
//         console.log("Номер не подходит");
//         addError(input); // Если номер не подходит, то добавь ошибку и передай конретное поле
//         reject(input);
//       }
//     }).then(function emailTets(input){
// console.log(input)
//     }).catch(function(){
//       console.log("Ветка reject")
//     });
//   }
//   // Добавление, удаление подсветки
//   function addError(input) {
//     input.classList.add("error");
//     console.log("Ошибка есть");
//   }

//   function removeError(input) {
//     input.classList.remove("error");
//     console.log("Ошибки нет");
//   }

//   testValidate();
// });

// -------------  VAR 4  -----------------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  function testValidate() {
      const inputReq = document.querySelectorAll("._req"); // Получаю все обязательные поля
      for (let input of inputReq) {
        if (input.classList.contains("phone_num")) {
          numberTest(input);
        } else if (input.classList.contains("email")) {
          console.log("Проверяю email");
        }
      }
  // Проверка номера телефона
  function numberTest(input) {
    const numberValidate =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/; // Регулярка для проверки телефона
    const phoneRegexp = input.value.match(numberValidate); // Проверяю что ввел пользователь с регулярным выражением, input передаю из for of

    if (phoneRegexp) {
      console.log("Номер подходит");
      removeError(input); // Если номер подходит, то удали ошибку и передай конретное поле
    } else {
      console.log("Номер не подходит");
      addError(input); // Если номер не подходит, то добавь ошибку и передай конретное поле
    }
  }
  }
  // Добавление, удаление подсветки
  function addError(input) {
    input.classList.add("error");
    console.log("Ошибка есть");
  }

  function removeError(input) {
    input.classList.remove("error");
    console.log("Ошибки нет");
  }

  testValidate();
});
