// Variable 
let time = 5;
let score = 0;
let Playing;
let selesai = false;
let kataSebelumnya;

const wordInput = document.querySelector('#wordInput');
const randomWord = document.getElementById('word');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const playButton = document.getElementById('play-button');

const words = [
    'empty',
    'walking',
    'road',
    'pretty',
    'smartphone',
    'car',
    'motorcycle',
    'teeth',
    'laptop',
    'guitar',
    'program',
    'website',
    'number',
    'letter',
    'dissapointed',
    'cry',
    'baby',
    'sweet',
    'home',
    'with',
    'great',
    'crazy',
    'javascript',
    'player',
    'typing',
    'clothes',
    'jeans',
    'jacket',
    'running',
    'figth',
    'boring',
    'function',
    'event',
    'button',
    'click',
    'keyboard',
    'mouse',
    'design',
    'visual',
    'space',
    'control',
    'shift',
    'backspace',
    'graphics',
    'performances',
    'verified',
    'harmony',
    'charging',
    'revenge'
];


// window.addEventListener('load', init);
playButton.addEventListener('click', function(){init()});


// Initialize Game
function init(){
    // Load word from array
    showWord(words);
    // Start Match when input word
    wordInput.addEventListener('input', startMatch);
    // Waktu permainan
    setInterval(countdown, 1000);
    // Cek status permainan
    setInterval(cekStatus, 50);
}

// Start Match
function startMatch() {
    if (kataCocok()) {
        Playing = true;
        time = 6;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    // if score -1 display 0
    if (score == -1) {
        scoreDisplay.innerHTML = '0';
    }
    else{
        scoreDisplay.innerHTML = score;
    }
}

// Aturan permainan
function kataCocok() {
    if (wordInput.value === randomWord.innerHTML) {
        message.innerHTML = "Correct !!!";
        message.style.color = 'rgb(38, 206, 38)';
        return true;
    }
    else{
        message.innerHTML = "";
        return false
    }
}

// Menapilkan kata
function showWord(words) {
    // // Acak kata dalam array
    const randomIndex = Math.floor(Math.random() * words.length);
    const kataRandom = words[randomIndex];
    if (kataRandom === kataSebelumnya) {
        showWord(words);
    }
    kataSebelumnya = kataRandom;
    // Output kata yang telah diacak
    randomWord.innerHTML = words[randomIndex];
}

// Countdown Time
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        time--;
    }
    else if (time === 0) {
        Playing = false;
    }

    // Menampilkan Time
    timeDisplay.innerHTML = time;
}

// Check game status
function cekStatus() {
    if(!Playing && time === 0){
        message.innerHTML = "Game Over !!!";
        message.style.color ='#e25a53';
        playButton.innerHTML = "Retry";
        playButton.style.backgroundColor = '#e25a53';
        wordInput.setAttribute('maxlength', 0); 
        // score = -1;
        selesai = true;
        playButton.addEventListener('click',function() {
            location.reload();
        })
    }
}

