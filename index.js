//class locater
var drumBtn = document.querySelectorAll('.drum');

// dectect button clicks
for (var i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {

        console.log(this);
        playSound(this.innerHTML)
        btnA(this.innerHTML);
    });
}

// detect keyboard press
document.addEventListener('keydown', function (event) {
    console.log(event)
    playSound(event.key);
    btnA(event.key);
});

// plays sound
function playSound(char) {

    switch (char) {

        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'a':
            var kick = new Audio('sounds/clap.mp3');
            kick.play();
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'i':
            var snare = new Audio('sounds/ride.mp3');
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'space':
            var tom4 = new Audio('sounds/kick-bass.mp3');
            tom4.play();
            break;

        case ' ':
            var tom4 = new Audio('sounds/kick-bass.mp3');
            tom4.play();
            break;

        default: console.log(char.innerHTML);
            break;
    }
};

function btnA(key) {

    if (key === ' ') {
        key = 'space';
    } else {
        key = key;
    }
    var activeBtn = document.querySelector('.' + key);
    console.log(key);
    activeBtn.classList.add('pressed');

    setTimeout(function () {
        activeBtn.classList.remove('pressed');
    }, 100)
};