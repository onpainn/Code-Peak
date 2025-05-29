// const user = JSON.parse(localStorage.getItem('currentUser'));

//     if (!user) {
//       // Если пользователь не авторизован — возвращаем на вход
//       window.location.href = "../html/Visitor.html";
//     } else {
//       const container = document.getElementById("profileContainer");
//       container.innerHTML = `
//       <h1>Аккаунт</h1>
//       <div class="avatar"><img class="avatar" src="${user.avatar}"></img></div>
//       <div class="user-info">
//         <h1>${user.name}</h1>
//         <p class="num-acc">${user.role}</p>
//         <p class="num-acc">Email:  ${user.email}</p>
//       </div>
//       <div class="button-account">
//         <a>Изменить</a>
//         <button onclick="logout()">Выйти</button>
//       </div>
//       <button class="close">Закрыть</button>
//       `;
//     };

//     function logout() {
//       localStorage.removeItem("currentUser");
//       window.location.href = "../html/LoginReg.html";
//     };

