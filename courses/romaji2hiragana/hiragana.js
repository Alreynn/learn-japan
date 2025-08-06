/*  If you are checking this code and analyzed
    all of them, you will notice that
    the randomizer code is not
    that efficient. 
    It is better to use any other alternatives
    to create a more efficient randomizer.
*/

// The chosen romaji to answer
const chosenHiraganaRomaji = document.getElementById('chosenHiraganaRomaji');
const romajiLetters = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "fu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya",       "yu",       "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa",                   "wo",
    "n",
    "ga", "gi", "gu", "ge", "go",
    "za", "ji", "zu", "ze", "zo",
    "da", "ji", "zu", "de", "do",
    "ba", "bi", "bu", "be", "bo",
    "pa", "pi", "pu", "pe", "po",
    "kya",      "kyu",      "kyo",
    "sha",      "shu",      "sho",
    "cha",      "chu",      "cho",
    "nya",      "nyu",      "nyo",
    "hya",      "hyu",      "hyo",
    "mya",      "myu",      "myo",
    "rya",      "ryu",      "ryo",
    "gya",      "gyu",      "gyo",
    "ja",       "ju",       "jo",
    "bya",      "byu",      "byo",
    "pya",      "pyu",      "pyo"
]
const randomHiraganaRomaji = Math.floor(Math.random() * (romajiLetters.length - 0));
chosenHiraganaRomaji.innerText = romajiLetters[randomHiraganaRomaji];

// Answers to choose with
const hiraganas = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や",       "ゆ",       "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ",                   "を",
    "ん",
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "ぢ", "づ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
    "きゃ",       "きゅ",       "きょ",
    "しゃ",       "しゅ",       "しょ",
    "ちゃ",       "ちゅ",       "ちょ",
    "にゃ",       "にゅ",       "にょ",
    "ひゃ",       "ひゅ",       "ひょ",
    "みゃ",       "みゅ",       "みょ",
    "りゃ",       "りゅ",       "りょ",
    "ぎゃ",       "ぎゅ",       "ぎょ",
    "じゃ",       "じゅ",       "じょ",
    "びゃ",       "びゅ",       "びょ",
    "ぴゃ",       "ぴゅ",       "ぴょ"
]
const chooseHiraganaArray = [];
let chosenRandomNum; // This is used for line 96.
function randomizer(arrayName, pushTo) {
    const random = Math.floor(Math.random() * (arrayName.length - 0) + 0);
    chosenRandomNum = random;
    const lists = arrayName[random];
    pushTo.push(lists);
}
function reload() {
    setTimeout(() => {
        window.location.reload();
    }, 1000)
}

// Randomize number, and the number applies to hiraganas, and push to chooseHiraganaArray (line 73).
for (let i = 0; i < 4; i++) {
    randomizer(hiraganas, chooseHiraganaArray);
}
chooseHiraganaArray.push(hiraganas[randomHiraganaRomaji]);
const finalArray = [];
if (chooseHiraganaArray.includes(hiraganas[randomHiraganaRomaji])) {
    for (let i = 0; i < 5; i++) {
        randomizer(chooseHiraganaArray, finalArray);
        chooseHiraganaArray.splice(chosenRandomNum, 1);
    }
}
console.log(romajiLetters[randomHiraganaRomaji]);
console.log(hiraganas[randomHiraganaRomaji]);

// The most important step to show a button list of answers.
const parent = document.getElementById('chooseHiragana');
const notif = document.querySelector('.notif');
finalArray.map((letter, index) => {
    const button = document.createElement('button');
    button.innerText = letter;
    parent.appendChild(button);
    // Check each array index, if it equals to chosen hiragana, give the user new question by refreshing the page.
    if (finalArray[index] === hiraganas[randomHiraganaRomaji]) {
        button.addEventListener("click", () => {
            button.classList.add('isTrue');
            reload();
        })
    } else {
        button.addEventListener("click", () => {
            button.classList.add('isWrong');
            setTimeout(() => {
                notif.classList.add('show');
                notif.innerText = `The correct answer is ${hiraganas[randomHiraganaRomaji]}`;
                reload();
            }, 300)
        })
    }
})