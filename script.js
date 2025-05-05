const question1Btn = document.getElementById('question1Btn');
const question2Btn = document.getElementById('question2Btn');
const question3Btn = document.getElementById('question3Btn');


question1Btn.onclick = function() {
    let answer1 = document.getElementById('answer1');
    if (answer1.textContent === 'Це стіл!') {
        answer1.textContent = '';
    } else {
        answer1.textContent = 'Це стіл!';
    }
}
question2Btn.onclick = function() {
    let answer2 = document.getElementById('answer2');
    if (answer2.textContent === 'Сліди.') {
        answer2.textContent = '';
    } else {
        answer2.textContent = 'Сліди.';
    }
}
question3Btn.onclick = function() {
    let answer3 = document.getElementById('answer3');
    if (answer3.textContent === 'Дощ.') {
        answer3.textContent = '';
    } else {
        answer3.textContent = 'Дощ.';
    }
}