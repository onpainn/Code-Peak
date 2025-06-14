const availableTags = document.getElementById("availableTags");
const tagList = document.getElementById("tagList");

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
    const teacherID = document.getElementById("teacher-course").value;
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
    formData.append("banner", banner); // имя должно совпадать с тем, что ожидает сервер

    fetch("http://82.202.137.140:5000/api/course", {
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

const API_URL = "http://82.202.137.140:5000/api/course";
const coursesContainer = document.getElementById("coursesContainer");
const editForm = document.getElementById("editForm");
let selectedCourseId = null;

// Загружаем курсы
function loadCourses() {
  fetch(API_URL)
    .then((res) => res.json())
    .then(renderCourses)
    .catch((err) => alert("Ошибка загрузки курсов: " + err.message));
}

function renderCourses(courses) {
  coursesContainer.innerHTML = "";
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class='container-edit'>
      <h4>${course.title}</h4>
      <div class='btn-container-edit'>
        <button onclick="editCourse(${course.courseID})"><img src='../include/pen.svg'></button>
        <button onclick="deleteCourse(${course.courseID})"><img src='../include/x.svg'></button>
      </div>
    </div>
    `;
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
      alert("Курс удалён");
      loadCourses();
    })
    .catch((err) => console.log("Ошибка: " + err.message));
}

// Начало редактирования
function editCourse(id) {
  fetch(`${API_URL}/${id}`)
    .then((res) => res.json())
    .then((course) => {
      selectedCourseId = id;
      document.getElementById("editTitle").value = course.title;
      document.getElementById("editDescription").value = course.description;
      document.getElementById("editCost").value = course.cost;
      editForm.style.display = "flex";
    });
}

// Сохраняем изменения
editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const updatedCourse = {
    title: document.getElementById("editTitle").value.trim(),
    description: document.getElementById("editDescription").value.trim(),
    cost: document.getElementById("editCost").value,
  };
  const user = JSON.parse(localStorage.getItem("user"));
  fetch(`${API_URL}/${selectedCourseId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCourse),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка при обновлении");
      return res.json();
    })
    .then(() => {
      alert("Курс обновлён");
      editForm.style.display = "none";
      loadCourses();
    })
    .catch((err) => alert("Ошибка: " + err.message));
});

function cancelEdit() {
  editForm.style.display = "none";
}

// Загружаем при старте
loadCourses();
