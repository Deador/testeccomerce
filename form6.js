// export default formOrder;

const form = document.querySelector("form");

form.onsubmit = (e) => {
  let countSuccess = 0; // Счетчик проверок полей

  function testValidate() {
    const formData = new FormData(); // Записываю ключ - значение в конструктор
    const inputReq = document.querySelectorAll("form input, textarea"); // Получаю все обязательные поля

    for (let input of inputReq) {
      formData.append(input.name, input.value);
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
    testAll(formData);
  }

  // Проверка номера телефона
  function numberTest(input) {
    const numberValidate =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/; // Регулярка для проверки телефона
    const phoneRegexp = input.value.match(numberValidate); // Проверяю что ввел пользователь с регулярным выражением, input передаю из for of

    if (phoneRegexp) {
      console.log("Номер подходит");
      removeError(input); // Если номер подходит, то удали ошибку и передай конретное поле
      countSuccess++;
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
      countSuccess++;
    } else {
      addError(input);
    }
  }

  // Проверка адреска доставки
  function adressTest(input) {
    if (!input.value) {
      // Если значение равно нулю, то добавь ошибку
      addError(input);
    } else {
      removeError(input);
      countSuccess++;
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

  // Все проверки
  function testAll(formData) {
    // Если счетчик успешных проверок = 3, то успех
    if (countSuccess === 3) {
      e.preventDefault();
      console.log("Все проверки успешны");
      console.log(countSuccess);
      sendMail(formData);
    }
    // Если поля с ошибками (count<3) форму не отправляю
    else {
      console.log("Поля проверку не прошли");
      console.log(countSuccess);
      e.preventDefault();
    }
  }

  async function sendMail(formData) {
    //========Отправка данных в php скрипт====
    fetch("mail.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        console.log(text);
      })
      .catch(function (error) {
        console.log(error);
      });
    // if (response.ok){
    //   console.log("Форма отправлена")
    // }else{
    //   console.log("Ошибка")
    // }
  }

  testValidate();
};
