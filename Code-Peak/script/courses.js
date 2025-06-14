const filterButtons = document.querySelectorAll(".btn_search_courses");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const coursesContainer = document.getElementById("courses");

let allCourses = [];
let filteredCourses = [];
let currentIndex = 0;
const COURSES_PER_PAGE = 3;
let activeFilter = "all";

// Получение курсов
fetch("http://82.202.137.140:5000/api/course", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) throw new Error("Ошибка при получении курсов");
    return response.json();
  })
  .then((courses) => {
    allCourses = courses;
    applyFilter("all");
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

function renderCourses() {
  const nextCourses = filteredCourses.slice(
    currentIndex,
    currentIndex + COURSES_PER_PAGE
  );

  nextCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("courses_block");
    courseCard.innerHTML = `
      <div class="courses_block_item">
        <div class="courses_block_item_img" style="background-image: url('http://82.202.137.140:5000${
          course.banner
        }');">
          <h1 class="name_courses_item">${course.title}</h1>
          <div class="courses_block_item_pay">
            <p class="courses_block_item_cost">${course.cost} р</p>
            <button>Записаться</button>
          </div>
        </div>
        <div class="courses_block_item_i">
          <p class="time_line_courses"><span>Время прохождения: </span>${
            course.time
          } ч</p>
          <div class="short_text">
            <p>${course.description}</p>
          </div>
          <div class="stack_raz">
            ${course.tags.map((tag) => `<p>${tag}</p>`).join(" ")}
          </div>
        </div>
      </div>
    `;
    coursesContainer.appendChild(courseCard);
  });

  currentIndex += COURSES_PER_PAGE;

  // Показывать или скрывать кнопку
  loadMoreBtn.style.display =
    currentIndex >= filteredCourses.length ? "none" : "block";
}

function applyFilter(tag) {
  activeFilter = tag;
  currentIndex = 0;
  coursesContainer.innerHTML = "";

  if (tag === "all") {
    filteredCourses = allCourses;
  } else {
    filteredCourses = allCourses.filter((course) => course.tags.includes(tag));
  }

  // Если ничего не найдено — показать сообщение
  if (filteredCourses.length === 0) {
    loadMoreBtn.style.display = "none";
    coursesContainer.innerHTML = `<p class='donthavecourses'>Курсы не найдены по выбранному фильтру.</p>`;
  } else {
    renderCourses();
  }
}

// Обработчики фильтров
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.getAttribute("data-tag");
    applyFilter(tag);
  });
});

// Кнопка "Загрузить ещё"
loadMoreBtn.addEventListener("click", () => {
  renderCourses();
});
