/*  If you are checking this code and analyzed
    all of them, you will notice that
    the randomizer code is not
    that efficient. 
    It is better to use any other alternatives
    to create a more efficient randomizer.
*/

// The chosen Katakana to answer
const chosenKatakana = document.getElementById('chosenKatakana');
const katakanas = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ",       "ユ",       "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ",                   "ヲ",
    "ン",
    "ガ", "ギ", "グ", "ゲ", "ゴ",
    "ザ", "ジ", "ズ", "ゼ", "ゾ",
    "ダ", "ヂ", "ヅ", "デ", "ド",
    "バ", "ビ", "ブ", "ベ", "ボ",
    "パ", "ピ", "プ", "ペ", "ポ",
    "キャ",       "キュ",       "キョ",
    "シャ",       "シュ",       "ショ",
    "チャ",       "チュ",       "チョ",
    "ニャ",       "ニュ",       "ニョ",
    "ヒャ",       "ヒュ",       "ヒョ",
    "ミャ",       "ミュ",       "ミョ",
    "リャ",       "リュ",       "リョ",
    "ギャ",       "ギュ",       "ギョ",
    "ジャ",       "ジュ",       "ジョ",
    "ビャ",       "ビュ",       "ビョ",
    "ピャ",       "ピュ",       "ピョ"
]
const randomizeKatakana = Math.floor(Math.random() * (katakanas.length - 0));
chosenKatakana.innerText = katakanas[randomizeKatakana];

// Answers to choose with
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
const chooseRomajiArray = [];
let chosenRandomNum; // This is used for line 96.
function randomizer(arrayName, pushTo) {
    const random = Math.floor(Math.random() * (arrayName.length - 0) + 0);
    chosenRandomNum = random;
    const lists = arrayName[random];
    pushTo.push(lists);
}
function reload(timeout) {
    setTimeout(() => {
        window.location.reload();
    }, timeout)
}

// Randomize number, and the number applies to romajiLetters, and push to chooseRomajiArray (line 73).
for (let i = 0; i < 4; i++) {
    randomizer(romajiLetters, chooseRomajiArray);
}
chooseRomajiArray.push(romajiLetters[randomizeKatakana]);
const finalArray = [];
if (chooseRomajiArray.includes(romajiLetters[randomizeKatakana])) {
    for (let i = 0; i < 5; i++) {
        randomizer(chooseRomajiArray, finalArray);
        chooseRomajiArray.splice(chosenRandomNum, 1);
    }
}
console.log(katakanas[randomizeKatakana]);
console.log(romajiLetters[randomizeKatakana]);

// The most important step to show a button list of answers.
const parent = document.getElementById('chooseRomaji');
const notif = document.querySelector('.notif');
finalArray.map((letter, index) => {
    const button = document.createElement('button');
    button.innerText = letter;
    parent.appendChild(button);
    // Check each array index, if it equals to chosen romajiLetters, give the user new question by refreshing the page.
    if (finalArray[index] === romajiLetters[randomizeKatakana]) {
        button.addEventListener("click", () => {
            button.classList.add('isTrue');
            reload(750);
        })
    } else {
        button.addEventListener("click", () => {
            button.classList.add('isWrong');
            setTimeout(() => {
                notif.classList.add('show');
                notif.innerText = `The correct answer is ${romajiLetters[randomizeKatakana]}`;
                reload(1000);
            }, 300)
        })
    }
})