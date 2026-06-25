// 10 लेवल्स और उनका पूरा डेटाबेस
const quizData = {
    l1: { name: "🌕 मून मिशन (Level 1)", cost: 0, qList: [
        { q: "चंद्रयान-3 की सफल लैंडिंग चाँद के किस हिस्से पर हुई थी?", options: ["उत्तरी ध्रुव", "दक्षिणी ध्रुव", "भूमध्य रेखा", "बैक साइड"], answer: 1, fact: "चंद्रयान-3 चाँद के दक्षिणी ध्रुव (South Pole) पर उतरने वाला दुनिया का पहला अंतरिक्ष यान बना।" }
    ]},
    l2: { name: "🔴 मार्स रोवर (Level 2)", cost: 0, qList: [
        { q: "नासा के किस रोवर ने मंगल ग्रह पर पानी के सबूत खोजे थे?", options: ["क्युरियोसिटी", "पर्सिवियरेंस", "अपॉर्चुनिटी", "सभी ने"], answer: 3, fact: "नासा के इन सभी रोवर्स ने अलग-अलग समय पर मंगल पर प्राचीन झीलों और पानी के बहाव के निशान खोजे हैं।" }
    ]},
    l3: { name: "🌌 ब्लैक होल रहस्य (Level 3)", cost: 30, qList: [
        { q: "ब्लैक होल के चारों ओर की उस सीमा को क्या कहते हैं जिससे प्रकाश भी बाहर नहीं आ सकता?", options: ["इवेंट होराइजन", "सिंगुलैरिटी", "डार्क जोन", "एस्ट्रोリング"], answer: 0, fact: "इवेंट होराइजन (Event Horizon) ब्लैक होल की अंतिम सीमा होती है, इसे पार करने के बाद वापसी असंभव है।" }
    ]},
    l4: { name: "☀️ आदित्य-L1 सूर्य मिशन (Level 4)", cost: 40, qList: [
        { q: "आदित्य-L1 को पृथ्वी से कितनी दूर 'L1' बिंदु पर स्थापित किया गया है?", options: ["10 लाख किमी", "15 लाख किमी", "50 लाख किमी", "1 करोड़ किमी"], answer: 1, fact: "यह बिंदु पृथ्वी और सूर्य की कुल दूरी का केवल 1% है, जो लगभग 15 लाख किलोमीटर दूर है।" }
    ]},
    l5: { name: "👽 एलियंस और यूएफओ (Level 5)", cost: 50, qList: [
        { q: "अमेरिका की उस गुप्त जगह का क्या नाम है जहाँ एलियंस की रिसर्च की अफवाहें हैं?", options: ["एरिया 51", "जोन 10", "नासा लैब 9", "पेंटागन बेस"], answer: 0, fact: "नेवादा मरुस्थल में स्थित 'Area 51' एक अत्यधिक सुरक्षित मिलिट्री बेस है जिसे यूएफओ थ्योरीज़ के लिए जाना जाता है।" }
    ]},
    l6: { name: "🪐 शनि के छल्ले (Level 6)", cost: 60, qList: [
        { q: "शनि ग्रह के छल्ले मुख्य रूप से किस चीज़ से बने हैं?", options: ["गैस और धुआँ", "बर्फ और चट्टान के टुकड़े", "सोना और चांदी", "अंतरिक्ष कचरा"], answer: 1, fact: "शनि के खूबसूरत वलय (Rings) अरबों छोटे पानी की बर्फ और धूल-मिट्टी के कणों से बने हैं।" }
    ]},
    l7: { name: "🌠 गगनयान मिशन (Level 7)", cost: 70, qList: [
        { q: "भारत के पहले मानव अंतरिक्ष मिशन का नाम क्या है?", options: ["चंद्रयान-4", "गगनयान", "अंतरिक्षवीर", "इसरो-मैन"], answer: 1, fact: "गगनयान मिशन के तहत भारत अपने अंतरिक्ष यात्रियों (गगननॉट्स) को पृथ्वी की निचली कक्षा में भेजेगा।" }
    ]},
    l8: { name: "🔭 जेम्स वेब टेलीस्कोप (Level 8)", cost: 80, qList: [
        { q: "दुनिया का सबसे शक्तिशाली अंतरिक्ष टेलीस्कोप जेम्स वेब किसने बनाया है?", options: ["ISRO", "NASA & ESA", "Roscosmos", "SpaceX"], answer: 1, fact: "जेम्स वेब स्पेस टेलीस्कोप ब्रह्मांड की सबसे शुरुआती आकाशगंगाओं की तस्वीरें भेजने में सक्षम है।" }
    ]},
    l9: { name: "☄️ एस्टेरॉयड हमला (Level 9)", cost: 90, qList: [
        { q: "करोड़ों साल पहले डायनासोरों का अंत किस खगोलीय पिंड के टकराने से हुआ था?", options: ["ब्लैक होल", "एस्टेरॉयड (क्षुद्रग्रह)", "धूमकेतु", "सौर तूफ़ान"], answer: 1, fact: "लगभग 6.6 करोड़ साल पहले मैक्सिको के पास एक विशाल एस्टेरॉयड टकराने से पृथ्वी की जलवायु बदल गई और डायनासोर खत्म हो गए।" }
    ]},
    l10: { name: "🚀 मिल्की वे गैलेक्सी (Level 10)", cost: 100, qList: [
        { q: "हमारी आकाशगंगा (Milky Way) का आकार कैसा है?", options: ["गोलाकार", "अंडाकार", "सर्पिलाकार (Spiral)", "अनियमित"], answer: 2, fact: "हमारी मिल्की वे गैलेक्सी एक स्पाइरल (सर्पिलाकार) आकाशगंगा है जिसके केंद्र में एक विशाल ब्लैक होल है।" }
    ]}
};

const dailyFacts = [
    "मंगल ग्रह पर सूर्यास्त (Sunset) नीले रंग का दिखाई देता है।",
    "अंतरिक्ष में यदि पानी को खुला छोड़ दिया जाए, तो वह उबलने लगेगा और फिर बर्फ बन जाएगा।",
    "न्यूट्रॉन तारा एक सेकंड में लगभग 600 बार घूम सकता है।"
];

let coins = parseInt(localStorage.getItem('astro_coins')) || 100;
let unlockedLevels = JSON.parse(localStorage.getItem('unlocked_levels')) || ['l1', 'l2'];
let currentLevelKey = '';
let currentQIndex = 0;
let levelScore = 0;
let timer;
let timeLeft = 20;
let isAnswered = false;

// Initialize Application
window.onload = function() {
    updateCoinsDisplay();
    loadLevels();
    loadDailyFacts();
    setupPWA();
};

function updateCoinsDisplay() {
    const coinEl = document.getElementById('user-coins');
    if(coinEl) coinEl.innerText = coins;
    localStorage.setItem('astro_coins', coins);
}

function loadLevels() {
    const list = document.getElementById('levels-list');
    if(!list) return;
    list.innerHTML = '';
    Object.keys(quizData).forEach(key => {
        const lvl = quizData[key];
        const isLocked = !unlockedLevels.includes(key);
        
        const card = document.createElement('div');
        card.className = `level-card ${isLocked ? 'locked' : ''}`;
        card.innerHTML = `
            <div style="text-align: left;">
                <h4 style="margin-bottom:4px;">${lvl.name}</h4>
                <small>${isLocked ? `🔓 खोलने के लिए: 🪙 ${lvl.cost}` : '✅ खेलने के लिए तैयार'}</small>
            </div>
            <span>${isLocked ? '🔒' : '▶️'}</span>
        `;
        card.onclick = () => handleLevelClick(key, isLocked, lvl.cost);
        list.appendChild(card);
    });
}

function handleLevelClick(key, isLocked, cost) {
    if (isLocked) {
        if (coins >= cost) {
            if(confirm(`क्या आप इस लेवल को 🪙 ${cost} कॉइन्स देकर अनलॉक करना चाहते हैं?`)) {
                coins -= cost;
                unlockedLevels.push(key);
                localStorage.setItem('unlocked_levels', JSON.stringify(unlockedLevels));
                updateCoinsDisplay();
                loadLevels();
                triggerVibration(50);
            }
        } else {
            alert("❌ आपके पास पर्याप्त कॉइन्स नहीं हैं! क्विज़ खेलकर और कॉइन्स कमाएं।");
        }
    } else {
        startQuiz(key);
    }
}

function startQuiz(key) {
    currentLevelKey = key;
    currentQIndex = 0;
    levelScore = 0;
    
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    document.getElementById('quiz-title').innerText = quizData[key].name;
    
    document.querySelectorAll('.ll-btn').forEach(b => b.classList.remove('used'));
    
    showQuestion();
}

function showQuestion() {
    isAnswered = false;
    document.getElementById('fact-box').classList.add('hidden');
    
    const qList = quizData[currentLevelKey].qList;
    const currentQ = qList[currentQIndex];
    
    document.getElementById('progress').style.width = `${((currentQIndex) / qList.length) * 100}%`;
    document.getElementById('question-text').innerText = `${currentQIndex + 1}. ${currentQ.q}`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    currentQ.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, btn);
        container.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 20;
    document.getElementById('timer-display').innerText = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            autoWrongAnswer();
        }
    }, 1000);
}

function checkAnswer(selectedIdx, btn) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timer);
    
    const currentQ = quizData[currentLevelKey].qList[currentQIndex];
    const btns = document.getElementsByClassName('option-btn');
    
    if (selectedIdx === currentQ.answer) {
        btn.classList.add('correct');
        levelScore += 10;
        triggerVibration(60);
    } else {
        btn.classList.add('wrong');
        if(btns[currentQ.answer]) btns[currentQ.answer].classList.add('correct');
        triggerVibration(200);
    }
    
    document.getElementById('fact-text').innerText = currentQ.fact;
    document.getElementById('fact-box').classList.remove('hidden');
}

function autoWrongAnswer() {
    isAnswered = true;
    const currentQ = quizData[currentLevelKey].qList[currentQIndex];
    const btns = document.getElementsByClassName('option-btn');
    if(btns[currentQ.answer]) btns[currentQ.answer].classList.add('correct');
    
    document.getElementById('fact-text').innerText = "⏱️ समय समाप्त! " + currentQ.fact;
    document.getElementById('fact-box').classList.remove('hidden');
    triggerVibration(200);
}

function nextQuestion() {
    currentQIndex++;
    if (currentQIndex < quizData[currentLevelKey].qList.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('score-screen').classList.add('active');
    
    document.getElementById('final-score').innerText = `${levelScore} Pts`;
    
    const earnedCoins = levelScore / 2;
    coins += earnedCoins;
    updateCoinsDisplay();
    
    document.getElementById('earned-coins-text').innerText = `🪙 +${earnedCoins} कॉइन्स कमाए`;
    document.getElementById('score-message').innerText = levelScore > 0 ? "🚀 मिशन सफलतापूर्वक संपन्न हुआ!" : "👨‍🚀 कोई बात नहीं, दोबारा प्रयास करें!";
    
    let currentTotal = parseInt(document.getElementById('lb-current-score').innerText) || 0;
    document.getElementById('lb-current-score').innerText = `${currentTotal + levelScore} Pts`;
}

function useFiftyFifty() {
    if (isAnswered || document.getElementById('ll-fifty').classList.contains('used')) return;
    document.getElementById('ll-fifty').classList.add('used');
    
    const currentQ = quizData[currentLevelKey].qList[currentQIndex];
    const btns = document.getElementsByClassName('option-btn');
    let removed = 0;
    
    for(let i=0; i<btns.length; i++) {
        if(i !== currentQ.answer && removed < 2) {
                    deferredPrompt = e;btn.classList.remove('hidden');});btn.addEventListener('click', () => {if (deferredPrompt) {deferredPrompt.prompt();deferredPrompt.userChoice.then(() => { btn.classList.add('hidden'); });}});}
