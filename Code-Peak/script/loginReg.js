const users = [
  {
    role: '',
    name: "",
    avatar: "",
    email: "",
    password: ""
  },
];
const getUsers = () => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
};

const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
};

const showMessage = (id, text, type) => {
    const el = document.getElementById(id);
    el.textContent = text;
    el.className = `message ${type}`;
};

// Превью аватара
document.getElementById('avatarInput').addEventListener('change', function (e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function (event) {
        selectedAvatar = event.target.result; // base64 строка
        document.getElementById('avatarPreview').src = selectedAvatar;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    });

// Регистрация
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!name || !email || !password) {
    showMessage("registrationMessage", "Заполните все обязательные поля.", "error");
    return;
    }

    const users = getUsers();
    if (users.find(user => user.email === email)) {
    showMessage("registrationMessage", "Email уже зарегистрирован.", "error");
    return;
    }

    users.push({ name, avatar: selectedAvatar, email, password});
    saveUsers(users);
    showMessage("registrationMessage", "Регистрация успешна!", "success");
    event.target.reset();
});

// Авторизация
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
    // Сохраняем текущего пользователя в localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = "Home.html";
    } else {
    showMessage("loginMessage", "Неверный email или пароль.", "error");
    }

    event.target.reset();
});

const mainContainer = document.getElementById('containers');
const register = document.getElementById('registers');
const login = document.getElementById('logins');
// const pass = document.getElementById('password').innerHTML;

register.addEventListener('click', () => {
    mainContainer.classList.add("active-log");
});

login.addEventListener('click', () => {
    mainContainer.classList.remove("active-log");
});
 let selectedAvatar = '';

