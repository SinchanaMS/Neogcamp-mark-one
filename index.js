var readlineSync = require('readline-sync')

var userName = readlineSync.question("Please enter your username: ")
console.log("Welcome to 'How Well Do You Know Me?', ", userName, "!")
score = 0


var questionOne = {
question: "What is my age? ",
answer: "23"
}

var questionTwo = {
question: "Where do I live? ",
answer: "Mysore"
}


var questionThree = {
question: "Where do I work? ",
answer: "Infosys"
}

var questions = [questionOne, questionTwo, questionThree]

for (i=0; i<questions.length; i++){
userAnswer =readlineSync.question(questions[i].question)

if (userAnswer === questions[i].answer) {
    console.log("Yay! You are right!")
    score++
} else {
    console.log("Shoot! You are wrong!")
    score
}
console.log ("Your current score is: ", score)
console.log("---------------")
}

console.log ("You have reached the end of the game.")
console.log ("Thank you for playing! Your total score is: ", score)