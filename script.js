// quiz data is stored and read here
var quizData = [
    {
        question: "نویسنده کدام یک از این کتاب ها، همان نویسنده ی کتاب بابا لنگ دراز است؟",
        a: "دشمن عزیز",
        b: "ندایی از درون",
        c: "سایه جولی",
        d: "آنشرلی",
        correct: "a",
    },
    {
        question: "داستان “مدیر مدرسه” اثر کیست؟",
        a: "بزرگ علوی",
        b: "محمد علی جمال زاده",
        c: "جلال آل احمد",
        d: "سیمین دانشور",
        correct: "c",
    },
    {
        question: "کدام کتاب اثر ویکتور هوگو نیست؟",
        a: "بینوایان",
        b: "سپید دندان",
        c: "روح انسان",
        d: "مردی که میخندد",
        correct: "b",
    },
    {
        question: "رمان بی نوایان اثر کیست؟",
        a: "ویکتور هوگو",
        b: "گابریل گاریسا مارکس",
        c: "جورج اورول",
        d: "ارنسن همینگ وی",
        correct: "a",
    },
    {
        question: "شعر “تو مو بینی و مجنون پیچش مو-تو ابرو، او اشارت های ابرو” از کیست؟",
        a: "سعدی",
        b: "وحشی بافقی",
        c: "حافظ",
        d: "بیدل دهلوی",
        correct: "b",
    },
      {
        question: "“دور دنیا در هشتاد روز ” اثر کیست؟",
        a: "ویکتور هوگو",
        b: "چارلز دیکنز",
        c: "جیین وبستر",
        d: "ژول ورن",
        correct: "d",
    },
      {
        question: "پدر شعر نو لقب کیست؟",
        a: "احمد شاملو",
        b: "مهدی اخوان ثالث",
        c: "سهراب سپهری",
        d: "نیما یوشیج",
        correct: "d",
    },
      {
        question: "کدامیک از شخصیت های زیر در شاهنامه پدر رستم بود است؟",
        a: "افراسیاب",
        b: "زال",
        c: "تهمورث",
        d: "سام",
        correct: "b",
    },
      {
        question: "حافظ الگوی کدام شاعر اروپایی بوده است؟",
        a: "گوته",
        b: "شکسپیر",
        c: "کریستوفر کادول",
        d: "جان ادوارد",
        correct: "a",
    },
      {
        question: "قالب شعری شاهنامه فردوسی چیست؟",
        a: "مثنوی",
        b: "قصیده",
        c: "رباعی",
        d: "غزل",
        correct: "a",
    },
      {
        question: "لسان الغیب لقب کیست؟",
        a: "شهریار",
        b: "حافظ",
        c: "سعدی",
        d: "مولوی",
        correct: "b",
    },
      {
        question: "رمان “صد سال تنهایی” اثر کیست؟",
        a: "خولیو کورتاسا",
        b: "گابریل گارسیا مارکز",
        c: "ماریو بارگاس یوسا",
        d: "خورخه لوئیس بورخس",
        correct: "b",
    },
      {
        question: "کتاب قلعه حیوانات اثر کیست؟",
        a: "امیلی جین برونته",
        b: "ویکتور هوگو",
        c: "مارگارت میچل",
        d: "جورج اورول",
        correct: "d",
    },
      {
        question: "کدام یک از شاعران با سعدی هم عصر بوده است؟",
        a: "مولوی",
        b: "نظامی",
        c: "سنایی",
        d: "حافظ",
        correct: "a",
    },
      {
        question: "منظومه موش و گربه متعلق به کیست؟",
        a: "رودکی",
        b: "عطار نیشابوری",
        c: "عبید زاکانی",
        d: "خیام",
        correct: "c",
    },
      {
        question: "همسر جلال آل احمد کیست؟",
        a: "صدیقه دولت آبادی",
        b: "پروین اعتصامی",
        c: "سیمین دانشور",
        d: "سیمین بهبانی",
        correct: "c",
    },
      {
        question: "“هشت کتاب” اثر کیست؟",
        a: "اخوان ثالث",
        b: "هوشنگ ابتهاج",
        c: "نیما یوشیج",
        d: "سهراب سپهری",
        correct: "d",
    },
      {
        question: "مصرع یوسف گمگشته باز آید به کنعان غم مخور از کیست؟",
        a: "مولوی",
        b: "سعدی",
        c: "حافظ",
        d: "وحشی بافقی",
        correct: "c",
    },
      {
        question: "کتاب سنگر و قمقمه های خالی اثر کیست",
        a: "بهرام صادقی",
        b: "سیامک گلشیری",
        c: "فرهاد کشوری",
        d: "مهدی ابراهیمی",
        correct: "a",
    },
      {
        question: "کتاب سرخ سفید اثر کیست",
        a: "بزرگ علوی",
        b: "مهدی یزدانی خرم",
        c: "بهاره باقری",
        d: "حسین سناپور",
        correct: "b",
    },
];

let currentQuiz = 0;
let score = 0;
let scoreProgress = 50;
let wrongProgress = 50;
let timeProgress = 0;
let time = 0;
let Question = 1;
let stop = true;



// access to dom
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var quizContainer = document.getElementById('quizContainer');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var scores = document.getElementById('scores');
var progress1 = document.getElementById('progress1');
var progress2 = document.getElementById('progress2');
var timeBar = document.getElementById('timeBar');
var button1 = new Audio("sound/button1.mp3");
var button2 = new Audio("sound/button2.mp3");
var soundStart = new Audio("sound/start.mp3");
var contentS = document.getElementById('contentS');
var quizS = document.getElementById('quizS');
var body = document.getElementById('body');
var ModalBody = document.getElementById('ModalBody');
var modalQ = document.getElementById('modalQ');

soundStart.loop = true;




// Start the quiz game
function startQuiz() {
    loadQuiz();
    timeBarProgress()
    soundStart.volume = 0.5;
    soundStart.play();
}


// It is called every time during the initial page load and to move the data
function loadQuiz() {
    stop = true;
    timeBarProgress()
    document.getElementById('a').style.display = 'none';
    document.getElementById('b').style.display = 'none';
    document.getElementById('c').style.display = 'none';
    document.getElementById('d').style.display = 'none';
    a_text.parentElement.style.backgroundColor = '#546F79';
    b_text.parentElement.style.backgroundColor = '#546F79';
    c_text.parentElement.style.backgroundColor = '#546F79';
    d_text.parentElement.style.backgroundColor = '#546F79';
    answerEls.forEach(answerEl => answerEl.checked = false);
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}



// It is called every time during the initial page load and to move the data
function loadQuiz() {
    stop = true;
    timeBarProgress()
    document.getElementById('a').style.display = 'none';
    document.getElementById('b').style.display = 'none';
    document.getElementById('c').style.display = 'none';
    document.getElementById('d').style.display = 'none';
    a_text.parentElement.style.backgroundColor = '#546F79';
    b_text.parentElement.style.backgroundColor = '#546F79';
    c_text.parentElement.style.backgroundColor = '#546F79';
    d_text.parentElement.style.backgroundColor = '#546F79';
    answerEls.forEach(answerEl => answerEl.checked = false);
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
scores.innerHTML = quizData.length + ' - ' + Question;
progress1.style.width = scoreProgress + '%';
progress2.style.width = wrongProgress + '%';
timeBar.style.width = timeProgress + '%';



// In the specified time period, it goes to the next question
function nextQuiz() {
    setTimeout(
        function () {
            currentQuiz++;
            Question++
            scores.innerHTML = quizData.length + ' - ' + Question;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quizContainer.style.display = 'none';
                soundStart.pause();
                ModalBody.innerHTML = ' شما ' + score + ' پاسخ درست و ' + (quizData.length - score) + ' پاسخ اشتباه داشته اید '
                quizS.style.display = 'none';
                modalQ.style.display = 'block';
            }
        }, 2500);
}



// Program timer to play the game at a certain time
function timeBarProgress() {
    timeProgress = 0;
    if (time == 0) {
        time = 1;
        var timeId = setInterval(frame, 100);

        function frame() {
            if (stop == false) {
                return;
            }
            if (timeProgress == 100) {
                document.getElementById(quizData[currentQuiz].correct + '_text').parentElement.style.backgroundColor = '#66BB6A';
                button2.play();
                scoreProgress -= 2.5;
                wrongProgress += 2.5;
                progress1.style.width = scoreProgress + '%';
                progress2.style.width = wrongProgress + '%';
                score++;
                nextQuiz()
            }
            if (timeProgress >= 100) {
                clearInterval(timeId);
                time = 0;
            } else {
                timeProgress++;
                timeBar.style.width = timeProgress + "%";
            }
        }
    }
}



// Returns the user selection
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}



// Determines the correct answer
function Answer() {
    stop = false;
    var answer = getSelected();
    if (answer === quizData[currentQuiz].correct) {
        button1.play();
        score++;
        scoreProgress += 2.5;
        wrongProgress -= 2.5;
        progress1.style.width = scoreProgress + '%';
        progress2.style.width = wrongProgress + '%';
    }
    if (answer != quizData[currentQuiz].correct) {
        button2.play();
        document.getElementById(answer + '_text').parentElement.style.backgroundColor = "#EE534F";
        scoreProgress -= 2.5;
        wrongProgress += 2.5;
        progress1.style.width = scoreProgress + '%';
        progress2.style.width = wrongProgress + '%';
    }
    document.getElementById(quizData[currentQuiz].correct + '_text').parentElement.style.backgroundColor = '#66BB6A';
    nextQuiz();
}



// Start the game from the home page of the app
function startQuizS() {
    function startTemp() {
        quizS.style.display = 'block';
        body.style.width = '100vw';
        body.style.display = 'flex';
        body.style.paddingTop = '7%'
        body.style.justifyContent = 'center';
    }
    contentS.style.display = 'none';
    body.style.animationName = 'body';
    setTimeout("body.style.backgroundColor = '#344955';", 1900);
    setTimeout("startQuiz()", 2000);
    setTimeout(startTemp, 2100);
}


// Return to the main page
function homeEnd() {
    modalQ.style.display = 'none';
    body.style.animationName = 'bodyEnd';
    setTimeout("body.style.backgroundColor = '#344955';", 1900);
    setTimeout("document.location.reload();", 2000);
}
