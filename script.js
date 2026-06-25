// सवालों का डेटाबेस (Hindi)
const quizData = {
    moon: [
        {
            q: "चंद्रयान-3 भारत के किस राज्य के स्पेस सेंटर से लॉन्च किया गया था?",
            options: ["केरल", "आंध्र प्रदेश", "तमिलनाडु", "ओडिशा"],
            answer: 1,
            fact: "मज़ेदार तथ्य: चंद्रयान-3 को आंध्र प्रदेश के श्रीहरिकोटा में स्थित सतीश धवन अंतरिक्ष केंद्र से लॉन्च किया गया था।"
        },
        {
            q: "चाँद पर कदम रखने वाला पहला इंसान कौन था?",
            options: ["बज़ एल्ड्रिन", "यूरी गागरिन", "नील आर्मस्ट्रांग", "राकेश शर्मा"],
            answer: 2,
            fact: "मज़ेदार तथ्य: नील आर्मस्ट्रांग ने 1969 में अपोलो 11 मिशन के दौरान चाँद पर पहला कदम रखा था।"
        },
        {
            q: "चंद्रयान-3 के लैंडर का क्या नाम है?",
            options: ["विक्रम", "प्रज्ञान", "ध्रुव", "आदित्य"],
            answer: 0,
            fact: "मज़ेदार तथ्य: लैंडर का नाम भारतीय अंतरिक्ष कार्यक्रम के जनक डॉ. विक्रम साराभाई के नाम पर 'विक्रम' रखा गया था।"
        }
    ],
    mars: [
        {
            q: "भारत के पहले मंगल मिशन का आधिकारिक नाम क्या था?",
            options: ["Mars-1", "MOM (Mars Orbiter Mission)", "MangalRover", "RedPlanet-1"],
            answer: 1,
            fact: "मज़ेदार तथ्य: भारत दुनिया का पहला ऐसा देश है जिसने अपने पहले ही प्रयास में मंगल ग्रह की कक्षा में सफलतापूर्वक प्रवेश किया।"
        },
        {
            q: "मंगल ग्रह (Mars) का रंग लाल क्यों दिखाई देता है?",
            options: ["लाल मिट्टी के कारण", "आयरन ऑक्साइड (लोहे के जंग) के कारण", "ज्यादा गर्मी के कारण", "एलियंस के कारण"],
            answer: 1,
            fact: "मज़ेदार तथ्य: मंगल की सतह पर भारी मात्रा में आयरन ऑक्साइड मौजूद है, जिसे हम आम भाषा में जंग कहते हैं।"
        }
    ]
};

let currentLevel = '';
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    hasAnswered = false;
    
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    
    document.getElementById('quiz-title').innerText = level === 'moon' ? "🌕 मून मिशन" : "🔴 मार्स मिशन";
    
    showQuestion();
}

function showQuestion() {
    hasAnswered = false;
    document.getElementById('fact-box').classList.add('hidden');
    document.getElementById('score-display').innerText = `स्कोर: ${score}`;
    
    const qList = quizData[currentLevel];
    const currentQ = qList[currentQuestionIndex];
    
    // प्रोग्रेस बार अपडेट करें
    const progressPercent = ((currentQuestionIndex) / qList.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${currentQ.q}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = option;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, clickedButton) {
    if (hasAnswered) return; // एक बार उत्तर देने के बाद लॉक करें
    hasAnswered = true;
    
    const currentQ = quizData[currentLevel][currentQuestionIndex];
    const options = document.getElementsByClassName('option-btn');
    
    if (selectedIndex === currentQ.answer) {
        clickedButton.classList.add('correct');
        score += 10;
        document.getElementById('score-display').innerText = `स्कोर: ${score}`;
    } else {
        clickedButton.classList.add('wrong');
        options[currentQ.answer].classList.add('correct'); // सही उत्तर को ग्रीन करें
    }
    
    // फैक्ट बॉक्स दिखाएं
    document.getElementById('fact-text').innerText = currentQ.fact;
    document.getElementById('fact-box').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentLevel].length) {
        showQuestion();
    } else {
        showScoreScreen();
    }
}

function showScoreScreen() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('score-screen').classList.add('active');
    
    const totalQuestions = quizData[currentLevel].length;
    document.getElementById('final-score').innerText = `${score} Pts`;
    
    let msg = "";
    if(score === totalQuestions * 10) msg = "🚀 गजब! आप तो स्पेस एक्सपर्ट हैं!";
    else if (score >= (totalQuestions * 10) / 2) msg = "👍 बहुत बढ़िया प्रयास! थोड़ा और पढ़ें।";
    else msg = "👨‍🚀 कोई बात नहीं, फिर से कोशिश करें और नया सीखें!";
    
    document.getElementById('score-message').innerText = msg;
}

function goToHome() {
    document.getElementById('score-screen').classList.remove('active');
    document.getElementById('home-screen').classList.add('active');
}

function showLockedMessage() {
    alert("🔒 यह स्तर अभी बंद है! इसे खोलने के लिए आगे के अपडेट्स का इंतजार करें या एडवर्टाइजमेंट देखें।");
}
