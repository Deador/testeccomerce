// export default formOrder;

const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   function testValidate() {
//     const inputReq = document.querySelectorAll("._req"); // Получаю все обязательные поля
//     for (let input of inputReq) {
//       addError(input);

//       // Проверка конретных полей
//       if (input.classList.contains("phone_num")) {
//         const phoneText = input.value;
//         numberTest(phoneText);
//       } else if (input.classList.contains("email")) {
//         console.log("Проверяю email");
//       }
//     }
//   }

//   // Проверка номера телефона
//   function numberTest(phoneText) {
//     const numberValidate =
//       /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//     if (phoneText.match(numberValidate)) {
//       console.log("Номер подходит");
//     } else {
//       addError();
//     }
//   }
//   // function addError(input) {
//   //   input.classList.add("error");
//   // }

//   function addError(input) {
//     input.classList.remove("error");
//   }
//   testValidate();
// });

// -------------  VAR 2  -----------------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  function testValidate() {
    const inputReq = document.querySelectorAll("._req"); // Получаю все обязательные поля
    return new Promise(function (resolve, reject) {
      for (let input of inputReq) {
        resolve(input);

        // Проверка конретных полей
        // if (input.classList.contains("phone_num")) {
        //   const phoneText = input.value;
        //   numberTest(phoneText);
        // } else if (input.classList.contains("email")) {
        //   console.log("Проверяю email");
        // }
      }
    });
    // mainPromise.then(function(input){
    //   console.log(input)
    // })
  }

  //Проверка полей
  async function testInput() {
    const result = await testValidate();
    // Проверка конретных полей
    if (result.classList.contains("phone_num")) {
      const phoneText = result.value;
      numberTest(phoneText);
    } else if (result.classList.contains("email")) {
      console.log("Проверяю email");
    }
  }

  // Проверка номера телефона
  function numberTest(phoneText) {
    const numberValidate =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const phoneRegexp = phoneText.match(numberValidate); // Проверяю что ввел пользователь с регулярным выражением
    if (phoneRegexp) {
      console.log("Номер подходит");
      removeError();
    } else {
      console.log("Номер не подходит");
      addError();
    }
  }
  function addError(input) {
    input.classList.add("error");
    console.log("Ошибка есть");
  }

  function removeError(input) {
    input.classList.remove("error");
    console.log("Ошибки нет");
  }

  testInput();
  // testValidate();
});
