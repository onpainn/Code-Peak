const filterButtons = document.querySelectorAll('.btn_search_courses');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const coursesContainer = document.getElementById('courses');

  const courses = [
      {
        id:'',
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        baner:'image',
        longdescription:'More...',
        tags: ['1С', 'Бухгалтерия']
      },
      {
        title: 'React',
        time: '10 часов',
        description: 'Создание интерактивных SPA приложений<br>Основы React и компонентов',
        tags: ['Frontend', 'JavaScript', 'TS', 'React', 'REST API']
      },
      {
        title: 'Основы Backend',
        time: '6 часов',
        description: 'Изучение принципов серверной архитектуры, REST API и баз данных.',
        tags: ['Backend', 'mongoDB', 'REST API']
      },
      {
        title: 'Node JS',
        time: '7 часов',
        description: 'Разработка серверных приложений на Node.js, Express и MongoDB.',
        tags: ['Backend', 'mongoDB', 'NodeJS', 'Express']
      },
      {
        title: '1С: Управление',
        time: '9 часов',
        description: 'Изучите учет продаж, закупок и складских операций в 1С:Управление торговлей.',
        tags: ['1С']
      },
      {
        title: 'Безопасность в Backend',
        time: '5 часов',
        description: 'Методы защиты API, аутентификация пользователей и работа с JWT.',
        tags: ['Backend', 'API']
      },
      {
        title: 'Основы дизайна',
        time: '6 часов',
        description: 'Теория композиции и типографики<br>Работа в Figma',
        tags: ['Design', 'Figma']
      },
      {
        title: 'lending',
        time: '4 часа',
        description: 'Разработка сайта только по шаблону Основы html css',
        tags: ['Frontend', 'HTML', 'CSS']
      },
      
      {
        title: 'Fullstack разработка',
        time: '20 часов',
        description: 'Разработка полного проекта от бэка до фронта React + Node.js',
        tags: ['Backend', 'Frontend']
      },
      {
        title: '3D разработка',
        time: '8 часов',
        description: 'Работа с 3d изображениями <br>Работа в Blender',
        tags: ['3D', 'Blender']
      }
    ];
let selectedTags = [];
let filteredCourses = [];
let coursesLoaded = 0;
const coursesPerLoad = 6;
// При клике на фильтр
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active_courses');
      const tag = btn.dataset.tag;

      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
      } else {
        selectedTags.push(tag);
      }

      updateCourses(); // Автоматическое обновление курсов
    });
  });

  function updateCourses() {
    coursesContainer.innerHTML = ' ';
    coursesLoaded = 0;

    // Фильтрация курсов
    if (selectedTags.length > 0) {
      filteredCourses = courses.filter(course => 
        course.tags.some(tag => selectedTags.includes(tag))
      );
    } else {
      filteredCourses = [...courses];
    }

    if (filteredCourses.length === 0) {
      coursesContainer.innerHTML = '<p class="donthavecourses">Нет курсов по выбранным фильтрам.</p>';
      loadMoreBtn.style.display = 'none';
    } else {
      loadCourses();
      if (filteredCourses.length > coursesPerLoad) {
        loadMoreBtn.style.display = 'flex';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  }
 // Подгрузка курсов партиями
 function loadCourses() {
    const nextCourses = filteredCourses.slice(coursesLoaded, coursesLoaded + coursesPerLoad);

    nextCourses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      courseCard.innerHTML = `
        <div class="course_item">
            <h1 class="name_courses_item">${course.title}</h1>
            <p class="time_line_courses">${course.time}</p>
            <div class="short_text">
                <p>${course.description}</p>
            </div>
            <div class="stack_raz">
                ${course.tags.map(tag => `<p>${tag}</p>`).join(' ')}
            </div>
            <a href="#" class="button_array_courses"><svg width="1.30vw" height="1.30vw" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6667 14.8889V9.33333M17.6667 9.33333H12.1111M17.6667 9.33333L9.33333 17.6667M26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5Z" stroke-width="2"/>
                            </svg></a>
        </div>
        `;
      coursesContainer.appendChild(courseCard);
    });

    coursesLoaded += coursesPerLoad;

    if (coursesLoaded >= filteredCourses.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  loadMoreBtn.addEventListener('click', loadCourses);

  // При загрузке страницы показываем все курсы
  updateCourses();