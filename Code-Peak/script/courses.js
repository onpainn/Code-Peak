
const filterButtons = document.querySelectorAll('.btn_search_courses');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const coursesContainer = document.getElementById('courses');

  const courses = [
      {
        id: 1,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['1С', 'Бухгалтерия']
      },
{
        id: 2,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['Frontend', 'JavaScript', 'TS', 'React', 'REST API']
      },
      {
        id: 3,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['1С', 'Бухгалтерия']
      },
      {
        id: 4,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['1С', 'Бухгалтерия']
      },
      {
        id: 5,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['1С', 'Бухгалтерия']
      },
      {
        id: 6,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['3D', 'Blender']
      },
      {
        id: 7,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['Backend', 'Frontend']
      },
      {
        id: 8,
        title: '1С: Бухгалтерия',
        time: '8 часов',
        description: 'Освойте основы ведения бухгалтерского учета в системе 1С:Бухгалтерия.',
        teacher: 'Андрей Козлов',
        baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
        content: [
          "Основы бухгалтерского учета и структура бухгалтерского баланса",
          "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
          "Настройка параметров учёта, работа с справочниками и документами",
          "Учёт товаров, услуг, основных средств, заработной платы",
          "Формирование отчетности (НДС, прибыль, УСН)",
          "Проведение инвентаризации и закрытие периода",
          "Работа с типовыми ошибками и их исправление",
          "Подготовка и выгрузка данных в контролирующие органы"
        ],
        goals: [
          "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
          "Освоить ведение бухгалтерии малого и среднего бизнеса",
          "Подготовка к работе в компании или самостоятельному учёту"
        ],
        requirements: [
          "Базовые знания бухгалтерии желательны, но не обязательны",
          "Доступ к учебной версии 1С или демонстрационной базе"
        ],
        result: [
          "Умение вести бухгалтерский и налоговый учёт",
          "Понимание проводок, отчётности и закрытия периода",
          "Навыки практической работы в 1С:Бухгалтерии",
          "Сертификат о прохождении курса"
        ],
        tags: ['1С', 'Бухгалтерия']
      },

      // {
      //   id: 2,
      //   title: 'React',
      //   time: '10 часов',
      //   description: 'Создание интерактивных SPA приложений<br>Основы React и компонентов',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Frontend', 'JavaScript', 'TS', 'React', 'REST API']
      // },


      // {
      //   id: 3,
      //   title: 'Основы Backend',
      //   time: '6 часов',
      //   description: 'Изучение принципов серверной архитектуры, REST API и баз данных.',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Backend', 'mongoDB', 'REST API']
      // },


      // {
      //   id: 4,
      //   title: 'Node JS',
      //   time: '7 часов',
      //   description: 'Разработка серверных приложений на Node.js, Express и MongoDB.',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Backend', 'mongoDB', 'NodeJS', 'Express']
      // },


      // {
      //   id: 5,
      //   title: '1С: Управление',
      //   time: '9 часов',
      //   description: 'Изучите учет продаж, закупок и складских операций в 1С:Управление торговлей.',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['1С']
      // },


      // {
      //   id: 6,
      //   title: 'Безопасность в Backend',
      //   time: '5 часов',
      //   description: 'Методы защиты API, аутентификация пользователей и работа с JWT.',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Backend', 'API']
      // },


      // {
      //   id: 7,
      //   title: 'Основы дизайна',
      //   time: '6 часов',
      //   description: 'Теория композиции и типографики<br>Работа в Figma',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Design', 'Figma']
      // },


      // {
      //   id: 8,
      //   title: 'lending',
      //   time: '4 часа',
      //   description: 'Разработка сайта только по шаблону Основы html css',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Frontend', 'HTML', 'CSS']
      // },

      
      // {
      //   id: 9,
      //   title: 'Fullstack разработка',
      //   time: '20 часов',
      //   description: 'Разработка полного проекта от бэка до фронта React + Node.js',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['Backend', 'Frontend']
      // },


      // {
      //   id: 10,
      //   title: '3D разработка',
      //   time: '8 часов',
      //   description: 'Работа с 3d изображениями <br>Работа в Blender',
      //   baner:'../include/pictures-cours/hack coding GIF by Matthew Butler.gif',
      //   content: [
      //     "Основы бухгалтерского учета и структура бухгалтерского баланса",
      //     "Интерфейс и функциональность 1С:Бухгалтерия 8.3",
      //     "Настройка параметров учёта, работа с справочниками и документами",
      //     "Учёт товаров, услуг, основных средств, заработной платы",
      //     "Формирование отчетности (НДС, прибыль, УСН)",
      //     "Проведение инвентаризации и закрытие периода",
      //     "Работа с типовыми ошибками и их исправление",
      //     "Подготовка и выгрузка данных в контролирующие органы"
      //   ],
      //   format: {
      //     type: "Видеоуроки + практика",
      //     materials: ["видео", "практика в 1С", "шпаргалки", "тесты"],
      //     support: "чат с преподавателем"
      //   },
      //   goals: [
      //     "Научить работать с 1С:Бухгалтерией 8.3 на практическом уровне",
      //     "Освоить ведение бухгалтерии малого и среднего бизнеса",
      //     "Подготовка к работе в компании или самостоятельному учёту"
      //   ],
      //   requirements: [
      //     "Базовые знания бухгалтерии желательны, но не обязательны",
      //     "Доступ к учебной версии 1С или демонстрационной базе"
      //   ],
      //   result: [
      //     "Умение вести бухгалтерский и налоговый учёт",
      //     "Понимание проводок, отчётности и закрытия периода",
      //     "Навыки практической работы в 1С:Бухгалтерии",
      //     "Сертификат о прохождении курса"
      //   ],
      //   tags: ['3D', 'Blender']
      // }
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
 

  loadMoreBtn.addEventListener('click', loadCourses);

  // При загрузке страницы показываем все курсы
  updateCourses();

  const detailsEl = document.getElementById('courseDetails');
  const overlayEl = document.getElementById('overlay-details');

 




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
            <button>Записаться</button>
            <span onclick="showDetails(${course.id})" class="button_array_courses"><svg width="1.30vw" height="1.30vw" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6667 14.8889V9.33333M17.6667 9.33333H12.1111M17.6667 9.33333L9.33333 17.6667M26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C20.4036 26 26 20.4036 26 13.5Z" stroke-width="2"/>
                            </svg></span>
        </div>
        `;
      coursesContainer.appendChild(courseCard);
    });

    coursesLoaded += coursesPerLoad;

    if (coursesLoaded >= filteredCourses.length) {
      loadMoreBtn.style.display = 'none';
    }
  }
       // Показать детали курса
    function showDetails(id) {
      const course = courses.find(c => c.id === id);
      if (!course) return;

      let html = `
          <img class="baner-details" src="${course.baner}">
          <h2>${course.title}</h2>
          <div class="teacher_block">
            <img src="../include/header/Avatar.png">
            <p class="teacher_courses">${course.teacher}</p>
          </div>
          
          <p>Длительность: ${course.time}</p>
          <p>Короткое описание: ${course.description}</p>
      `;

      if (course.content) {
        html += "<h3>Программа курса:</h3><ul>";
        course.content.forEach(item => {
          html += `<li>${item}</li>`;
        });
        html += "</ul>";
      }

      if (course.goals) {
        html += "<h3>Цели курса:</h3><ul>";
        course.goals.forEach(g => html += `<li>${g}</li>`);
        html += "</ul>";
      }

      if (course.requirements) {
        html += "<h3>Требования:</h3><ul>";
        course.requirements.forEach(r => html += `<li>${r}</li>`);
        html += "</ul>";
      }

      if (course.result) {
        html += "<h3>Результат обучения:</h3><ul>";
        course.result.forEach(r => html += `<li>${r}</li>`);
        html += "</ul>";
      }

      if (course.targetAudience) {
        html += "<h3>Для кого:</h3><ul>";
        course.targetAudience.forEach(p => html += `<li>${p}</li>`);
        html += "</ul>";
      }

      detailsEl.innerHTML = html;
      overlayEl.style.display = 'flex';
    }

    function closeOverlay() {
      overlayEl.style.display = 'none';
    }

    overlayEl.addEventListener('click', function (e) {
      if (e.target === overlayEl) {
        closeOverlay();
      }
    });

    // Закрытие оверлея
    function closeOverlay() {
      overlayEl.style.display = 'none';
    }
    // Закрытие по клику вне контента
    overlayEl.addEventListener('click', function (e) {
      if (e.target === overlayEl) {
        closeOverlay();
      }
    });