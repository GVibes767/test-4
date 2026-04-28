const quizData = [
  {
    tag: "Иаков 3",
    question: "Почему тема языка в уроке названа духовно важной?",
    answers: [
      { text: "Потому что красивые слова помогают выглядеть умнее других", correct: false, explanation: "Неправильно. Урок говорит не о впечатлении на людей, а о духовной ответственности: язык показывает состояние сердца и влияет на жизнь вокруг." },
      { text: "Потому что язык — это один из важных духовных индикаторов сердца", correct: true, explanation: "Правильно. В уроке подчёркивается: язык не мелочь. По речи часто видно, что происходит внутри человека, и куда направлено его сердце." },
      { text: "Потому что главное в вере — говорить много правильных слов", correct: false, explanation: "Неправильно. Вера проявляется не в количестве правильных фраз, а в послушании Богу, состоянии сердца и зрелом отношении к людям." },
      { text: "Потому что молчание всегда лучше любого разговора", correct: false, explanation: "Неправильно. Урок не учит просто молчать всегда. Он учит говорить ответственно, не разрушать словом и позволять Богу исцелять сердце." }
    ]
  },
  {
    tag: "Сила слова",
    question: "Что слово может делать с атмосферой вокруг человека?",
    answers: [
      { text: "Только передавать информацию, без духовных последствий", correct: false, explanation: "Неправильно. Урок показывает, что слово не нейтрально: оно может приносить мир или запускать разрушение." },
      { text: "Формировать атмосферу жизни, мира, страха, обиды или презрения", correct: true, explanation: "Правильно. Слова могут укреплять, исцелять и поддерживать, а могут создавать напряжение, боль, страх и внутреннее разрушение." },
      { text: "Влиять только на того, кто говорит, но не на слушателей", correct: false, explanation: "Неправильно. Слово влияет и на говорящего, и на слушающих, и на отношения между людьми." },
      { text: "Не иметь значения, если человек говорил это в эмоциях", correct: false, explanation: "Неправильно. Эмоции объясняют состояние, но не отменяют ответственности за произнесённые слова." }
    ]
  },
  {
    tag: "Осуждение и сплетни",
    question: "Что чаще всего происходит, когда человека обсуждают за спиной?",
    answers: [
      { text: "Это всегда помогает человеку исправиться", correct: false, explanation: "Неправильно. Если человек отсутствует, разговор часто не помогает ему, а формирует осуждение и предвзятость." },
      { text: "Это автоматически считается духовным наставлением", correct: false, explanation: "Неправильно. Духовное наставление имеет цель восстановить человека, а не разобрать его недостатки в его отсутствие." },
      { text: "Разговор легко превращается в сплетню, осуждение и заражает атмосферу", correct: true, explanation: "Правильно. В уроке подчёркивается: обсуждение за спиной может создать ложный образ человека и посеять презрение в сердцах." },
      { text: "Это допустимо, если говорить мягким тоном", correct: false, explanation: "Неправильно. Мягкий тон не делает осуждение правильным. Важна цель, сердце и путь, которым мы говорим о человеке." }
    ]
  },
  {
    tag: "Право суда",
    question: "Чему учит пример Михаила Архангела со словами: «Да запретит тебе Господь»?",
    answers: [
      { text: "Что окончательный суд принадлежит Богу, а не человеку", correct: true, explanation: "Правильно. Даже ангел не взял на себя право окончательного суда. Это сильное напоминание о смирении и духовной осторожности." },
      { text: "Что верующий должен всегда молчать и никогда не различать зло", correct: false, explanation: "Неправильно. Различать зло нужно, но присваивать себе Божье место судьи — опасно." },
      { text: "Что осуждение допустимо, если человек уверен в своей правоте", correct: false, explanation: "Неправильно. Уверенность в своей правоте не даёт человеку права становиться окончательным судьёй другого." },
      { text: "Что духовная власть выражается в резких обвинениях", correct: false, explanation: "Неправильно. В уроке показано обратное: духовная зрелость проявляется в смирении, трезвости и страхе Божьем." }
    ]
  },
  {
    tag: "Практика в конфликте",
    question: "Какой ответ ближе к духовной зрелости, если тебя задели словом?",
    answers: [
      { text: "Сразу ответить сильнее, чтобы человек понял свою ошибку", correct: false, explanation: "Неправильно. Такой ответ часто только усиливает конфликт и превращает язык в оружие мести." },
      { text: "Сделать вид, что ничего нет, но внутри копить обиду", correct: false, explanation: "Неправильно. Внешнее молчание без внутреннего исцеления может стать скрытой горечью." },
      { text: "Остановиться, проверить сердце, помолиться и ответить трезво", correct: true, explanation: "Правильно. Урок ведёт к практике остановки: не отвечать из боли, а искать Божий взгляд и не разрушать словом." },
      { text: "Рассказать всем, как человек неправильно поступил", correct: false, explanation: "Неправильно. Это может стать продолжением осуждения и заражением других людей конфликтом." }
    ]
  },
  {
    tag: "Современная среда",
    question: "Где сегодня может проявляться злословие, кроме обычного разговора?",
    answers: [
      { text: "Только в публичных выступлениях", correct: false, explanation: "Неправильно. Злословие проявляется не только публично, но и в повседневной коммуникации." },
      { text: "В комментариях, сторис, переписках, сарказме и пересылке унизительных скриншотов", correct: true, explanation: "Правильно. Урок переносит тему в современную реальность: цифровая среда тоже стала местом греха языка." },
      { text: "Только когда человек произносит грубые матерные слова", correct: false, explanation: "Неправильно. Злословие может звучать культурно, иронично и даже “интеллигентно”, но всё равно разрушать." },
      { text: "Нигде, если это написано, а не сказано вслух", correct: false, explanation: "Неправильно. Написанное слово тоже несёт духовную ответственность и может ранить не меньше устного." }
    ]
  },
  {
    tag: "Сердце и язык",
    question: "Почему одного контроля губ недостаточно для изменения речи?",
    answers: [
      { text: "Потому что язык вообще невозможно контролировать", correct: false, explanation: "Неправильно. Язык трудно укротить, но Бог ведёт человека к зрелости и ответственности." },
      { text: "Потому что настоящая проблема часто находится глубже — в сердце", correct: true, explanation: "Правильно. Урок подчёркивает: важно не только сдерживать слова, но и позволить Богу лечить обиду, гордость, презрение и раздражение." },
      { text: "Потому что лучше вообще не разговаривать с людьми", correct: false, explanation: "Неправильно. Цель не в изоляции, а в исцелённой речи, которая несёт жизнь." },
      { text: "Потому что главное — научиться красиво формулировать мысли", correct: false, explanation: "Неправильно. Красивая формулировка не решает проблему, если внутри остаются горечь, осуждение и нечистый мотив." }
    ]
  },
  {
    tag: "Родительские слова",
    question: "Какой вывод урок делает о словесном давлении в семье?",
    answers: [
      { text: "Слова родителей не имеют большого значения, если они обеспечивают ребёнка", correct: false, explanation: "Неправильно. Обеспечение важно, но слова могут глубоко формировать внутренний мир ребёнка." },
      { text: "Сравнение и унижение могут оставить глубокую внутреннюю рану на годы", correct: true, explanation: "Правильно. Урок показывает: голос прошлого может долго звучать внутри человека, если слова были разрушительными." },
      { text: "Жёсткие слова всегда делают человека сильнее", correct: false, explanation: "Неправильно. Жёсткость может не укрепить, а сломать, если в ней нет любви, истины и мудрости." },
      { text: "Ребёнок всё равно ничего не запоминает", correct: false, explanation: "Неправильно. Многие слова, сказанные в семье, остаются внутри человека и влияют на самооценку, страхи и поведение." }
    ]
  },
  {
    tag: "Духовная зрелость",
    question: "Что НЕ является доказательством духовной зрелости?",
    answers: [
      { text: "Способность говорить резко, уверенно и эффектно", correct: true, explanation: "Правильно. Урок подчёркивает: резкость и уверенная подача не равны зрелости, если слова разрушают людей." },
      { text: "Способность остановиться и не разрушить человека словом", correct: false, explanation: "Неправильно. Это как раз признак зрелости — не использовать слово как оружие." },
      { text: "Готовность проверить своё сердце перед Богом", correct: false, explanation: "Неправильно. Это важная часть духовной зрелости: не только смотреть на других, но и честно видеть себя." },
      { text: "Желание говорить истину с любовью", correct: false, explanation: "Неправильно. Истина без любви может ранить, а любовь без истины может стать слабостью. Зрелость соединяет истину и любовь." }
    ]
  },
  {
    tag: "Итог урока",
    question: "Какой главный практический вывод можно сделать из урока?",
    answers: [
      { text: "Слово не бывает нейтральным: оно либо несёт жизнь, либо разрушает", correct: true, explanation: "Правильно. Это один из главных выводов урока: речь человека должна быть под Божьим светом, потому что слово имеет продолжение." },
      { text: "Если человек прав, он может говорить как угодно", correct: false, explanation: "Неправильно. Даже правую мысль можно сказать разрушительно. Важны истина, любовь, мотив и дух, в котором человек говорит." },
      { text: "Лучше не вступать ни в какие разговоры", correct: false, explanation: "Неправильно. Урок не про бегство от общения, а про зрелую, исцелённую и ответственную речь." },
      { text: "Главное — не говорить плохого публично, а в личных переписках можно", correct: false, explanation: "Неправильно. Бог видит не только публичные слова, но и скрытые разговоры, переписки, мотивы и состояние сердца." }
    ]
  }
];

let currentQuestion = -1;
let score = 0;
let answered = false;

const startBtn = document.getElementById("startBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const heroCard = document.querySelector(".hero");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const scoreNow = document.getElementById("scoreNow");
const questionTag = document.getElementById("questionTag");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackStatus = document.getElementById("feedbackStatus");
const feedbackText = document.getElementById("feedbackText");
const nextBtn = document.getElementById("nextBtn");
const finalTitle = document.getElementById("finalTitle");
const finalScore = document.getElementById("finalScore");
const finalText = document.getElementById("finalText");
const understandingLevel = document.getElementById("understandingLevel");
const restartBtn = document.getElementById("restartBtn");

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreNow.textContent = score;
  heroCard.classList.add("hidden");
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = quizData[currentQuestion];
  questionCounter.textContent = `Вопрос ${currentQuestion + 1} из ${quizData.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
  questionTag.textContent = q.tag;
  questionText.textContent = q.question;
  feedbackBox.classList.add("hidden");
  feedbackBox.classList.remove("correct", "wrong");
  answersContainer.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "btn answer-btn";
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer.text}</span>`;
    button.addEventListener("click", () => answerQuestion(index));
    answersContainer.appendChild(button);
  });
}

function answerQuestion(index) {
  if (answered) return;
  answered = true;

  const q = quizData[currentQuestion];
  const selectedAnswer = q.answers[index];
  const buttons = [...answersContainer.querySelectorAll(".answer-btn")];
  const isCorrect = selectedAnswer.correct;

  if (isCorrect) score += 1;
  scoreNow.textContent = score;

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (q.answers[i].correct) button.classList.add("show-correct");
  });

  buttons[index].classList.add(isCorrect ? "correct-answer" : "wrong-answer");
  feedbackBox.classList.remove("hidden");
  feedbackBox.classList.add(isCorrect ? "correct" : "wrong");
  feedbackStatus.textContent = isCorrect ? "Правильный ответ" : "Неправильный ответ";
  feedbackText.textContent = selectedAnswer.explanation;
}

function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  finalScore.textContent = String(score);

  let title = "";
  let text = "";
  let level = "";

  if (score >= 9) {
    title = "Очень сильный результат";
    text = "Ты хорошо уловил суть урока: язык связан с сердцем, а духовная зрелость проверяется тем, как человек говорит и что он выпускает из себя в напряжённые моменты.";
    level = "Высокое понимание темы";
  } else if (score >= 7) {
    title = "Хороший результат";
    text = "Основа темы у тебя есть. Полезно ещё раз пройтись по местам Писания и обратить внимание на практические примеры из урока — особенно про сплетни, осуждение и внутреннюю мотивацию языка.";
    level = "Уверенное понимание темы";
  } else if (score >= 5) {
    title = "Нормальный старт";
    text = "Ты уже уловил часть темы, но здесь есть что укрепить. Пересмотри урок и ещё раз отследи мысль: язык — это не просто слова, а продолжение состояния сердца.";
    level = "Базовое понимание темы";
  } else {
    title = "Нужно ещё вникнуть";
    text = "Ничего страшного. Этот урок как раз про практику и честный самоанализ. Пересмотри материал и вернись к тесту — второй проход обычно даёт гораздо больше ясности.";
    level = "Тема требует повторного разбора";
  }

  finalTitle.textContent = title;
  finalText.textContent = text;
  understandingLevel.textContent = level;
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
});
restartBtn.addEventListener("click", startQuiz);
