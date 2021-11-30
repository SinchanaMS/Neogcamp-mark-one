var readlineSync = require('readline-sync')

var userName = readlineSync.question("Please enter your username: ")
console.log("Welcome to 'How Well Do You Know Me?', ", userName, "!")
score = 0

var highScores = ["Sinchana: 4", "Sahana: 3"]

var questionOne = {
question: "What is my favourite book? ",
answer: "harry potter"
}

var questionTwo = {
question: "What is my favourite pet? ",
answer: "dog"
}


var questionThree = {
question: "How many siblings do I have? ",
answer: "1"
}

var questionFour = {
    question: "What instrument do I play? ",
    answer: "ukulele"
  }

var questions = [questionOne, questionTwo, questionThree, questionFour]

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
console.log("Here are the high scores: ", highScores)
console.log("If you have hit one of these two scores, send me a screenshot and I'll update it!")