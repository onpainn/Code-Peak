 let user = JSON.parse(localStorage.getItem('currentUser'));
 // Если пользователь не авторизован — перенаправляем на страницу входа
    if (!user) {
      window.location.href = "Visitor.html";
    }

    // Функция обновляет пользователя в списке всех пользователей (users в localStorage)
    function saveUsersList(updatedUser) {
      // Получаем всех пользователей
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Заменяем старого пользователя на обновленного по email
      const updatedUsers = users.map(u => u.email === updatedUser.email ? updatedUser : u);

      // Сохраняем обновлённый список в localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    // Показываем форму редактирования профиля
    function renderProfileEditForm() {
      const container = document.getElementById("profileContainer");

      // Отображаем поля ввода с текущими данными
      container.innerHTML = `
        <h1>Редактировать профиль</h1>
        <div class="edit-profil">
          <input id="editName" value="${user.name}" placeholder="Имя">
          <input id="editAvatar" value="${user.avatar}" placeholder="Ссылка на аватар">
        </div>
        <div class="edit-button">
          <button onclick="saveChanges()">Сохранить</button>
          <button onclick="renderProfile()">Отмена</button>
        </div>
        
      `;
      
    }

    // Сохраняем изменения профиля
    function saveChanges() {
      // Получаем новые значения из формы
      const newName = document.getElementById("editName").value.trim();
      const newAvatar = document.getElementById("editAvatar").value.trim();

      // Проверка на заполненность
      if (!newName || !newAvatar) {
        return alert("Заполните все поля");
      }

      // Обновляем данные пользователя
      user.name = newName;
      user.avatar = newAvatar;

      // Сохраняем обновлённого пользователя в localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Обновляем пользователя в общем списке
      saveUsersList(user);

      // Перерисовываем профиль
      renderProfile();
    }


// Сначала показываем профиль при загрузке страницы
    renderProfile();
    
    // Отображает информацию о текущем пользователе
    function renderProfile() {
      const container = document.getElementById("profileContainer");

      // Отображаем аватар, имя, email и кнопки
      container.innerHTML = `
      <h1>Аккаунт</h1>
      <div class="avatar"><img class="avatar" src="${user.avatar}"></img></div>
      <div class="user-info">
      <h1>${user.name}</h1>
      <p class="num-acc">${user.role}</p>
      <p class="num-acc">Email:  ${user.email}</p>
      </div>
      <div class="button-account">
      <button onclick="renderProfileEditForm()">Изменить</button>
      <button onclick="logout()">Выйти</button>
      </div>
      `;
    }

    // Выход из аккаунта: удаляем currentUser и переходим на главную
    function logout() {
      localStorage.removeItem("currentUser");
      window.location.href = "LoginReg.html";
    }





















    
   

//--------------------------------------------------------------------
// Дата в шапке страницы
const months = [
    "Январ", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = months[currentDate.getMonth()]; // Месяц по названию
const day = currentDate.getDate();
const formattedDate = `${day} ${month} ${year}`;
document.getElementById('datetime_menu').textContent = formattedDate;
    
    
//--------------------------------------------------------------------
// Плавующий hover на панеле навигации
const items = document.querySelectorAll('.item-navigation');
const bg = document.querySelector('.hover-bg');

items.forEach(item => {
    // При навдении
  item.addEventListener('mouseenter', () => {
    const rect = item.getBoundingClientRect();
    const container = item.parentElement.getBoundingClientRect();
    bg.style.width = `${rect.width}px`;
    bg.style.left = `${rect.left - container.left}px`;
    bg.style.opacity = `1`
  });
  // При исчезновении
  item.addEventListener('mouseleave', () => {
    bg.style.width = `1`;
    bg.style.opacity = `0`;
  });
});




//--------------------------------------------------------------------
//Открытие оверлейев
const overlays = document.querySelectorAll('.overlay-nav');

    function closeAllOverlays() {
      overlays.forEach(overlay => {
        overlay.style.display = 'none';
      });
    }

    document.querySelectorAll('button[data-target]').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetOverlay = document.getElementById(targetId);

        closeAllOverlays();
        targetOverlay.style.display = 'flex';
      });
    });

    document.querySelectorAll('.close').forEach(button => {
      button.addEventListener('click', () => {
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
    document.documentElement.style.setProperty('--additional-color', savedColor);
  }
  buttoncolorone.addEventListener("click", () => {
    const newColor = "#CCFF00";
    document.documentElement.style.setProperty('--additional-color', newColor);
    localStorage.setItem("color", newColor);
  });
  
  buttoncolortwo.addEventListener("click", () => {
      const newColor = "#FF8080";
      document.documentElement.style.setProperty('--additional-color', newColor);
      localStorage.setItem("color", newColor);
    });
    buttoncolorthree.addEventListener("click", () => {
      const newColor = "#FDD961"; 
      document.documentElement.style.setProperty('--additional-color', newColor);
      localStorage.setItem("color", newColor);
    });
    buttoncolorfour.addEventListener("click", () => {
      const newColor = "#8095FF";
      document.documentElement.style.setProperty('--additional-color', newColor);
      localStorage.setItem("color", newColor);
    });




//--------------------------------------------------------------------
// Темная тема
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
  


const notifications = [
  // {
  //   name: "Татьяна",
  //   avatar: "../include/home/avatar_comm_3.png",
  //   message: "Заходи на мой курс 1С: Бухгалтерия. Тебе понравится!!!"
  // },
  // {
  //   name: "Мария",
  //   avatar: "../include/home/avatar_comm_1.png",
  //   message: "У меня новый курс! 3D-Моделирование"
  // },
  // {
  //   name: "Михаил",
  //   avatar: "../include/home/avatar_comm_2.png",
  //   message: "Посмотри что у нас нового по курсам"
  // },
  {
    name: "Code Peak",
    avatar: "../include/header/logo-notification.png",
    message: "Добро пожаловать на сайт Code Peak! Тут вам всегда рады)"
  }
];
const container = document.getElementById("notification-container");

notifications.forEach(n => {
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








