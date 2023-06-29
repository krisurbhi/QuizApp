const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Color and Style Sheets',
        'b': 'Cascading Style Sheets',
        'c': 'Coloured Special Sheets',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'What year was Javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': '1997',
        'correct': 'b'
    },
    {
        'que':'JavaScript is which type of language?',
        'a': 'High-level',
        'b': 'Assembly-language',
        'c': 'Object-Oriented',
        'd': 'Object-Based',
        'correct': 'd' 
    },
    {
        'que': 'In how many ways can CSS be written in?',
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'correct': 'c'  
    }
]
let index = 0;
let total = questions.length;
let right = 0,wrong =0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data= questions[index]
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}
//initial call
loadQuestion();

