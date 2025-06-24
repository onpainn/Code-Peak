let newAvatarBase64 = null;
let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "../../index.html";
}
const userRoleTeacher = user.userID;

const userRoleDefault = user.role;


async function checkTeacher(userRoleTeacher) {
  try {
    const res = await fetch(`http://82.202.137.140:5000/api/teacher/check/${userRoleTeacher}`);
    const data = await res.json();
    return data.isTeacher;
  } catch (e) {
    console.error(e);
    return false;
  }
}

checkTeacher(userRoleTeacher).then(isTeacher => {
  if (isTeacher) {
    // показываем только учительский блок
    document.querySelectorAll('[data-role]').forEach(el => {
      el.style.display = el.getAttribute('data-role') === 'teacher' ? '' : 'none';
    });
  } else {
    // показываем блок в зависимости от роли из user
    document.querySelectorAll('[data-role]').forEach(el => {
      el.style.display = el.getAttribute('data-role') === userRoleDefault ? '' : 'none';
    });
  }
});





















function renderProfileEditForm() {
  const container = document.getElementById("profileContainer");

  container.innerHTML = `
        <h1>Редактировать профиль</h1>
        <div class="edit-profil">
          <input id="editName" value="${user.userName}" placeholder="Имя">
          <div class="file-upload-wrapper">
            <div class="file-upload-button">Загрузить файл</div>
            <input class="file-upload-input" type="file" id="changeAvatarInput" accept="image/*" style="display: none;" />
          </div>
          <img id="previewAvatar" src="${
            user.avatar.startsWith("data:")
              ? user.avatar
              : `http://82.202.137.140:5000${user.avatar}`
          }" width="100" />
        </div>
        <div class="edit-button">
          <button onclick="saveChanges()">Сохранить</button>
          <button onclick="renderProfile()">Отмена</button>
        </div>
      `;

  document
    .querySelector(".file-upload-button")
    .addEventListener("click", () => {
      document.getElementById("changeAvatarInput").click();
    });

  document
    .getElementById("changeAvatarInput")
    .addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const isGif =
          file.type === "image/gif" || file.name.toLowerCase().endsWith(".gif");
        if (isGif) {
          alert(
            "Загрузка GIF-файлов запрещена. Пожалуйста, выберите PNG или JPEG."
          );
          e.target.value = "";
          return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
          newAvatarBase64 = event.target.result;
          document.getElementById("previewAvatar").src = newAvatarBase64;
        };
        reader.readAsDataURL(file);
      }
    });
}

function saveChanges() {
  const newName = document.getElementById("editName").value.trim();
  if (!newName) return alert("Заполните все поля");

  user.userName = newName;
  if (newAvatarBase64) {
    user.avatar = newAvatarBase64;
  }

  fetch(`http://82.202.137.140:5000/api/user/${user.userID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: user.userName,
      avatar: user.avatar,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка при обновлении на сервере");
      return res.json();
    })
    .then((updatedUser) => {
      localStorage.setItem("user", JSON.stringify(updatedUser));
      saveUsersList(updatedUser);
      newAvatarBase64 = null;
      renderProfile();
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

function saveUsersList(updatedUser) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map((u) =>
    u.email === updatedUser.email ? updatedUser : u
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}

function renderProfile() {
  const container = document.getElementById("profileContainer");

  container.innerHTML = `
        <h1>Аккаунт</h1>
        <div class="avatar">
          <img src="${
            user.avatar.startsWith("data:")
              ? user.avatar
              : `http://82.202.137.140:5000${user.avatar}`
          }">
        </div>
        <div class="user-info">
          <h1>${user.userName}</h1>
          <p id="roleUser" class="num-acc">${user.role}</p>
          <p class="num-acc">email: ${user.email}</p>
        </div>
        <div class="button-account">
          <button onclick="renderProfileEditForm()">Изменить</button>
          <button onclick="logout()">Выйти</button>
        </div>
      `;
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "LoginReg.html";
}

renderProfile();

//--------------------------------------------------------------------
// Дата в шапке страницы
const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = months[currentDate.getMonth()]; // Месяц по названию
const day = currentDate.getDate();
const formattedDate = `${day} ${month} ${year}`;
document.getElementById("datetime_menu").textContent = formattedDate;

//--------------------------------------------------------------------
// Плавующий hover на панеле навигации
const items = document.querySelectorAll(".item-navigation");
const bg = document.querySelector(".hover-bg");

items.forEach((item) => {
  // При навдении
  item.addEventListener("mouseenter", () => {
    const rect = item.getBoundingClientRect();
    const container = item.parentElement.getBoundingClientRect();
    bg.style.width = `${rect.width}px`;
    bg.style.left = `${rect.left - container.left}px`;
    bg.style.opacity = `1`;
  });
  // При исчезновении
  item.addEventListener("mouseleave", () => {
    bg.style.width = `1`;
    bg.style.opacity = `0`;
  });
});

//--------------------------------------------------------------------
//Открытие оверлейев
const overlays = document.querySelectorAll(".overlay-nav");

function closeAllOverlays() {
  overlays.forEach((overlay) => {
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-99";
  });
}

document.querySelectorAll("button[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetOverlay = document.getElementById(targetId);

    closeAllOverlays();
    targetOverlay.style.opacity = "1";
    targetOverlay.style.zIndex = "99";
    
  });
});

document.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    closeAllOverlays();
  });
});

//--------------------------------------------------------------------
// Изменение цветовой схемы страници
const buttoncolorone = document.getElementById("colorone");
const buttoncolortwo = document.getElementById("colortwo");
const buttoncolorthree = document.getElementById("colorthree");
const buttoncolorfour = document.getElementById("colorfour");

const savedColor = localStorage.getItem("color");

if (savedColor) {
  document.documentElement.style.setProperty("--additional-color", savedColor);
}
buttoncolorone.addEventListener("click", () => {
  const newColor = "#CCFF00";
  document.documentElement.style.setProperty("--additional-color", newColor);
  localStorage.setItem("color", newColor);
});

buttoncolortwo.addEventListener("click", () => {
  const newColor = "#FFB098";
  document.documentElement.style.setProperty("--additional-color", newColor);
  localStorage.setItem("color", newColor);
});
buttoncolorthree.addEventListener("click", () => {
  const newColor = "#FDD961";
  document.documentElement.style.setProperty("--additional-color", newColor);
  localStorage.setItem("color", newColor);
});
buttoncolorfour.addEventListener("click", () => {
  const newColor = "#8095FF";
  document.documentElement.style.setProperty("--additional-color", newColor);
  localStorage.setItem("color", newColor);
});

//--------------------------------------------------------------------
// Темная тема
const toggleBtn = document.getElementById("themeToggle");
// Проверяем сохранённую тему при загрузке
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Обновляем значение в localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

//--------------------------------------------------------------------
// Уведомления
const notifications = [
  {
    name: "Татьяна",
    avatar: "../include/home/avatar_comm_3.png",
    message: "Заходи на мой курс 1С: Бухгалтерия. Тебе понравится!!!",
  },
  {
    name: "Мария",
    avatar: "../include/home/avatar_comm_1.png",
    message: "У меня новый курс! 3D-Моделирование",
  },
  {
    name: "Михаил",
    avatar: "../include/home/avatar_comm_2.png",
    message: "Посмотри что у нас нового по курсам",
  },
  {
    name: "Code Peak",
    avatar: "../include/header/logo-notification.png",
    message: "Добро пожаловать на сайт Code Peak! Тут вам всегда рады)",
  },
];
const container = document.getElementById("notification-container");

notifications.forEach((n) => {
  container.innerHTML += `
    <div class="massage-info">
      <div class="logo-user-massage">
        <img src="${n.avatar}" alt="">
        <h1>${n.name}</h1>
      </div>
      <p>${n.message}</p>
    </div>
  `;
});


function showMessageUser(text) {
    const messageDiv = document.getElementById('messageUsers');
    messageDiv.textContent = text;
    messageDiv.classList.add('show');

    setTimeout(() => {
      messageDiv.classList.remove('show');
    }, 1500); // Показываем 1 секунду
  }