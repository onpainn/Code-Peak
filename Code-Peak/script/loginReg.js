// Превью аватара
document.getElementById("avatarInput").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    selectedAvatar = event.target.result; // base64 строка
    document.getElementById("avatarPreview").src = selectedAvatar;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});

const showMessage = (id, text, type) => {
  const el = document.getElementById(id);
  el.textContent = text;
  el.className = `message ${type}`;
};

const mainContainer = document.getElementById("containers");
const register = document.getElementById("registers");
const login = document.getElementById("logins");

register.addEventListener("click", () => {
  mainContainer.classList.add("active-log");
});

login.addEventListener("click", () => {
  mainContainer.classList.remove("active-log");
});
let selectedAvatar = "";

document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const avatar = document.getElementById("avatarInput").files[0]; // один файл

  const formData = new FormData();

  formData.append("userName", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("avatar", avatar); // имя должно совпадать с тем, что ожидает сервер

  fetch("http://82.202.137.140:5000/api/users/registration", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      return response.text();
    })
    .then((user) => {
      showMessage("registrationMessage", "Регистрация успешна!", "success");
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});


document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const data = {
      email: email,
      password: password,
    };
    // Отправляем данные на сервер
    fetch("http://82.202.137.140:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json(); // Получаем текст ответа, а не JSON
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user)); // сохраняем в localStorage
        console.log("Пользователь авторизован:", user);
        window.location.href = "../html/Home.html";
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Неправильный логин или пароль.");
      });
  });
