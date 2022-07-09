// export default formOrder;

const form = document.querySelector("form");

// -------------  VAR 2  -----------------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  function testValidate() {
    const inputReq = document.querySelectorAll("._req"); // Получаю все обязательные поля
    for (let input of inputReq) {
      //Если нахожу телефон запускаю проверку телефона
      if (input.classList.contains("phone_num")) {
        console.log("Проверяю номер телефона");
        numberTest(input); // Передаю дальше поле с телефоном
      }
      // Нахожу email запускаю проверку почты
      else if (input.classList.contains("email")) {
        console.log("Проверяю email");
        emailTest(input); // Передаю дальше поле с email
      } // Нахожу адрес доставки запускаю проверку
      else if (input.classList.contains("adress")) {
        console.log("Проверяю адрес доставки");
        adressTest(input);
      } else if (input.classList.contains("checkbox")) {
        checkboxTest(input);
      }
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

  // Проверка электронной почты
  function emailTest(input) {
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    const emailRegexp = input.value.match(emailValidate);
    if (emailRegexp) {
      console.log("Почта подошла");
      removeError(input);
    } else {
      addError(input);
    }
  }

  // Проверка адреска доставки
  function adressTest(input) {
    console.log(input);
    if (!input.value) {
      // Если значение равно нулю, то добавь ошибку
      addError(input);
    }
  }

  // Проверка политики
  function checkboxTest(input) {
    console.log(input);
    if (input.checked === true) {
      console.log("Чекбокс выбран");
      removeError(input);
    } else {
      addError(input);
    }
  }

  // Добавление ошибки к конкретному полю
  function addError(input) {
    input.classList.add("error");
  }
  // Удаление ошибки
  function removeError(input) {
    input.classList.remove("error");
  }

  testValidate();
});
