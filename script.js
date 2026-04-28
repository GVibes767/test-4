const quizData = [
  { tag:"Иаков 3", question:"В уроке говорится, что язык — это незначительная мелочь, которая почти не влияет на духовную жизнь человека.", correctAnswer:"no", correctText:"Верно. В уроке подчёркивается обратное: язык — один из важнейших духовных индикаторов. Кто учится удерживать язык, тот учится управлять и другими сферами жизни.", wrongText:"Неверно. Урок как раз показывает, что язык имеет огромный духовный вес: он может врачевать или разрушать, а по речи часто видно состояние сердца." },
  { tag:"Сила слова", question:"Слово может не только ранить, но и буквально формировать атмосферу вокруг человека и внутри него.", correctAnswer:"yes", correctText:"Верно. В уроке говорится, что язык способен либо нести жизнь, либо создавать напряжение, страх, обиду, презрение и разрушение отношений.", wrongText:"Неверно. По мысли урока, слово влияет не только на внешний разговор, но и на внутреннюю атмосферу человека, семьи, команды и сообщества." },
  { tag:"Осуждение и сплетни", question:"Если человека нет рядом, обсуждать его за спиной допустимо, если это выглядит как искренний обмен мнениями.", correctAnswer:"no", correctText:"Верно. В уроке подчёркивается, что обсуждение за спиной легко превращается в сплетню и осуждение. Библейский путь — говорить ради помощи и наставления, а не ради разбора чужих ошибок.", wrongText:"Неверно. Даже если разговор выглядит прилично, обсуждение человека без него часто формирует предвзятый образ и заражает атмосферу презрением." },
  { tag:"Архангел Михаил", question:"Даже Михаил Архангел не присвоил себе право окончательного суда, а сказал: «Да запретит тебе Господь».", correctAnswer:"yes", correctText:"Верно. Это один из центральных библейских акцентов урока: суд принадлежит Богу, а не человеку.", wrongText:"Неверно. Урок специально приводит этот пример, чтобы показать: даже ангел не берёт на себя окончательный суд, тем более человек." },
  { tag:"Практика в конфликте", question:"Если меня спровоцировали или задели словом, лучшая духовная реакция — сразу вернуть человеку ту же боль, но более умно и тонко.", correctAnswer:"no", correctText:"Верно. Урок учит не вступать в словесный баттл, а останавливать себя, искать Божий взгляд и не превращать язык в оружие мести.", wrongText:"Неверно. Такая реакция только усиливает греховный круг. В уроке подчёркивается важность остановки, молитвы и трезвого ответа, а не возврата удара." },
  { tag:"Современная среда", question:"Злословие сегодня живёт не только в устной речи, но и в комментариях, сторис, переписках, ироничных подписях и пересылке унизительных скриншотов.", correctAnswer:"yes", correctText:"Верно. Урок специально переносит тему в современную реальность и показывает, что цифровая среда тоже стала местом греха языка.", wrongText:"Неверно. В уроке прямо говорится, что злословие давно вышло за пределы устной речи и активно живёт в онлайне." },
  { tag:"Сердце и язык", question:"Главная проблема решается просто дисциплиной губ: если молчать, сердце уже автоматически станет здоровым.", correctAnswer:"no", correctText:"Верно. Урок подчёркивает, что язык связан с сердцем. Нужно не только сдерживать рот, но и лечить внутреннее состояние: обиду, гордость, презрение, раздражение.", wrongText:"Неверно. Контроль речи важен, но корень глубже — в сердце. Если сердце грубое, язык всё равно будет искать выход." },
  { tag:"Родительские слова", question:"Даже без физических наказаний словесное давление, сравнение и постоянное унижение могут глубоко ранить человека на годы.", correctAnswer:"yes", correctText:"Верно. В уроке говорится, что голос прошлого может звучать в человеке очень долго. Слова родителей способны либо укреплять, либо внутренне ломать.", wrongText:"Неверно. Урок приводит именно этот пример: словесное давление может ранить глубоко и надолго, даже если внешнего насилия не было." },
  { tag:"Духовная зрелость", question:"Свобода слова и уверенная подача ещё не означают духовную зрелость.", correctAnswer:"yes", correctText:"Верно. В уроке прямо сказано: человек может говорить резко, ярко и вроде бы по фактам, но при этом разрушать других и самого себя.", wrongText:"Неверно. Урок подчёркивает, что духовная зрелость проявляется не в резкости и эффектности, а в способности не разрушать словом." },
  { tag:"Итог урока", question:"Если человек позволяет языку постоянно быть каналом сарказма, клеветы, унижения и осуждения, это опасный внутренний процесс, а не безобидная привычка.", correctAnswer:"yes", correctText:"Верно. Это один из главных выводов урока: злоречие — не шутка и не стиль общения, а духовно опасный процесс, который разрушает и самого человека, и окружающих.", wrongText:"Неверно. Урок как раз показывает, что постоянная токсичная речь — это тревожный симптом внутреннего состояния, который нельзя оставлять без покаяния и перемен." }
];

let currentQuestion = -1;
let score = 0;

const startBtn = document.getElementById("startBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const heroCard = document.querySelector(".hero");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const scoreNow = document.getElementById("scoreNow");
const questionTag = document.getElementById("questionTag");
const questionText = document.getElementById("questionText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
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
  const q = quizData[currentQuestion];
  questionCounter.textContent = `Вопрос ${currentQuestion + 1} из ${quizData.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
  questionTag.textContent = q.tag;
  questionText.textContent = q.question;
  feedbackBox.classList.add("hidden");
  feedbackBox.classList.remove("correct", "wrong");
  yesBtn.disabled = false;
  noBtn.disabled = false;
}
function answerQuestion(answer) {
  const q = quizData[currentQuestion];
  const isCorrect = answer === q.correctAnswer;
  if (isCorrect) score += 1;
  scoreNow.textContent = score;
  feedbackBox.classList.remove("hidden");
  feedbackBox.classList.add(isCorrect ? "correct" : "wrong");
  feedbackStatus.textContent = isCorrect ? "Правильный ответ" : "Неправильный ответ";
  feedbackText.textContent = isCorrect ? q.correctText : q.wrongText;
  yesBtn.disabled = true;
  noBtn.disabled = true;
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
yesBtn.addEventListener("click", () => answerQuestion("yes"));
noBtn.addEventListener("click", () => answerQuestion("no"));
nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
});
restartBtn.addEventListener("click", startQuiz);
