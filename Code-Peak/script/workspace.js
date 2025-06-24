const availableTags = document.getElementById("availableTags");
const tagList = document.getElementById("tagList");
const API_URL = "http://82.202.137.140:5000/api/course";

let tags = [];
availableTags.addEventListener("click", (e) => {
  if (e.target.classList.contains("tag")) {
    const tag = e.target.textContent.trim();
    if (!tags.includes(tag)) {
      if (tags.length >= 5) {
        alert("Можно выбрать не более 5 тегов.");
        return;
      }
      tags.push(tag);
      renderTags();
    }
  }
});

function renderTags() {
  tagList.innerHTML = "";
  tags.forEach((tag, index) => {
    const tagEl = document.createElement("p");
    tagEl.className = "tag";
    tagEl.textContent = tag;
    tagEl.addEventListener("click", () => {
      tags.splice(index, 1);
      renderTags();
    });
    tagList.appendChild(tagEl);
  });
}

document
  .getElementById("createformcourse")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const tokens = JSON.parse(localStorage.getItem("user"));
    const name = document.getElementById("name_course").value;
    const time = document.getElementById("time-course").value;
    const description = document.getElementById("description-course").value;
    const tag = tags.join(",");
    const cost = document.getElementById("cost-course").value;
    const banner = document.getElementById("banner-course").files[0]; // один файл
    const teacherID = document.getElementById("teacherSelect").value;
    const showMessage = (id, text, type) => {
      const el = document.getElementById(id);
      el.textContent = text;
      el.className = `message ${type}`;
    };

    const formData = new FormData();

    formData.append("title", name);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("tags", tag);
    formData.append("cost", cost);
    formData.append("teacherID", teacherID);
    formData.append("banner", banner);
    fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokens.token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((user) => {
        showMessage("massage-post", "Курс создан", "success");
        document.getElementById("createformcourse").reset();
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  });

const buttons = document.querySelectorAll(".button-block button");
const panels = {
  0: document.getElementById("panel-create"),
  1: document.getElementById("panel-edit"),
  2: document.getElementById("panel-role"),
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    Object.values(panels).forEach((panel) =>
      panel.classList.remove("active_pan")
    );
    panels[index].classList.add("active_pan");
  });
});

async function loadTeachers() {
  try {
    const response = await fetch("http://82.202.137.140:5000/api/teacher");
    const teachers = await response.json();

    const select = document.getElementById("teacherSelect");
    select.innerHTML = '<option value="">Выберите учителя</option>';
    teachers.forEach((teacher) => {
      const option = document.createElement("option");
      option.value = teacher.teacherID;
      option.textContent = teacher.userName;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Ошибка при загрузке учителей:", error);
  }
}

// Загружаем учителей при загрузке страницы
window.addEventListener("DOMContentLoaded", loadTeachers);

const coursesContainer = document.getElementById("coursesContainer");
let selectedCourseId = null;

// Загрузка курсов
function loadCourses() {
  fetch(API_URL)
    .then((res) => res.json())
    .then(renderCourses)
    .catch((err) => alert("Ошибка загрузки курсов: " + err.message));
}

// Рендер курсов с редактируемой формой внутри
function renderCourses(courses) {
  coursesContainer.innerHTML = "";
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHTML = `
      <div class='container-edit' id="course-view-${course.courseID}">
        <h4>${course.title}</h4>
        
        <div class='btn-container-edit'>
          <button onclick="showEditForm(${course.courseID})"><img src='../include/pen.svg'></button>
          <button onclick="deleteCourse(${course.courseID})"><img src='../include/x.svg'></button>
        </div>
      </div>

      <form class="edit-form" id="form-${course.courseID}" style="display: none;">
        <input type="text" id="title-${course.courseID}" value="${course.title}" placeholder="Название" required><br>
        <textarea id="desc-${course.courseID}" placeholder="Описание">${course.description}</textarea><br>
        <input type="number" id="cost-${course.courseID}" value="${course.cost}" placeholder="Цена"><br>
        <input type="number" id="time-${course.courseID}" value="${course.time}" placeholder="Время"><br>
        <div class="file-upload-wrapper edit-course-file">
          <div class="file-upload-button">Загрузить файл</div>
            <input class="file-upload-input" type="file" id="banner-course-edit-${course.courseID}" />
        </div>
        <div class='btn-edit'>
          <button type="submit"><img src='../include/check-check.svg'></button>
          <button type="button" onclick="cancelEdit(${course.courseID})"><img src='../include/x.svg'></button>
        </div>
      </form>
    `;

    // Обработка формы
    card
      .querySelector(`#form-${course.courseID}`)
      .addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append(
          "title",
          document.getElementById(`title-${course.courseID}`).value.trim()
        );
        formData.append(
          "description",
          document.getElementById(`desc-${course.courseID}`).value.trim()
        );
        formData.append(
          "cost",
          document.getElementById(`cost-${course.courseID}`).value
        );
        formData.append(
          "time",
          document.getElementById(`time-${course.courseID}`).value
        );

        const fileInput = document.getElementById(
          `banner-course-edit-${course.courseID}`
        );
        5;
        if (fileInput.files.length > 0) {
          formData.append("banner", fileInput.files[0]);
        }

        const user = JSON.parse(localStorage.getItem("user"));
        fetch(`${API_URL}/${course.courseID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          body: formData,
        })
          .then((res) => {
            if (!res.ok) throw new Error("Ошибка обновления курса");
            return res.json();
          })
          .then(() => {
            showMessageUser("Курс обновлён");
            loadCourses();
          })
          .catch((err) => alert("Ошибка: " + err.message));
      });

    coursesContainer.appendChild(card);
  });
}

// Удаление курса
function deleteCourse(id) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!confirm("Удалить этот курс?")) return;
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка удаления");
      showMessageUser("Курс удалён");
      loadCourses();
    })
    .catch((err) => console.log("Ошибка: " + err.message));
}

// Показывает форму редактирования для конкретного курса
function showEditForm(id) {
  // Скрываем все другие формы
  document
    .querySelectorAll(".edit-form")
    .forEach((f) => (f.style.display = "none"));
  document
    .querySelectorAll(".container-edit")
    .forEach((v) => (v.style.display = "flex"));

  document.getElementById(`form-${id}`).style.display = "flex";
  document.getElementById(`course-view-${id}`).style.display = "none";
}

// Отмена редактирования
function cancelEdit(id) {
  document.getElementById(`form-${id}`).style.display = "none";
  document.getElementById(`course-view-${id}`).style.display = "flex";
}

// При загрузке страницы
loadCourses();

const API_USER = "http://82.202.137.140:5000/api/user";

let currentUserId = null;

function searchUser() {
  const email = document.getElementById("emailInput").value.trim();
  if (!email) return alert("Введите email");

  fetch(`${API_USER}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Пользователь не найден");
      return res.json();
    })
    .then((user) => {
      currentUserId = user.userID;
      document.getElementById("userName").textContent = user.userName;
      document.getElementById("userEmail").textContent = user.email;
      document.getElementById("roleSelect").value = user.role;
      document.getElementById("userInfo").style.display = "flex";
    })
    .catch((err) => {
      console.log("Ошибка: " + err.message);
      document.getElementById("userInfo").style.display = "none";
    });
}

function updateRole() {
  const newRole = document.getElementById("roleSelect").value;
  const user = JSON.parse(localStorage.getItem("user"));
  const email = document.getElementById("userEmail").textContent;

  if (!currentUserId) return;

  fetch(`${API_USER}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, newRole: newRole }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Не удалось обновить роль");
      return res.json();
    })
    .then((data) => {
      showMessageUser("Роль обновлена");
    })
    .catch((err) => console.log("Ошибка: " + err.message));
}

function loadUserCourses() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return console.log("Вы не авторизованы");

  fetch(`http://82.202.137.140:5000/api/courseRegistration/${user.userID}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res) => res.json())
    .then((courses) => renderUserCourses(courses.courses))
    .catch((err) => console.log("Ошибка загрузки курсов: " + err.message));
}

function renderUserCourses(courses) {
  const container = document.getElementById("workspaceCourses-user");
  container.innerHTML = "";

  if (courses.length === 0) {
    container.innerHTML =
      "<p class='donthavecoursesuser'>Вы ещё не записались ни на один курс.</p>";
    return;
  }

  courses.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course-card-user");
    div.innerHTML = `
      <h3>Вы проходите курс <span>${course.title}</span></h3>
      <div class='info'>
        <p>${course.description}</p>
      </div>
     <button onclick="getLessons(${course.courseID})">Начать курс</button>
      <button onclick="deleteCourseUser(${course.courseID})">Закончить курс</button>
    `;
    container.appendChild(div);
  });
}
function deleteCourseUser(courseID) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!confirm("Вы уверены что хотите закончить курс?")) return;
  fetch(`http://82.202.137.140:5000/api/courseRegistration`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ courseID: courseID, userID: user.userID }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка");
      showMessageUser("Курс пройден");
    })
    .catch((err) => alert("Ошибка: " + err.message));
}
loadUserCourses();

function renderLessons(lessons) {
  const container = document.getElementById("lessonList");
  const statsDiv = document.getElementById("lessonStats");
  container.innerHTML = "";

  let completedLessons = new Set(
    JSON.parse(localStorage.getItem("completedLessons") || "[]")
  );

  function updateStats() {
    const completedCount = lessons.filter((lesson) =>
      completedLessons.has(lesson.lessonsID)
    ).length;
    statsDiv.textContent = `Пройдено ${completedCount} из ${lessons.length} уроков`;
  }

  updateStats(); // начальная отрисовка статистики

  lessons.forEach((lesson, index) => {
    const lessonDiv = document.createElement("div");
    lessonDiv.classList.add("lesson");

    const isCompleted = completedLessons.has(lesson.lessonsID);

    lessonDiv.innerHTML = `
      <div class="lesson-title">
        <span>${index + 1}. ${lesson.title}</span>
        <input type="checkbox" ${
          isCompleted ? "checked" : ""
        } class="lesson-checkbox">
      </div>
      <div class="lesson-content">
          <iframe width="100%" height="300" src="${
            lesson.linkVideo
          }" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <p><span>Описание: </span>${lesson.descriptionLessons}</p>
      </div>
    `;

    // Раскрытие с закрытием других
    lessonDiv.querySelector(".lesson-title").addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "input") return;

      // Закрыть все другие
      document.querySelectorAll(".lesson-content").forEach((content) => {
        if (content !== lessonDiv.querySelector(".lesson-content")) {
          content.style.display = "none";
        }
      });

      // Переключить текущий
      const currentContent = lessonDiv.querySelector(".lesson-content");
      currentContent.style.display =
        currentContent.style.display === "none" ? "block" : "none";
    });

    // Обработка чекбокса
    const checkbox = lessonDiv.querySelector(".lesson-checkbox");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        completedLessons.add(lesson.lessonsID);
      } else {
        completedLessons.delete(lesson.lessonsID);
      }
      localStorage.setItem(
        "completedLessons",
        JSON.stringify([...completedLessons])
      );
      updateStats(); // обновляем статистику
    });

    container.appendChild(lessonDiv);
  });
}
function getLessons(courseID) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return console.log("Вы не авторизованы");

  fetch(`http://82.202.137.140:5000/api/lessons/${courseID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res) => res.json())
    .then((courses) => {
      renderLessons(courses);
      console.log(courses);
    })
    .catch((err) => console.log("Ошибка загрузки курсов: " + err.message));
}

async function checkIfTeacherAndLoadCourses(userID) {
  try {
    const res = await fetch(
      `http://82.202.137.140:5000/api/teacher/check/${userID}`
    );
    if (!res.ok) throw new Error("Ошибка при проверке роли преподавателя");

    const data = await res.json();

    if (data.isTeacher && data.teacherID) {
      // если пользователь — преподаватель
      loadTeacherCourses(data.teacherID);
    } else {
      console.log("Пользователь не является преподавателем");
    }
  } catch (err) {
    console.error("Ошибка при получении teacherID:", err);
  }
}

async function loadTeacherCourses(teacherID) {
  try {
    const response = await fetch(
      `http://82.202.137.140:5000/api/teacherCourses/${teacherID}`
    );
    if (!response.ok) throw new Error("Ошибка при получении курсов");

    const data = await response.json();
    const courses = data.teacherCourses[0];
    const container = document.getElementById("teacher-courses");
    container.innerHTML = "";

    if (!courses || courses.length === 0) {
      container.textContent = "У вас пока нет курсов.";
      return;
    }

    courses.forEach((course) => {
      const el = document.createElement("div");
      el.classList.add("courses-tech");
      el.innerHTML = `
        <h3>${course.title}</h3>
        <button class="lessons-btn" data-id="${course.courseID}">Уроки</button>
        <button class="add-lesson-btn" data-id="${course.courseID}">Добавить урок</button>
        <div class="lessons-container" id="lessons-${course.courseID}"></div>
      `;
      container.appendChild(el);
    });
  } catch (err) {
    console.error("Ошибка загрузки курсов:", err);
  }
}

document.addEventListener('click', async function (e) {
  // Загрузка уроков
  if (e.target.classList.contains('lessons-btn')) {
    const courseID = e.target.dataset.id;
    try {
      const res = await fetch(`http://82.202.137.140:5000/api/lessons/${courseID}`);
      if (!res.ok) throw new Error('Ошибка при получении уроков');
      const lessons = await res.json();

      const lessonContainer = document.getElementById(`lessons-${courseID}`);
      lessonContainer.innerHTML = '';

      if (lessons.length === 0) {
        lessonContainer.innerHTML = '<p>Уроков пока нет.</p>';
        return;
      }

      const ul = document.createElement('ul');
      lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${lesson.title}
          <div class="lesson-btn-lesson-btn">
          <button class="edit-lesson-btn" data-id="${lesson.lessonsID}"><img src='../include/pen.svg'></button>
          <button class="delete-lesson-btn" data-id="${lesson.lessonsID}"><img src='../include/x.svg'></button>
          </div>
        `;
        li.dataset.linkVideo = lesson.linkVideo || '';
        li.dataset.descriptionLessons = lesson.descriptionLessons || '';
        ul.appendChild(li);
      });

      lessonContainer.appendChild(ul);
    } catch (err) {
      console.error('Ошибка загрузки уроков:', err);
    }
  }

  // Редактирование урока
  if (e.target.closest('.edit-lesson-btn')) {
    const btn = e.target.closest('.edit-lesson-btn');
    const lessonID = btn.dataset.id;
    const li = btn.closest('li');

    const titleText = li.firstChild.textContent.trim();
    const videoUrl = li.dataset.linkVideo || '';
    const description = li.dataset.descriptionLessons || '';

    li.innerHTML = `
      <form class="lesson-edit-form">
        <input type="text" name="title" value="${titleText}" required>
        <input type="text" name="videoUrl" placeholder="Ссылка на видео" value="${videoUrl}" required>
        <textarea name="description" placeholder="Описание урока" required>${description}</textarea>
        <div class='button-edit-lessons'>
          <button type="submit"><img src='../include/check-check.svg'></button>
          <button type="button" class="cancel-edit"><img src='../include/x.svg'></button>
        </div>
      </form>
    `;

    li.querySelector('.lesson-edit-form').addEventListener('submit', async (ev) => {
      ev.preventDefault();

      const newTitle = ev.target.title.value;
      const newVideoUrl = ev.target.videoUrl.value;
      const newDescription = ev.target.description.value;

      try {
        const res = await fetch(`http://82.202.137.140:5000/api/lessons/${lessonID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            title: newTitle,
            linkVideo: newVideoUrl,
            descriptionLessons: newDescription
          })
        });

        if (!res.ok) throw new Error('Ошибка при обновлении урока');

        li.dataset.linkVideo = newVideoUrl;
        li.dataset.descriptionLessons = newDescription;

        li.innerHTML = `
          ${newTitle}
          <div class="lesson-btn-lesson-btn">
          <button class="edit-lesson-btn" data-id="${lessonID}"><img src='../include/pen.svg'></button>
          <button class="delete-lesson-btn" data-id="${lessonID}"><img src='../include/x.svg'></button>
          </div>
        `;
      } catch (err) {
        console.error(err);
        alert('Не удалось обновить урок');
      }
    });

    li.querySelector('.cancel-edit').addEventListener('click', () => {
      li.innerHTML = `
        ${titleText}
        <div class="lesson-btn-lesson-btn">
        <button class="edit-lesson-btn" data-id="${lessonID}"><img src='../include/pen.svg'></button>
        <button class="delete-lesson-btn" data-id="${lessonID}"><img src='../include/x.svg'></button>
        </div>
      `;
    });
  }

  // Удаление урока
  if (e.target.closest('.delete-lesson-btn')) {
    const btn = e.target.closest('.delete-lesson-btn');
    const lessonID = btn.dataset.id;
    const li = btn.closest('li');

    if (confirm('Удалить этот урок?')) {
      try {
        const res = await fetch(`http://82.202.137.140:5000/api/lessons/${lessonID}`, {
          method: 'DELETE'
        });
        if (!res.ok) throw new Error('Ошибка удаления');
        li.remove();
      } catch (err) {
        console.error(err);
        alert('Не удалось удалить урок');
      }
    }
  }

  // Добавление нового урока
  if (e.target.classList.contains('add-lesson-btn')) {
    const courseID = e.target.dataset.id;
    const lessonContainer = document.getElementById(`lessons-${courseID}`);

    lessonContainer.innerHTML = `
      <form class="add-lesson-form">
        <input type="text" name="title" placeholder="Название урока" required>
        <input type="text" name="linkVideo" placeholder="Ссылка на видео" required>
        <textarea name="descriptionLessons" placeholder="Описание урока" required></textarea>
        <button type="submit">Добавить</button>
      </form>
    `;

    lessonContainer.querySelector('.add-lesson-form').addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const form = ev.target;

      const title = form.title.value.trim();
      const linkVideo = form.linkVideo.value.trim();
      const descriptionLessons = form.descriptionLessons.value.trim();

      try {
        const res = await fetch('http://82.202.137.140:5000/api/lessons', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            linkVideo,
            descriptionLessons,
            courseID: Number(courseID)
          })
        });

        if (!res.ok) throw new Error('Ошибка при создании урока');

        alert('Урок успешно добавлен!');
        form.reset();
        // Перезагружаем список уроков
        const reloadBtn = document.querySelector(`.lessons-btn[data-id="${courseID}"]`);
        reloadBtn.click();
      } catch (err) {
        console.error(err);
        alert('Не удалось добавить урок');
      }
    });
  }
});


const usertech = JSON.parse(localStorage.getItem("user"));
checkIfTeacherAndLoadCourses(usertech.userID);
